'use strict';

const Service = require('egg').Service;

class CategoryService extends Service {
  constructor(ctx) {
    super(ctx);
    this.attributes = [ 'id', 'pid', 'name', 'en_name', 'code', 'route', 'type', 'url', 'image', 'description', 'meta_title', 'meta_keywords', 'meta_description', 'sort', 'enable' ]; // 需要显示字段
  }

  async getCmsCategory(payload) {
    const query = {
      id: payload.id,
      pid: payload.pid,
    };
    return this.ctx.model.CmsCategory.findOne({
      where: query,
    });
  }

  async index() {
    const { ctx } = this;

    const query = {
      attributes: this.attributes,
    };
    const _data = await ctx.model.CmsCategory.findAndCountAll({
      query,
      order: [[ 'sort' ]], // 排序
    });

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
    const _data = await ctx.model.CmsCategory.findOne(query);
    return _data;
  }

  async create(payload) {
    const { ctx } = this;
    let _data = {};
    const hasCmsCategory = await this.getCmsCategory(payload);
    if (hasCmsCategory) {
      _data = await hasCmsCategory.update(payload);
    } else {
      _data = await ctx.model.CmsCategory.create(payload);
    }
    // const _data = await ctx.model.CmsCategory.create(payload);
    return _data;
  }

  // 更新
  async update(id, payload) {
    const { ctx } = this;
    const data = await ctx.model.CmsCategory.findById(id);
    if (!data) {
      ctx.throw(422, 'id不存在');
    }

    const updateData = await data.update(payload);
    return updateData;
  }

  // 删除
  async destroy(id) {
    const { ctx } = this;

    const findByIdData = await ctx.model.CmsCategory.findById(id);
    if (!findByIdData) {
      ctx.throw(422, 'id不存在');
    }
    // console.log(JSON.stringify(findByIdData));

    const query = {
      attributes: this.attributes,
    };
    // 取得全部列表数据
    const arrData = await ctx.model.CmsCategory.findAll(query);

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
    const res = await ctx.model.CmsCategory.destroy({
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

module.exports = CategoryService;
