'use strict';

const Service = require('egg').Service;

class RoleUserService extends Service {
  async getRoleUser(payload) {
    const query = {
      role_id: payload.role_id,
      user_id: payload.user_id,
    };
    return this.ctx.model.RoleUser.findOne({
      where: query,
    });
  }

  // 添加，如存在即删除
  async create(payload) {
    const { ctx } = this;
    let _data = {};
    const hasRoleUser = await this.getRoleUser(payload);
    if (hasRoleUser) {
      hasRoleUser.destroy();
    } else {
      _data = await ctx.model.RoleUser.create(payload);
    }
    // const _data = await ctx.model.RoleUser.create(payload);
    return _data;
  }
}

module.exports = RoleUserService;
