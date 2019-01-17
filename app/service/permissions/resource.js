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
}

module.exports = ResourceService;
