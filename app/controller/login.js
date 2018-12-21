'use strict';

const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则
const createRule = {
  password: 'string',
  username: { type: 'string', required: true, message: '用户名不能为空' },
  email: { type: 'email', required: true, message: '邮箱不正确' },
  mobile: { type: 'string', format: /\d+/, message: '手机号不正确' },
};

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

    // 校验 `ctx.request.body` 是否符合我们预期的格式
    // 如果参数校验未通过，将会抛出一个 status = 422 的异常
    ctx.validate(createRule, ctx.request.body);
    // 错误处理
    if (!this.__errNotice()) return;

    // 注册成功返回体
    await ctx.service.user.register({ password, username, email, mobile });
  }
}

module.exports = LoginController;
