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

  // 获取所有用户(分页/模糊)
  async index() {
    const ctx = this.ctx;
    const res = await ctx.service.user.index();
    ctx.returnBody(200, '用户列表数据', res);
  }
}

module.exports = UserController;
