'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.__errNotice = function() {
      const { ctx } = this;
      const { mobile, password, username, email } = ctx.request.body;
      // 参数检验
      let message;
      if (!mobile || !email) {
        message = '手机号或者邮箱不能为空';
      } else if (!username) {
        message = '用户名不能为空';
      } else if (!password) {
        message = '密码不能为空';
      }

      // 抛出异常
      if (message) {
        // ctx.throw(400, message);
        ctx.returnBody(200, message, {}, false);
        return;
      }
      return true;
    };
  }

  // 注册
  async register() {
    const ctx = this.ctx;
    const { password, username, email, mobile } = ctx.request.body;

    // 错误处理
    if (!this.__errNotice()) return;

    // 注册成功返回体
    await ctx.service.user.register({ password, username, email, mobile });
  }
}

module.exports = LoginController;
