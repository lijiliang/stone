'use strict';

const Controller = require('egg').Controller;
const bcrypt = require('bcryptjs');

class HomeController extends Controller {
  async index() {

    // 生成hash密码
    // var salt = bcrypt.genSaltSync(10);
    // var hash = bcrypt.hashSync("QWE112233!@#", salt);

    // var aa = '$2a$10$xR1.kFOZGc7pIDSFd5J93u0B3XjRe8v/phNkCdBWoGS9R6fE3Jgxe'
    // var bb = bcrypt.compareSync("QWE112233!@#", aa)
    // console.log(hash, bb)

    const hash = this.ctx.helper.createPasswordHash('sadfsadfasf')
    console.log(hash)

    console.log(this.ctx.helper.hasPasswordHash('sadfsadfasf', '$2a$10$eOYg2f0VB7s8e6JQjltzkOCq9tfdA6Pyy8DS0OrExVoxiYRy0gKE2'))

    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
