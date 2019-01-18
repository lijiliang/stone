'use strict';

const Service = require('egg').Service;

class ResourceService extends Service {
  constructor(ctx) {
    super(ctx);
    this.attributes = [ 'id', 'pid', 'pids', 'path', 'name', 'title', 'icon', 'component', 'componentPath', 'type', 'sort', 'isLock', 'permission', 'state', 'cache' ]; // 需要显示字段
  }

  async getResource(payload) {
    const query = {
      id: payload.id,
      pid: payload.pid,
    };
    return this.ctx.model.Resource.findOne({
      where: query,
    });
  }

  async index() {
    const { ctx } = this;

    const query = {
      attributes: this.attributes,
    };
    const _data = await ctx.model.Resource.findAndCountAll(query);

    // 返回整理后的数据
    const _list = _data.rows.map(e => {
      const jsonObject = Object.assign({}, e.dataValues);
      return jsonObject;
    });

    return ctx.helper.transTreeData(_list);
  }

  // 获取单个
  async show(id) {
    const { ctx } = this;
    const query = {
      where: { id },
    };
    const _data = await ctx.model.Resource.findOne(query);
    return _data;
  }

  async create(payload) {
    const { ctx } = this;
    let _data = {};
    const hasResource = await this.getResource(payload);
    if (hasResource) {
      _data = await hasResource.update(payload);
    } else {
      _data = await ctx.model.Resource.create(payload);
    }
    // const _data = await ctx.model.Resource.create(payload);
    return _data;
  }

  // 更新
  async update(id, payload) {
    const { ctx } = this;
    const data = await ctx.model.Resource.findById(id);
    if (!data) {
      ctx.throw(422, 'id不存在');
    }

    const updateData = await data.update(payload);
    return updateData;
  }

  // 删除
  async destroy(id) {
    const { ctx } = this;

    const findByIdData = await ctx.model.Resource.findById(id);
    if (!findByIdData) {
      ctx.throw(422, 'id不存在');
    }
    // console.log(JSON.stringify(findByIdData));

    const query = {
      attributes: this.attributes,
    };
    // 取得全部列表数据
    const arrData = await ctx.model.Resource.findAll(query);

    // 子节点列表
    const resultArr = ctx.helper.findChildNode(arrData, findByIdData);
    if (resultArr.length) {
      ctx.throw(422, '请先删除子菜单');
    }

    await findByIdData.destroy();
    return {};
  }

  // 删除所选用户(条件ids[])
  async removes(ids) {
    const { ctx, app } = this;
    const { Op } = app.Sequelize;

    // 删除多条
    const res = await ctx.model.Resource.destroy({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
    });

    return {
      count: res || 0,
    };
  }

  async menu() {
    // 获取菜单的步骤
    // 1、查出用户
    // 2、查用户所有的角色(一个用户会有多个角色)
    // 3、根据角色列表查出该角色能访问的所有资源id
    // 4、利用资源表与查出用户所能访问的资源计算出访用户所能访问的菜单数据
    const { ctx } = this;
    const _userid = ctx.state.user.data.userid;

    // 2、查询用户所有的角色
    const userRole = await ctx.model.RoleUser.findAll({
      where: {
        user_id: _userid,
      },
    });
    // 用户的角色列表
    const userRoleIds = ctx.helper.findOptionsIds(userRole, 'role_id');

    // 3、根据角色列表查出该角色能访问的所有资源id
    const roleResource = await ctx.model.RoleResource.findAll({
      where: {
        role_id: {
          $or: userRoleIds,
        },
      },
    });
    // 用户能访问的资源列表
    const userResource = ctx.helper.findOptionsIds(roleResource, 'resource_id');
    const userResourceIds = [ ...new Set(userResource) ];

    const resource = await ctx.model.Resource.findAll({
      attributes: this.attributes,
      where: {
        id: {
          $or: userResourceIds,
        },
      },
    });

    // console.log(userResourceIds.reduce(function(prev, curr) {
    //   return prev.concat(curr);
    // }), [].concat.apply([], userResourceIds));
    // console.log(userResourceIds);


    // 返回整理后的数据
    const _list = resource.map(e => {
      const jsonObject = Object.assign({}, e.dataValues);
      return jsonObject;
    });
    return ctx.helper.transTreeData(_list);
  }
}

module.exports = ResourceService;
