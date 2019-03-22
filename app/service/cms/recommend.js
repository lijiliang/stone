'use strict';

const Service = require('egg').Service;

class RecommendService extends Service {
  constructor(ctx) {
    super(ctx);
    this.attributes = [ 'id', 'title', 'code', 'picPath', 'orderBy', 'creator', 'modifier', 'enable', 'isDeleted' ]; // 需要显示字段
  }

  async getCmsRecommend(payload) {
    const query = {
      id: payload.id,
      // pid: payload.pid,
    };
    return this.ctx.model.CmsRecommend.findOne({
      where: query,
    });
  }

  async index() {
    // 当前页数：current; 每页条数：pageSize;  总数：total;
    const { ctx } = this;
    // const { Op } = this.app.Sequelize;
    const { current, pageSize, title, code, method, sortBy, descending } = ctx.query;
    const _current = current ? current : 1; // 当前页数
    const _pageSize = pageSize ? pageSize : 10; // 每页条数
    const _offset = ((Number(_current)) - 1) * Number(_pageSize); // 偏移量

    // 模糊查询
    const _where = {};
    if (title) {
      _where.title = {
        $like: `%${title}%`,
      };
    }
    if (code) {
      _where.code = {
        $like: `%${code}%`,
      };
    }

    const _order = [[ 'id', 'desc' ]]; // 排序
    if (sortBy) {
      if (descending === 'true') {
        _order.push([ sortBy, 'desc' ]);
      }
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
      order: _order, // 排序
    };

    const _data = await ctx.model.CmsRecommend.findAndCountAll(query);

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
    const _data = await ctx.model.CmsRecommend.findOne(query);
    return _data;
  }

  async create(payload) {
    const { ctx, service } = this;
    let _data = {};
    const { type, name } = payload;
    const hasCmsRecommend = await this.getCmsRecommend(payload);
    if (hasCmsRecommend) {
      _data = await hasCmsRecommend.update(payload);
    } else {
      if (type === 'page') {
        // 单页,创建栏目的时候，同时创建一篇对应的文章
        _data = await ctx.model.CmsRecommend.create(payload);
        // 创建单页文章的数据
        const createArticle = {
          categoryid: _data.id,
          title: name,
          type: 'page',
        };
        const articleData = await service.cms.article.create(createArticle);
        const articleid = articleData.id; // 拿到文章id
        // 用拿到的文章id更新当前栏目表的articleid
        await _data.update({
          articleid,
        });
      } else {
        _data = await ctx.model.CmsRecommend.create(payload);
      }
    }
    // const _data = await ctx.model.CmsRecommend.create(payload);
    return _data;
  }

  // 更新
  async update(id, payload) {
    const { ctx } = this;
    const data = await ctx.model.CmsRecommend.findById(id);
    if (!data) {
      ctx.throw(422, 'id不存在');
    }

    const updateData = await data.update(payload);
    return updateData;
  }

  // 删除
  async destroy(id) {
    const { ctx } = this;

    const findByIdData = await ctx.model.CmsRecommend.findById(id);
    if (!findByIdData) {
      ctx.throw(422, 'id不存在');
    }
    // console.log(JSON.stringify(findByIdData));

    const query = {
      attributes: this.attributes,
    };
    // 取得全部列表数据
    const arrData = await ctx.model.CmsRecommend.findAll(query);

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
    const res = await ctx.model.CmsRecommend.destroy({
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

module.exports = RecommendService;
