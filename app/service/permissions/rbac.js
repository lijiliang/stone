'use strict';

const Service = require('egg').Service;

class RbacService extends Service {
  async getRoleUser(payload) {
    const query = {
      role_id: payload.role_id,
      user_id: payload.user_id,
    };
    return this.ctx.model.RoleUser.findOne({
      where: query,
    });
  }

  // 保存角色与用户关联。添加，如存在即删除
  async svaeRoleUser(payload) {
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

  // 获取角色与资源关联列表
  async getRoleResources(id) {
    const query = {
      role_id: id,
    };
    const _data = await this.ctx.model.RoleResource.findOne({
      where: query,
    });
    // if (!_data) {
    //   ctx.throw(422, '此角色暂无资源关联,请添加');
    // }
    return _data;
  }

  // 保存角色与资源关联
  async saveRoleResource(payload) {
    const { ctx } = this;
    const findIdData = await this.getRoleResources(payload.role_id);
    let _data = {};
    if (findIdData) {
      _data = await findIdData.update(payload);
    } else {
      _data = await ctx.model.RoleResource.create(payload);
    }
    // const _data = await ctx.model.RoleResource.create(payload);
    return _data;
  }
}

module.exports = RbacService;
