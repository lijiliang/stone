'use strict';

const Controller = require('egg').Controller;

class LogsController extends Controller {
  // 获取所有日志记录
  async index() {
    const { ctx } = this;
    const res = await ctx.service.logs.index();
    ctx.returnBody(200, '获取成功', res);
  }
}

module.exports = LogsController;
