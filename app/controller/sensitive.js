/*
 * @Author: Benson
 * @Date: 2018-12-26 11:19:13
 * @LastEditors: Benson
 * @LastEditTime: 2018-12-26 17:52:34
 * @Description: 敏感词管理 控制器
 */
'use strict';

const Controller = require('egg').Controller;

class SensitiveController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.typeParamRule = {
      typeid: { type: 'string', required: true, message: 'id必须是数字类型' },
      content: { type: 'string', required: true, message: '敏感字不正确' },
    };
  }

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

  // 获取单个
  async show() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用Service进行业务处理
    const res = await service.sensitive.show(id);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '获取成功', res);
  }

  // 修改
  async update() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(this.typeParamRule, payload);
    // 调用 Service 进行业务处理
    const res = await service.sensitive.update(id, payload);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '修改成功', res);
  }

  // 删除单个
  async destroy() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用 Service进行业务处理
    const res = await service.sensitive.destroy(id);
    // 设置响应内容和响应状态
    ctx.returnBody(200, '删除成功', res);
  }

  // 删除所选用户(字符串 转成 条件id[])
  async removes() {
    const { ctx, service } = this;
    const { ids } = ctx.request.body;
    // 组装参数
    const _ids = ids.split(',');
    // 调用 Service 进行业务处理
    const res = await service.sensitive.removes(_ids);
    // 设置响应内容和响应状态
    ctx.returnBody(200, '操作成功', res);

  }
}


module.exports = SensitiveController;
