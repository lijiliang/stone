'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getUserInfo() {
    return {
      name: 'benson',
      age: '18',
    };
  }
}

module.exports = UserService;
