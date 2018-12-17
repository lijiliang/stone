'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async home() {

    // 获取数据显示到新闻页面
    const _list = await this.service.news.getNewList();
    // console.log(_list);

    // const username = this.ctx.cookies.get('username');

    // 获取加密的cookie
    const username = this.ctx.cookies.get('username', {
      encrypt: true,
    });

    // 获取session
    const seeionsUsername = this.ctx.session.username;
    const userinfo = this.ctx.session.userinfo;

    await this.ctx.render('newshome', {
      list: _list,
      username,
      seeionsUsername,
      userinfo,
    });
  }
  async content() {
    // koa 获取get传值  ctx.query
    const query = this.ctx.query;
    const { aid } = query;
    // console.log(query);
    const _content = await this.service.news.getNewsContent(aid);
    // console.log(_content[0])
    await this.ctx.render('newscontent', {
      content: _content[0],
    });
    // this.ctx.body = '新闻详情';
  }

  async newslist() {
    // koa获取动态路由  ctx.params

    this.ctx.body = `${this.ctx.params.id}新闻列表`;
  }
  async index() {
    // this.ctx.body = '新闻页面';
    const msg = 'ejs';
    // const list = [ '11', '222', '333' ];

    // 调用服务里面的方法， 注意异步
    const list = await this.service.news.getNewsList();
    
    const user = await this.service.user.getUserInfo();
    // 获取config的数据
    console.log(this.config.api);

    await this.ctx.render('news', {
      msg,
      list,
      user,
    });
  }
}

module.exports = NewsController;
