'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  // 获取用户信息
  async userInfo() {
    const ctx = this.ctx;
    const userId = ctx.query.userId || ctx.user.userId;

    // 获取并填充数据
    const user = await this.service.user.getUserByUser(userId);
    const userInfo = {
      username: user.username,
    };
    ctx.returnBody(200, '获取成功', userInfo);
  }
}

module.exports = UserController;
