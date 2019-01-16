'use strict';

const Controller = require('egg').Controller;

class RoleController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.paramRule = {
      name: { type: 'string', required: true, message: '名称不能为空' },
      code: { type: 'string', required: true, message: '标识不能为空' },
      description: { type: 'string', required: true, message: '描述不能为空' },
    };
  }
  // 获取列表(分页/模糊)
  async index() {
    const ctx = this.ctx;
    const res = await ctx.service.permissions.role.index();
    ctx.returnBody(200, '列表数据', res);
  }

  // 获取单个
  async show() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用Service进行业务处理
    const res = await service.permissions.role.show(id);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '获取成功', res);
  }

  async create() {
    const { ctx, service } = this;
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(this.paramRule, payload);
    // 调用 Service 进行业务处理
    const res = await service.permissions.role.create(payload);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '添加成功', res);
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
    const res = await service.permissions.role.update(id, payload);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '修改成功', res);
  }

  // 删除单个
  async destroy() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用 Service进行业务处理
    const res = await service.permissions.role.destroy(id);
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
    const res = await service.permissions.role.removes(_ids);
    // 设置响应内容和响应状态
    ctx.returnBody(200, '操作成功', res);

  }
}

module.exports = RoleController;
