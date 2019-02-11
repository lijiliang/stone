'use strict';

const Controller = require('egg').Controller;

/**
 * @controller permissions-role 角色管理(后台)
 */
class RoleController extends Controller {

  /**
   * @summary 角色列表
   * @description 获取角色列表
   * @router get /api/admin/v1/role
   * @apikey Bearer
   * @response 200 roleListRestonse 列表数据
   */
  async index() {
    const ctx = this.ctx;
    const res = await ctx.service.permissions.role.index();
    ctx.returnBody(200, '列表数据', res);
  }

  /**
   * @summary 获取单个角色
   * @description 获取获取单个角色信息
   * @router get /api/admin/v1/role/{id}
   * @request path string *id
   * @apikey
   * @response 200 roleQueryRestonse 获取成功
   */
  async show() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用Service进行业务处理
    const res = await service.permissions.role.show(id);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '获取成功', res);
  }

  /**
   * @summary 创建角色
   * @description 创建角色
   * @router post /api/admin/v1/role
   * @apikey
   * @request body roleCreateRequest *body
   * @response 200 roleQueryRestonse 添加成功
   */
  async create() {
    const { ctx, service } = this;
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(ctx.rule.roleCreateRequest, payload);
    // 调用 Service 进行业务处理
    const res = await service.permissions.role.create(payload);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '添加成功', res);
  }

  /**
   * @summary 更新角色信息
   * @description 修改角色信息
   * @router put /api/admin/v1/role/{id}
   * @request path string *id
   * @apikey
   * @request body roleCreateRequest *body
   * @response 200 roleQueryRestonse 修改成功
   */
  async update() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(ctx.rule.roleCreateRequest, payload);
    // 调用 Service 进行业务处理
    const res = await service.permissions.role.update(id, payload);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '修改成功', res);
  }

  /**
   * @summary 删除单个角色
   * @description 删除单个角色
   * @router delete /api/admin/v1/role/{id}
   * @request path string *id
   * @apikey
   * @response 200 baseResponseSuccess 删除成功
   */
  async destroy() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用 Service进行业务处理
    const res = await service.permissions.role.destroy(id);
    // 设置响应内容和响应状态
    ctx.returnBody(200, '删除成功', res);
  }

  /**
   * @summary 删除多个角色
   * @description 删除所选接口(字符串 转成 条件id[])
   * @router delete /api/admin/v1/role
   * @apikey
   * @request body deleteIdsRequest *ids
   * @response 200 baseResponseSuccess 删除成功
   */
  async removes() {
    const { ctx, service } = this;
    const { ids } = ctx.request.body;
    // 组装参数
    const _ids = ids.split(',');
    // 调用 Service 进行业务处理
    const res = await service.permissions.role.removes(_ids);
    // 设置响应内容和响应状态
    ctx.returnBody(200, '操作成功', res);
  }

}

module.exports = RoleController;
