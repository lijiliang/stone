'use strict';

const Controller = require('egg').Controller;

/**
 * @controller rbac 角色、用户、资源对应相关接口管理
 */
class RbacController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.resourceParamRule = {
      role_id: { type: 'number', required: true, message: '角色不能为空' },
      resource_id: { type: 'array', required: true, message: '资源id不能为空' },
    };
  }
  /**
   * @summary 保存角色与用户关联
   * @description 保存角色与用户关联
   * @router post /api/admin/v1/roleuser
   * @apikey
   * @request body rbacRoleUserCreateRequest *body
   * @response 200 rbacRoleUserQueryRestonse 添加成功
   */
  async svaeRoleUser() {
    const { ctx, service } = this;
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(ctx.rule.rbacRoleUserCreateRequest, payload);
    // 调用 Service 进行业务处理
    const res = await service.permissions.rbac.svaeRoleUser(payload);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '添加成功', res);
  }

  /**
   * @summary 保存角色与资源关联
   * @description 保存角色与资源关联
   * @router post /api/admin/v1/saveresources
   * @apikey
   * @request body rbacResourceCreateRequest *body
   * @response 200 rbacQueryRestonse 保存成功
   */
  async saveRoleResource() {
    const { ctx, service } = this;
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(this.resourceParamRule, payload);
    const _data = {
      role_id: payload.role_id,
      resource_id: payload.resource_id.join(','),
      resource_id_fe: payload.resource_id_fe.join(','),
    };
    // 调用 Service 进行业务处理
    const res = await service.permissions.rbac.saveRoleResource(_data);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '保存成功', res);
  }

  /**
   * @summary 获取角色与资源关联
   * @description 获取角色与资源关联
   * @router get /api/admin/v1/roleresources/{id}
   * @request path string *id
   * @apikey Bearer
   * @response 200 rbacQueryRestonse 获取成功
   */
  async getRoleResources() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用 Service 进行业务处理
    const res = await service.permissions.rbac.getRoleResources(id);
    // 设置响应内容和响应状态码
    if (res) {
      ctx.returnBody(200, '获取成功', res);
    } else {
      ctx.returnBody(200, '此角色暂无资源关联,请添加', res, false);
    }
  }

}

module.exports = RbacController;
