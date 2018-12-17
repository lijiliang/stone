'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // this.ctx.body = 'asdf';
    const { ctx } = this;

    // 插入一条数据
    // const addData = {
    //   userId: 'asdfasdgyqwtjfdk;gjaslgjsdf',
    //   username: 'benson',
    //   email: 'bli@11.com',
    //   password: '123456',
    //   avatarUrl: 'http://piyhxgz90.bkt.clouddn.com/1543654269146风景.jpg',
    //   mobile: '13512345678',
    //   sex: '男',
    //   updated_at: this.app.mysql.literals.now, // 数据库当前系统时间
    //   abstract: '码农',
    // };
    // const res = await ctx.service.user.add(addData);
    // if (res.affectedRows === 1) {
    //   console.log('添加一条数据成功');
    // }
    // console.log(res);


    // 查询一条数据
    // const userId = 'e51c2d2e4366433fb35f017c69468149';
    // const _res = await ctx.service.user.find(userId);

    // 删除一条数据
    // const userid = 'asdfasdgyqwtjfdk;gjaslgjsdf123';
    // const res = await ctx.service.user.delete(userid);
    // if (res.affectedRows === 1) {
    //   console.log('删除一条数据成功');
    // }

    // update
    // const updateData = {
    //   id: 9,
    //   username: 'liang',
    //   email: 'liang@w74.com',
    //   updated_at: this.app.mysql.literals.now,
    //   abstract: '前端开发',
    // };
    // const res = await ctx.service.user.update(updateData);
    // if (res.affectedRows === 1) {
    //   console.log('更新一条数据成功');
    // }

    const userid = 'asdfasdgyqwtjfdk;gjaslgjsdf';
    const updateData = {
      username: 'li.banern',
      email: 'liang-asdf@w163.com',
      updated_at: this.app.mysql.literals.now,
      abstract: 'egg.js,node.js,后端开发,前端开发',
    };
    const res = await ctx.service.user.update(updateData, userid);
    if (res.affectedRows === 1) {
      console.log('更新一条数据成功');
    }

    // 查询表所有数据
    const _res = await ctx.service.user.findAll();
    ctx.body = _res;
  }
}

module.exports = HomeController;
