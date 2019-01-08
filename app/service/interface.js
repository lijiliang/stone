'use strict';

const Service = require('egg').Service;

class InterfaceService extends Service {
  async index() {
    // 当前页数：current; 每页条数：pageSize;  总数：total;
    const { ctx } = this;
    // const { Op } = this.app.Sequelize;
    const { current, pageSize, name, path, method } = ctx.query;
    const _current = current ? current : 1; // 当前页数
    const _pageSize = pageSize ? pageSize : 10; // 每页条数
    const _offset = ((Number(_current)) - 1) * Number(_pageSize); // 偏移量

    // 模糊查询
    const _where = {};
    if (name) {
      _where.name = {
        $like: `%${name}%`,
      };
    }
    if (path) {
      _where.path = {
        $like: `%${path}%`,
      };
    }
    if (method) {
      _where.method = {
        $like: `%${method}%`,
      };
    }

    const query = {
      where: _where,
      // where: {
      //   method: {
      //     // 以下三种方法都可以实现 模糊搜索
      //     $like: `%${method}%`,
      //     // [Op.like]: `%${method}%`,
      //     // [Op.regexp]: method,
      //   },
      // },
      attributes: this.attributes, // 需要显示字段
      limit: ctx.helper.toInt(_pageSize), // 条数限制
      offset: ctx.helper.toInt(_offset), // 起始位置 从0开始
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]], // 排序
    };

    const _data = await ctx.model.Interface.findAndCountAll(query);

    // 返回整理后的数据
    const _list = _data.rows.map(e => {
      const jsonObject = Object.assign({}, e.dataValues);
      jsonObject.created_at = this.ctx.helper.formatTime(e.created_at);
      jsonObject.updated_at = this.ctx.helper.formatTime(e.updated_at);
      return jsonObject;
    });

    return {
      total: _data.count,
      curent: ctx.helper.toInt(_current),
      pageSize: ctx.helper.toInt(_pageSize),
      list: _list,
    };
  }

  // 获取单个
  async show(id) {
    const { ctx } = this;
    const query = {
      where: { id },
    };
    const _data = await ctx.model.Interface.findOne(query);
    return _data;
  }

  async create(payload) {
    const { ctx } = this;
    const _data = await ctx.model.Interface.create(payload);
    return _data;
  }

  // 更新
  async update(id, payload) {
    const { ctx } = this;
    const data = await ctx.model.Interface.findById(id);
    if (!data) {
      ctx.throw(422, 'id不存在');
    }

    const updateData = await data.update(payload);
    return updateData;
  }

  // 删除
  async destroy(id) {
    const { ctx } = this;
    const data = await ctx.model.Interface.findById(id);
    if (!data) {
      ctx.throw(422, 'id不存在');
    }
    await data.destroy();
    return {};
  }
}

module.exports = InterfaceService;
