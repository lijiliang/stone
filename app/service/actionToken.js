'use strict';

const Service = require('egg').Service;

class ActionTokenService extends Service {
  async apply(userid) {
    const { ctx } = this;
    return ctx.app.jwt.sign({
      data: {
        userid,
      },
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 1), // token过期时间为7天 Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7)
    }, ctx.app.config.jwt.secret);
  }
}

module.exports = ActionTokenService;
