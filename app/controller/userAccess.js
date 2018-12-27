'use strict';

const Controller = require('egg').Controller;
const regrule = require('../utils/regrule');

class UserAccessController extends Controller {
  constructor(ctx) {
    super(ctx);

    // 定义注册的请求参数规则
    // https://github.com/node-modules/parameter
    this.registerParamRule = {
      password: { type: 'string', format: regrule.regPassword, required: true, message: '密码不正确' },
      username: { type: 'string', required: true, message: '用户名不能为空' },
      email: { type: 'email', required: true, message: '邮箱不正确' },
      mobile: { type: 'string', required: true, format: regrule.regPhone, message: '手机号不正确' },
    };

    this.resetPswRule = {
      email: { type: 'email', required: true, message: '邮箱不正确' },
      oldpassword: { type: 'string', required: true, format: regrule.regPassword, message: '密码不正确' },
      newpassword: { type: 'string', required: true, format: regrule.regPassword, message: '密码不正确' },
    };
  }
  // 注册
  async register() {
    const ctx = this.ctx;
    const { password, username, email, mobile, code } = ctx.request.body;

    // 校验 `ctx.request.body` 是否符合我们预期的格式
    // 如果参数校验未通过，将会抛出一个 status = 422 的异常
    ctx.validate(this.registerParamRule, ctx.request.body);

    // 验证 验证码
    const verifycode = await ctx.service.captcha.verifycode(2, code);
    if (!verifycode) {
      ctx.throw(422, '验证码不正确');
    }

    // 以下两种方法都可以获取到参数检验未通过的错误信息，并重组显示到body中
    // const paramErrors = this.app.validator.validate(registerParamRule, ctx.request.body);
    // if (paramErrors && paramErrors.length) {
    //   ctx.logger.warn(paramErrors);
    //   ctx.returnBody(200, '参数校验失败', paramErrors, false);
    //   return;
    // }

    // try {
    //   ctx.validate(registerParamRule, ctx.request.body);
    // } catch (err) {
    //   ctx.logger.warn(err.errors);

    //   ctx.body = {
    //     success: false,
    //     message: '参数校验失败',
    //     data: err };
    //   return;
    // }

    // 注册成功返回体
    const res = await ctx.service.userAccess.register({ password, username, email, mobile });
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '注册成功', res);
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
    const { ctx } = this;
    // 调用 Service 进行业务处理
    await ctx.service.userAccess.logout();
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
    const { ctx, service } = this;
    // 组装参数
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(this.resetPswRule, ctx.request.body);
    // 调用 Service 进行业务处理
    const res = await service.userAccess.resetPsw(payload);
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
