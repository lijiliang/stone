'use strict';

const Service = require('egg').Service;

/**
 *
 *
 * @class AdminService
 * @extends {Service}
 */
class AdminService extends Service {
  async index() {
    console.log('df');
  }
}

module.exports = AdminService;
