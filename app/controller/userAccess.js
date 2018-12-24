'use strict';

const Controller = require('egg').Controller;
const regrule = require('../utils/regrule');

class UserAccessController extends Controller {
  constructor(ctx) {
    super(ctx)

    this.resetPswRule = {
      email: { type: 'email', required: true, message: '邮箱不正确' },
      oldpassword: { type: 'string', required: true, format: regrule.regPassword, message: '密码不正确' },
      newpassword: { type: 'string', required: true, format: regrule.regPassword, message: '密码不正确' },
    }
  }

  // 用户登录
  async login() {
    const { ctx } = this;
    const { password, email, mobile } = ctx.request.body;
    const token = await ctx.service.userAccess.login({ password, email, mobile });

    if (token) {
      ctx.returnBody(200, '登录成功', token);
    } else {
      ctx.throw(422, '用户名或密码错误');
      // ctx.returnBody(200, '用户名或密码错误', {}, false);
    }
  }

  // 用户登出
  async logout() {
    const { ctx } = this
    // 调用 Service 进行业务处理
    await ctx.service.userAccess.logout()
    // ctx.cookies.set(this.config.auth_cookie_name, ""); // cookie 有效期30天
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '登出成功', {});
  }

  // 获取用户信息
  async current() {
    const { ctx } = this;
    const user = await ctx.service.userAccess.current();
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '登录成功', user);
  }

  // 修改密码
  async resetPsw() {
    const { ctx, service } = this
    // 组装参数
    const payload = ctx.request.body || {}
    // 校验参数
    ctx.validate(this.resetPswRule, ctx.request.body);
    // 调用 Service 进行业务处理
    const res = await service.userAccess.resetPsw(payload)
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '修改密码成功', res);
  }

  // 修改基础信息
  async resetSelf() {

  }

  // 修改头像
  async resetAvatar() {
    
  }
}

module.exports = UserAccessController;
