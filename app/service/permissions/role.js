'use strict';

const Service = require('egg').Service;

class RoleService extends Service {
  async index() {
    // 当前页数：current; 每页条数：pageSize;  总数：total;
    const { ctx } = this;
    const { current, pageSize, name, code, sortBy, descending } = ctx.query;
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
    if (code) {
      _where.code = {
        $like: `%${code}%`,
      };
    }

    const _order = []; // 排序
    if (sortBy) {
      if (descending === 'true') {
        _order.push([ sortBy, 'desc' ]);
      }
    }

    const query = {
      where: _where,
      attributes: this.attributes, // 需要显示字段
      limit: ctx.helper.toInt(_pageSize), // 条数限制
      offset: ctx.helper.toInt(_offset), // 起始位置 从0开始
      order: _order, // 排序
    };

    const _data = await ctx.model.Role.findAndCountAll(query);

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
    const _data = await ctx.model.Role.findOne(query);
    return _data;
  }

  async create(payload) {
    const { ctx } = this;
    const _data = await ctx.model.Role.create(payload);
    return _data;
  }

  // 更新
  async update(id, payload) {
    const { ctx } = this;
    const data = await ctx.model.Role.findById(id);
    if (!data) {
      ctx.throw(422, 'id不存在');
    }

    const updateData = await data.update(payload);
    return updateData;
  }

  // 删除
  async destroy(id) {
    const { ctx } = this;
    const data = await ctx.model.Role.findById(id);
    if (!data) {
      ctx.throw(422, 'id不存在');
    }
    await data.destroy();
    return {};
  }

  // 删除所选用户(条件ids[])
  async removes(ids) {
    const { ctx, app } = this;
    const { Op } = app.Sequelize;

    // 删除多条
    const res = await ctx.model.Role.destroy({
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

module.exports = RoleService;
