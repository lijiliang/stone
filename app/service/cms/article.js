'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
  /*
   * 根据userId查找用户
   * @param {String} userId 用户Id
   * @return {Promise[user]} 承载用户的 Promise 对象
   */
  async getUserByUserId(userid) {
    const query = { userid };
    return this.ctx.model.User.findOne({
      where: query,
    });
  }
  async index() {
    // 当前页数：current; 每页条数：pageSize;  总数：total;
    const { ctx } = this;
    const { current, pageSize, title, sortBy, descending, categoryid } = ctx.query;
    const _current = current ? current : 1; // 当前页数
    const _pageSize = pageSize ? pageSize : 10; // 每页条数
    const _offset = ((Number(_current)) - 1) * Number(_pageSize); // 偏移量

    // 模糊查询
    const _where = {};
    if (categoryid) {
      _where.categoryid = categoryid;
    }
    if (title) {
      _where.title = {
        $like: `%${title}%`,
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

    const _data = await ctx.model.CmsArticle.findAndCountAll(query);

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
    const _data = await ctx.model.CmsArticle.findOne(query);
    return _data;
  }
  // 创建文章
  async create(payload) {
    const { ctx } = this;
    const _userid = ctx.state.user.data.userid;
    const existUser = await this.getUserByUserId(_userid); // 取得编辑者的信息
    const _payload = Object.assign({}, payload, { creator: existUser.username });
    const _data = await ctx.model.CmsArticle.create(_payload);
    return _data;
  }
  // 更新
  async update(id, payload) {
    const { ctx } = this;
    const _userid = ctx.state.user.data.userid;
    const existUser = await this.getUserByUserId(_userid); // 取得编辑者的信息
    const data = await ctx.model.CmsArticle.findById(id);
    if (!data) {
      ctx.throw(422, 'id不存在');
    }
    const _payload = Object.assign({}, payload, { modifier: existUser.username });
    const updateData = await data.update(_payload);
    return updateData;
  }
  // 删除
  async destroy(id) {
    const { ctx } = this;
    const data = await ctx.model.CmsArticle.findById(id);
    if (!data) {
      ctx.throw(422, 'id不存在');
    }
    await data.destroy();
    return {};
  }
  // 删除多个(条件ids[])
  async removes(ids) {
    const { ctx, app } = this;
    const { Op } = app.Sequelize;

    // 删除多条
    const res = await ctx.model.CmsArticle.destroy({
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

module.exports = ArticleService;
