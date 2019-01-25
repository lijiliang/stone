'use strict';

const Controller = require('egg').Controller;
/**
 * @controller logs 日志记录
 */
class LogsController extends Controller {
  /**
   * @summary 获取所有日志记录
   * @description 管理员登录日志
   * @router get /api/v1/logs
   * @apikey
   * @request query integer current eg:1 页码 默认 1
   * @request query integer pageSize eg:10 单页数量 默认 10
   * @response 200 baseResponseSuccess 获取成功
   */
  async index() {
    const { ctx } = this;
    const res = await ctx.service.logs.index();
    ctx.returnBody(200, '获取成功', res);
  }
}

module.exports = LogsController;
