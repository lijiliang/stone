'use strict';

const Controller = require('egg').Controller;

/**
 * @controller resource 资源接口
 */
class ResourceController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.paramRule = {
      title: { type: 'string', required: true, message: '标题不能为空' },
      path: { type: 'string', required: true, message: '路径不能为空' },
    };
  }

  /**
   * @summary 资源列表(分页/模糊)
   * @description 获取资源列表
   * @router get /api/admin/v1/resource
   * @apikey Bearer
   * @request query integer pageNo 页码 默认 1
   * @request query integer pageSize 单页数量 默认 20
   */
  async index() {
    const ctx = this.ctx;
    const res = await ctx.service.permissions.resource.index();
    ctx.returnBody(200, '列表数据', res);
  }

  // 获取单个
  async show() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用Service进行业务处理
    const res = await service.permissions.resource.show(id);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '获取成功', res);
  }

  async create() {
    const { ctx, service } = this;
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(this.paramRule, payload);
    // 调用 Service 进行业务处理
    const res = await service.permissions.resource.create(payload);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '保存成功', res);
  }

  // 修改
  async update() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(this.paramRule, payload);
    // 调用 Service 进行业务处理
    const res = await service.permissions.resource.update(id, payload);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '修改成功', res);
  }

  // 删除单个
  async destroy() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用 Service进行业务处理
    const res = await service.permissions.resource.destroy(id);
    // 设置响应内容和响应状态
    ctx.returnBody(200, '删除成功', res);
  }

  // 删除所选(字符串 转成 条件id[])
  async removes() {
    const { ctx, service } = this;
    const { ids } = ctx.request.body;
    // 组装参数
    const _ids = ids.split(',');
    // 调用 Service 进行业务处理
    const res = await service.permissions.resource.removes(_ids);
    // 设置响应内容和响应状态
    ctx.returnBody(200, '操作成功', res);
  }

  // 获取菜单
  async menu() {
    const { ctx, service } = this;
    // 调用Service进行业务处理
    const res = await service.permissions.resource.menu();
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '获取成功', res);
  }
}

module.exports = ResourceController;
