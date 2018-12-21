'use strict';

const Service = require('egg').Service;
const uuidv4 = require('uuid/v4');

class UserService extends Service {

  /*
   * 查询邮箱是否已经注册 私有方法
   * @param {String} email 邮箱
   */
  async _hasRegister(email) {
    // 查询用户名
    const user = await this.ctx.model.User.findOne({
      where: { email },
    });
    if (user && user.dataValues.userid) {
      return true;
    }

    return false;
  }

  /*
   * 注册
   * @param {Object} registerParams 用户注册的信息 {password, username, email, mobile}
   */
  async register(registerParams) {
    const { ctx } = this;
    // 密码转hash
    registerParams.password = ctx.helper.createPasswordHash(registerParams.password);
    // 添加uuid
    registerParams.userid = uuidv4().replace(/-/g, '');
    // 是否可以查询到
    const queryResult = await this._hasRegister(registerParams.email);
    if (queryResult) {
      ctx.returnBody(200, '邮箱已被使用', {
        message: '邮箱已被使用',
        flag: false,
      });
      return;
    }

    const userInfo = await ctx.model.User.create(registerParams);
    // 注册成功，返回成功后的数据给前端
    ctx.status = 200;
    ctx.returnBody(200, '注册成功', {
      userId: userInfo.dataValues.userid,
      username: userInfo.dataValues.username,
      email: userInfo.dataValues.email,
      flag: true,
    });

    return userInfo.dataValues;
  }

  /*
   * 登录
   * @param {Object} loginParams   {password, email, mobile}
   */
  async login(loginParams) {
    const { app, ctx } = this;
    const existUser = await this.getUserByMail(loginParams.email);

    // 用户不存在
    if (!existUser) {
      return;
    }

    const { password } = loginParams;
    console.log(ctx.helper.hasPasswordHash(password, existUser.password));
    const equal = ctx.helper.hasPasswordHash(password, existUser.password);
    // 密码不匹配
    if (!equal) {
      return false;
    }

    // 验证通过
    return 'token';

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
