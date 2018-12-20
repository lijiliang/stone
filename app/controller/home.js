'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // const userinfo = {
    //   name: 'benson',
    //   age: '18',
    //   // email: '1812413@qq.com',
    //   // password: '124ljsadfjsadfsajdf',
    // };
    // const user = await this.ctx.model.User.create(userinfo);
    // console.log(this.app.model.User, user);

    // 获取所有数据
    // await this.ctx.model.User.findAll();
    // await this.ctx.model.User.findOne();
    // const userOne = await this.ctx.model.User.findOne();
    // console.log(userOne.get('name'));

    this.ctx.body = await this.ctx.model.User.findAll();
  }
}

module.exports = HomeController;
