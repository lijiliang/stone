'use strict';

const Controller = require('egg').Controller;

class RoleUserController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.paramRule = {
      role_id: { type: 'number', required: true, message: '角色不能为空' },
      user_id: { type: 'string', required: true, message: '用户id不能为空' },
    };
  }
  async create() {
    const { ctx, service } = this;
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(this.paramRule, payload);
    // 调用 Service 进行业务处理
    const res = await service.permissions.roleUser.create(payload);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '添加成功', res);
  }
}

module.exports = RoleUserController;
