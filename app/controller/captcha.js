/*
 * @Author: Benson
 * @Date: 2018-12-27 11:07:46
 * @LastEditors: Benson
 * @LastEditTime: 2018-12-27 12:07:55
 * @Description: 验证码
 */
'use strict';

const Controller = require('egg').Controller;

class CaptchaController extends Controller {
  // 生成图片验证码
  async getcode() {
    const { ctx } = this;
    const res = await ctx.service.captcha.getcode();
    // 直接生成图片
    ctx.set('Content-Type', 'image/svg+xml');
    ctx.status = 200;
    ctx.body = res;
  }
}

module.exports = CaptchaController;
