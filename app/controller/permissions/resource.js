'use strict';

const Controller = require('egg').Controller;

/**
 * @controller resource 资源接口
 */
class ResourceController extends Controller {
  /**
   * @summary 资源列表
   * @description 获取资源列表
   * @router get /api/admin/v1/resource
   * @apikey Bearer
   * @response 200 baseResponseSuccess 列表数据
   */
  async index() {
    const ctx = this.ctx;
    const res = await ctx.service.permissions.resource.index();
    ctx.returnBody(200, '列表数据', res);
  }

  /**
   * @summary 获取单个资源
   * @description 获取单个资源信息
   * @router get /api/admin/v1/resource/{id}
   * @request path string *id
   * @apikey
   * @response 200 resourceQueryRestonse 获取成功
   */
  async show() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用Service进行业务处理
    const res = await service.permissions.resource.show(id);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '获取成功', res);
  }

  /**
   * @summary 创建资源
   * @description 创建资源
   * @router post /api/admin/v1/resource/
   * @apikey
   * @request body resourceCreateRequest *body
   * @response 200 resourceQueryRestonse 保存成功
   */
  async create() {
    const { ctx, service } = this;
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(ctx.rule.resourceCreateRequest, payload);
    // 调用 Service 进行业务处理
    const res = await service.permissions.resource.create(payload);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '保存成功', res);
  }

  /**
   * @summary 更新资源
   * @description 修改资源
   * @router put /api/admin/v1/resource/{id}
   * @request path string *id
   * @apikey
   * @request body resourceCreateRequest *body
   * @response 200 resourceQueryRestonse 修改成功
   */
  async update() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(ctx.rule.resourceCreateRequest, payload);
    // 调用 Service 进行业务处理
    const res = await service.permissions.resource.update(id, payload);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '修改成功', res);
  }

  /**
   * @summary 删除单条资源
   * @description 删除单条资源
   * @router delete /api/admin/v1/resource/{id}
   * @request path string *id
   * @apikey
   * @response 200 baseResponseSuccess 删除成功
   */
  async destroy() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用 Service进行业务处理
    const res = await service.permissions.resource.destroy(id);
    // 设置响应内容和响应状态
    ctx.returnBody(200, '删除成功', res);
  }

  /**
   * @summary 删除多条资源
   * @description 删除所选资源(字符串 转成 条件id[])
   * @router delete /api/admin/v1/resource/
   * @apikey
   * @request body deleteIdsRequest *ids
   * @response 200 baseResponseSuccess 操作成功
   */
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
