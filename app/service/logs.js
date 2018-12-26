'use strict';

const Service = require('egg').Service;

class LogsService extends Service {
  constructor(ctx) {
    super(ctx);
    this.attributes = [ 'id', 'username', 'content', 'last_login_ip', 'last_login_time' ]; // 需要显示字段
  }
  // 获取所有日志记录
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
    };

    // 查询并返回总数
    const logs = await ctx.model.Logs.findAndCountAll(query);

    // 返回整理后的数据
    const _list = logs.rows.map(e => {
      const jsonObject = Object.assign({}, e.dataValues);
      jsonObject.last_login_time = this.ctx.helper.formatTime(e.last_login_time);
      return jsonObject;
    });

    return {
      total: logs.count,
      curent: ctx.helper.toInt(_current),
      pageSize: ctx.helper.toInt(_pageSize),
      list: _list,
    };
  }
}

module.exports = LogsService;
