'use strict';

const Service = require('egg').Service;

class SensitiveService extends Service {
  constructor(ctx) {
    super(ctx);
    this.attributes = [ 'id', 'typeid', 'content', 'created_at' ]; // 需要显示字段
  }
  // 添加敏感词
  async type(payload) {
    const { ctx } = this;
    const sensitiveType = await ctx.model.SensitiveType.create(payload);
    return {
      typeid: sensitiveType.typeid,
      typename: sensitiveType.typename,
    };
  }

  // 查询敏感词列表
  async typeList() {
    const { ctx } = this;
    const query = {
      attributes: [ 'typeid', 'typename' ], // 需要显示字段
    };
    const _list = await ctx.model.SensitiveType.findAll(query);
    return _list;
  }

  // 查询所有敏感词
  async index() {
    const { ctx } = this;
    const { current, pageSize } = ctx.query;
    const _current = current ? current : 1; // 当前页数
    const _pageSize = pageSize ? pageSize : 10; // 每页条数
    const _offset = ((Number(_current)) - 1) * Number(_pageSize); // 偏移量

    const query = {
      attributes: this.attributes, // 需要显示字段
      limit: ctx.helper.toInt(_pageSize), // 条数限制
      offset: ctx.helper.toInt(_offset), // 起始位置 从0开始
      include: {
        model: this.ctx.model.SensitiveType,
        as: 'type',
        attributes: [ 'typename' ],
      },
    };

    // 查询并返回总数
    const sensitive = await ctx.model.Sensitive.findAndCountAll(query);

    // 返回整理后的数据
    const _list = sensitive.rows.map(e => {
      const jsonObject = Object.assign({}, e.dataValues);
      jsonObject.created_at = this.ctx.helper.formatTime(e.created_at);
      return jsonObject;
    });

    return {
      total: sensitive.count,
      curent: ctx.helper.toInt(_current),
      pageSize: ctx.helper.toInt(_pageSize),
      list: _list,
    };
  }

  // 创建敏感词
  async create(payload) {
    const { ctx } = this;
    const sensitive = await ctx.model.Sensitive.create(payload);
    return {
      typeid: sensitive.typeid,
      content: sensitive.content,
    };
  }

  // 获取单个
  async show(id) {
    const { ctx } = this;
    // await ctx.model.Sensitive.findById(id);
    const query = {
      where: { id },
      attributes: this.attributes,
      include: {
        model: this.ctx.model.SensitiveType,
        as: 'type',
        attributes: [ 'typename' ],
      },
    };
    const res = await ctx.model.Sensitive.findOne(query);
    return res;
  }

  // 更新
  async update(id, payload) {
    const { ctx } = this;
    const sensitive = await ctx.model.Sensitive.findById(id);
    if (!sensitive) {
      ctx.throw(422, '敏感词不存在');
    }

    const updateSensitive = await sensitive.update(payload);
    return {
      content: updateSensitive.content,
    };
  }

  // 删除
  async destroy(id) {
    const { ctx } = this;
    const sensitive = await ctx.model.Sensitive.findById(id);
    if (!sensitive) {
      ctx.throw(422, '敏感词不存在');
    }
    await sensitive.destroy();
    return {};
  }

  // 删除所选用户(条件ids[])
  async removes(ids) {
    const { ctx, app } = this;
    const { Op } = app.Sequelize;

    // 删除多条
    const user = await ctx.model.Sensitive.destroy({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
    });

    return {
      count: user || 0,
    };
  }
}

module.exports = SensitiveService;
