'use strict';

const Controller = require('egg').Controller;

/**
 * @controller website 后台网站管理
 */
class WebsiteController extends Controller {
  /**
   * @summary 获取用户
   * @description 分页获取用户信息
   * @router get /api/v1/website
   * @request query integer pageNo 页码 默认 1
   * @request query integer pageSize 单页数量 默认 20
   */
  async index() {
    const { ctx } = this;
    ctx.returnBody(200, '保存成功', { name: 'dfd' });
  }
}

module.exports = WebsiteController;
