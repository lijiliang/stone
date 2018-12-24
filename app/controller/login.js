'use strict';

const Controller = require('egg').Controller;
const regrule = require('../utils/regrule');

// 定义注册的请求参数规则
// https://github.com/node-modules/parameter
const registerParamRule = {
  password: { type: 'string', format: regrule.regPassword, required: true, message: '密码不正确' },
  username: { type: 'string', required: true, message: '用户名不能为空' },
  email: { type: 'email', required: true, message: '邮箱不正确' },
  mobile: { type: 'string', required: true, format: regrule.regPhone, message: '手机号不正确' },
};

class LoginController extends Controller {
  // 注册
  async register() {
    const ctx = this.ctx;
    const { password, username, email, mobile } = ctx.request.body;

    // 校验 `ctx.request.body` 是否符合我们预期的格式
    // 如果参数校验未通过，将会抛出一个 status = 422 的异常
    ctx.validate(registerParamRule, ctx.request.body);

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
    await ctx.service.user.register({ password, username, email, mobile });
  }

  // 登录
  async loginIn() {
    const { ctx } = this;
    const { password, email, mobile } = ctx.request.body;
    const token = await ctx.service.user.login({ password, email, mobile });

    if (token) {
      ctx.returnBody(200, '登录成功', token);
    } else {
      ctx.throw(422, '用户名或密码错误');
      // ctx.returnBody(200, '用户名或密码错误', {}, false);
    }
  }
  // 获取当前用户信息
  async current() {
    const { ctx } = this;
    // ctx.state.user 可以提取到JWT编码的data
    const _userid = ctx.state.user.data.userid;
    const user = await ctx.service.user.getUserByUserId(_userid);

    if (!user) {
      ctx.throw(422, '用户不存在');
    }
    user.password = 'How old are you?';

    ctx.returnBody(200, '登录成功', user);
  }
}

module.exports = LoginController;
