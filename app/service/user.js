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
    const _current = current ? current : 1; // 当前页数
    const _pageSize = pageSize ? pageSize : 10; // 每页条数
    const _userType = userType; // 用户类型，1:admin ;2:会员
    const _offset = ((Number(_current)) - 1) * Number(_pageSize); // 偏移量

    const query = {
      attributes: [ 'userid', 'username', 'email', 'mobile', 'avatar', 'sex', 'state', 'user_type', 'last_login_ip', 'last_login_time' ], // 需要显示字段
      limit: toInt(_pageSize), // 条数限制
      offset: toInt(_offset), // 起始位置 从0开始
    };

    // 如果有用户类型
    if (_userType) {
      query.where = {
        user_type: _userType,
      };
    }

    const user = await ctx.model.User.findAndCountAll(query);

    // 返回整理后的数据
    const _list = user.rows.map(e => {
      const jsonObject = Object.assign({}, e.dataValues);
      // jsonObject.last_login_ip = e.last_login_ip;
      jsonObject.last_login_time = this.ctx.helper.formatTime(e.last_login_time);
      return jsonObject;
    });

    return {
      total: user.count,
      curent: toInt(_current),
      pageSize: toInt(_pageSize),
      list: _list,
    };
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
