/*
 * @Author: Benson
 * @Date: 2018-12-27 11:07:46
 * @LastEditors: Benson
 * @LastEditTime: 2019-01-29 10:06:52
 * @Description: 验证码
 */
'use strict';

const Controller = require('egg').Controller;

/**
 * @controller captcha 验证码接口
 */
class CaptchaController extends Controller {
  /**
   * @summary 生成图片验证码
   * @description 生成注册及登录时的图片验证码
   * @router get /api/v1/captcha
   * @Request query number type eg:2 type=2是注册,type=1是登录
   */
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
