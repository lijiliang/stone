/*
 * @Author: Benson
 * @Date: 2018-12-26 11:19:13
 * @LastEditors: Benson
 * @LastEditTime: 2018-12-26 11:47:35
 * @Description: 敏感词管理 控制器
 */
'use strict';

const Controller = require('egg').Controller;

class SensitiveController extends Controller {
  // 添加敏感词列表
  async type() {
    const { ctx } = this;
    const payload = ctx.request.body || {};
    const res = await ctx.service.sensitive.type(payload);
    ctx.returnBody(200, '添加成功', res);
  }

  // 查询所有敏感词
  async index() {
    const { ctx } = this;
    const res = await ctx.service.sensitive.index();
    ctx.returnBody(200, '获取成功', res);
  }

  // 创建敏感词
  async create() {
    const { ctx } = this;
    const payload = ctx.request.body || {};
    const res = await ctx.service.sensitive.create(payload);
    ctx.returnBody(200, '添加成功', res);
  }
}

module.exports = SensitiveController;
