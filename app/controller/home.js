'use strict';

const Controller = require('egg').Controller;

// egg是一个 mvc框架
/**
 * view 视图 模板 页面的展示
 * controller 控制器  负责处理一些业务逻辑的处理
 * model 模型（service）： 和数据打交道(查询数据库，请求数据)
 */
/**
 *
 *
 * @class HomeController
 * @extends {Controller}
 */
class HomeController extends Controller {
  async index() {
    // 调用extend里面扩展的appliction
    console.log(this.app.foo('传入的参数'));

    // 调用extend里面扩展的ctx
    console.log(this.ctx.getHost());

    // 调用extend里面扩展的helper 方法
    console.log(this.ctx.helper.getHelperData());

    // 调用extend扩展request的方法
    console.log(this.ctx.request.foo());

    this.ctx.response.foo = 'bar';

    // 设置一个cookie
    // 注意，默认情况下 egg.js里面的cookie没法设置中文  argument value is invalid (code: ERR_ASSERTION)
    // this.ctx.cookies.set('username', 'benson', {
    //   maxAge: 1000 * 3600 * 24, // cookie设置一天
    //   httpOnly: true, // 只能在nodejs里访问
    //   signed: true, // 对cookie进行签名, 防止用户修改
    //   encrypt: true, // 是否对cookie加密, 如果cookie加密，那么获取的时候要对cookie进行解密
    // });

    // 如果cookie加密以后，就可以设置中文cookie encrypt: true
    this.ctx.cookies.set('username', '张三', {
      maxAge: 1000 * 3600 * 24, // cookie设置一天
      httpOnly: true, // 只能在nodejs里访问
      signed: true, // 对cookie进行签名, 防止用户修改
      encrypt: true, // 是否对cookie加密, 如果cookie加密，那么获取的时候要对cookie进行解密
    });

    this.ctx.cookies.set('name', '张三sdf', {
      maxAge: 1000 * 3600 * 24, // cookie设置一天
      httpOnly: true, // 只能在nodejs里访问
      signed: true, // 对cookie进行签名, 防止用户修改
      encrypt: true, // 是否对cookie加密, 如果cookie加密，那么获取的时候要对cookie进行解密
    });

    // cookie里面设置对象   JSON.stringify()  JSON.parse()


    // 设置session
    this.ctx.session.username = '继梁';

    this.ctx.session.userinfo = {
      name: '李',
      age: 18,
    };
     
    this.ctx.body = 'hi, egg.js sdfasd';
  }
  async loginOut() {
    // 清除cookies
    this.ctx.cookies.set('username', null);

    // 路由跳转
    this.ctx.redirect('/newshome');
  }
  async test() {
    this.ctx.body = 'hi, benosn';
  }
  async homepost() { 
    // await this.ctx.render('homepost');

    // this.ctx.csrf 是用户访问这个页岩的时候生成的一个密钥
    // await this.ctx.render('homepost', {
    //   csrf: this.ctx.csrf,
    // })
    await this.ctx.render('homepost');
  }
  // 接收post提交的数据
  async add() {
    console.log(this.ctx.request.body);
    this.ctx.body = this.ctx.request.body;
  }
}

module.exports = HomeController;
