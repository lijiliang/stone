'use strict';

const Service = require('egg').Service;
const svgCaptcha = require('svg-captcha');

class CaptchaService extends Service {
  // 获取验证码
  async getcode() {
    const { ctx } = this;

    const codeConfig = {
      size: 4, // 验证码长度
      ignoreChars: '0o1i', // 验证码字符中排除 0o1i
      noise: 2, // 干扰线条的数量
      width: 100,
      height: 40,
      fontSize: 40,
      color: true,
      background: '#fff',
    };
    const captcha = svgCaptcha.create(codeConfig);
    // ctx.session.captcha = captcha.text;

    // const options = { // 参数
    //   width: 100,
    //   height: 40, // height of captcha
    //   fontSize: 40, // captcha text size
    //   color: true,
    //   background: '#fff',
    //   noise: 5,
    // };
    // const captcha = svgCaptcha.createMathExpr(options); // 生成验证码
    const { type } = ctx.query; // 接收客户端的数据，如果type为1则是登录页申请的验证码，type为2则是注册页申请的验证码
    // 登陆验证码
    if (type === '1') {
      ctx.session.login_code = captcha.text;// 把验证码保存到session
    } else {
      // 注册验证码
      ctx.session.register_code = captcha.text;
    }

    // 设置session过期时间
    ctx.session.maxAge = 1000 * 60 * 10; // 过期时间为10分钟

    // 返回结果给客户端
    // ctx.body = {
    //   status: 0,
    //   message: 'success',
    //   data: captcha.data,
    // };

    // 直接生成图片
    // ctx.set('Content-Type', 'image/svg+xml');
    // ctx.status = 200;
    // ctx.body = captcha.data;

    return captcha.data;
  }

  // 验证图片验证码
  async verifycode(type, code) {
    const { ctx } = this;
    // const { type, code } = ctx.query;// 获取客户端发送的类型和验证码
    let { login_code, register_code } = ctx.session; // 获取session保存的验证码
    // 为降低验证难度，将所有转为大写再对比
    const _code = code.toUpperCase();

    login_code = login_code && login_code.toUpperCase();
    register_code = register_code && register_code.toUpperCase();
    console.log(ctx.session, register_code, login_code);

    let hasSuccess = false;
    // 登陆验证码验证
    if (type === '1') { // 进行验证并返回结果
      hasSuccess = _code === login_code;
    } else {
      hasSuccess = _code === register_code;
    }
    return hasSuccess;
  }
}

module.exports = CaptchaService;
