'use strict';

const Service = require('egg').Service;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UserService extends Service {

  // 获取所有用户
  async index() {
    // 当前页数：current; 每页条数：pageSize;  总数：total;  
    const { ctx } = this;
    const { current, pageSize, userType } = ctx.query;
    let _current = current ? current : 1; // 当前页数
    let _pageSize = pageSize ? pageSize : 10;  // 每页条数
    let _userType = userType; // 用户类型，1:admin ;2:会员
    let _offset = ((Number(_current)) - 1) * Number(_pageSize || 10) // 偏移量

    const query = {
      limit: toInt(_pageSize), //条数限制
      offset: toInt(_offset), //起始位置 从0开始
    };

    // 如果有用户类型
    if (_userType) {
      query.where = {
        user_type: _userType
      }
    }
  
    const user = await ctx.model.User.findAndCountAll(query);
    const _data = {
      total: user.count,
      curent: toInt(_current),
      pageSize: toInt(_pageSize),
      list: user.rows
    }
    return _data;
  }
  
  /*
   * 根据userId查找用户
   * @param {String} userId 用户Id
   * @return {Promise[user]} 承载用户的 Promise 对象
   */
  async getUserByUserId(userId) {
    const query = { userId };
    return this.ctx.model.User.findOne({
      where: query,
    });
  }
  /*
  * 根据邮箱，查找用户
  * @param {String} email 邮箱地址
  * @return {Promise[user]} 承载用户的 Promise 对象
  */
  async getUserByMail(email) {
    return this.ctx.model.User.findOne({
      where: {
        email,
      },
    });
  }
}

module.exports = UserService;
