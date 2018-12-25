'use strict';

const Controller = require('egg').Controller;
const regrule = require('../utils/regrule');

class UserController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.userParamRule = {
      password: { type: 'string', required: true, format: regrule.regPassword, message: '密码不正确' },
      username: { type: 'string', required: true, message: '用户名不能为空' },
      email: { type: 'email', required: true, message: '邮箱不正确' },
      mobile: { type: 'string', required: false, allowEmpty: true, format: regrule.regPhone, message: '手机号不正确' },
      sex: { type: 'enum', required: false, allowEmpty: true, values: [ '0', '1', '2' ], message: '性别不正确' },
      user_type: { type: 'enum', required: false, allowEmpty: true, values: [ '1', '2' ], message: '用户类型不正确' },
    };
  }
  // 获取用户信息
  async userInfo() {
    const ctx = this.ctx;
    const userId = ctx.query.userId || ctx.user.userId;

    // 获取并填充数据
    const user = await this.service.user.getUserByUser(userId);
    const userInfo = {
      username: user.username,
    };
    ctx.returnBody(200, '获取成功', userInfo);
  }

  // 获取所有用户(分页/模糊)
  async index() {
    const ctx = this.ctx;
    const res = await ctx.service.user.index();
    ctx.returnBody(200, '用户列表数据', res);
  }

  // 创建用户
  async create() {
    const { ctx, service } = this;
    // 组装参数
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(this.userParamRule, payload);
    // 调用 Service 进行业务处理
    const res = await service.user.create(payload);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '创建用户', res);
  }

  // 获取单个用户
  async show() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用Service进行业务处理
    const res = await service.user.show(id);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, `获取用户${id}的信息`, res);
  }

  // 修改用户
  async update() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(this.userParamRule, payload);
    // 调用 Service 进行业务处理
    const res = await service.user.update(id, payload);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '修改用户', res);
  }

  // 删除单个用户
  async destroy() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用 Service进行业务处理
    const res = await service.user.destroy(id);
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
    const res = await service.user.removes(_ids);
    // 设置响应内容和响应状态
    const { count } = res;

    if (count === 0) {
      ctx.returnBody(200, '没有可删除的用户');
      return;
    }
    ctx.returnBody(200, '操作成功', {
      count,
    });

  }
}

module.exports = UserController;
