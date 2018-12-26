'use strict';

const Service = require('egg').Service;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UserService extends Service {
  constructor(ctx) {
    super(ctx);
    this.attributes = [ 'userid', 'username', 'email', 'mobile', 'avatar', 'sex', 'state', 'user_type', 'last_login_ip', 'last_login_time' ]; // 用户信息需要显示字段
  }
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
  /*
  * 根据邮箱，查找用户
  * @param {String} email 邮箱地址
  * @return {Promise[user]} 承载用户的 Promise 对象
  */
  async getUserByMail(email) {
    return this.ctx.model.User.findOne({
      where: {
        email,
      },
    });
  }

  /*
   * 查询邮箱是否已经注册 私有方法
   * @param {String} email 邮箱
   */
  async _hasRegister(email) {
    // 查询用户名
    const user = await this.ctx.model.User.findOne({
      where: { email },
    });
    if (user && user.dataValues.userid) {
      return true;
    }

    return false;
  }

  // 获取所有用户
  async index() {

    // 当前页数：current; 每页条数：pageSize;  总数：total;
    const { ctx } = this;
    const { current, pageSize, userType } = ctx.query;
    const _current = current ? current : 1; // 当前页数
    const _pageSize = pageSize ? pageSize : 10; // 每页条数
    const _userType = userType; // 用户类型，1:admin ;2:会员
    const _offset = ((Number(_current)) - 1) * Number(_pageSize); // 偏移量

    const query = {
      attributes: this.attributes, // 需要显示字段
      limit: toInt(_pageSize), // 条数限制
      offset: toInt(_offset), // 起始位置 从0开始
    };

    // 如果有用户类型
    if (_userType) {
      query.where = {
        user_type: _userType,
      };
    }

    const user = await ctx.model.User.findAndCountAll(query);

    // 返回整理后的数据
    const _list = user.rows.map(e => {
      const jsonObject = Object.assign({}, e.dataValues);
      // jsonObject.last_login_ip = e.last_login_ip;
      jsonObject.last_login_time = this.ctx.helper.formatTime(e.last_login_time);
      return jsonObject;
    });

    return {
      total: user.count,
      curent: toInt(_current),
      pageSize: toInt(_pageSize),
      list: _list,
    };
  }

  // 创建用户
  async create(payload) {
    const { ctx } = this;
    // 密码转hash
    payload.password = ctx.helper.createPasswordHash(payload.password);
    // 添加uuid
    payload.userid = ctx.helper.uuid();

    let _data = {};
    // 查看邮箱是否已经注册。如没有注册，则注册
    await ctx.model.User.findOrCreate({
      where: { email: payload.email },
      defaults: payload,
    }).spread((user, created) => {
      // 如果created为true，代表已经创建成功
      if (created) {
        _data = {
          userId: user.userid,
          username: user.username,
          email: user.email,
          flag: true,
        };
      } else {
        ctx.throw(422, '邮箱已被使用');
      }
    });

    return _data;
  }

  // 获取单个用户
  async show(userid) {
    const { ctx } = this;
    const user = await this.ctx.model.User.findOne({
      attributes: this.attributes, // 需要显示字段
      where: { userid },
    });
    if (!user) {
      ctx.throw(422, '用户不存在');
    }
    return user;

  }

  // 修改用户
  async update(userid, payload) {
    const { ctx } = this;
    const existUser = await this.getUserByUserId(userid);
    if (!existUser) {
      ctx.throw(422, '用户不存在');
    }
    // 验证邮箱
    if (existUser.email !== payload.email) {
      const existUserEmail = await this._hasRegister(payload.email);
      if (existUserEmail) {
        ctx.throw(422, '邮箱已被使用');
      }
    }
    // 密码转hash
    payload.password = ctx.helper.createPasswordHash(payload.password);
    // 更新数据
    const updateUser = await existUser.update(payload);
    return {
      userId: updateUser.userid,
      username: updateUser.username,
      email: updateUser.email,
      flag: true,
    };
  }

  // 删除单个用户
  async destroy(userid) {
    const { ctx } = this;
    const user = await this.getUserByUserId(userid);
    if (!user) {
      ctx.throw(422, '用户不存在');
    }
    await user.destroy();
    return {
    };
  }

  // 删除所选用户(条件ids[])
  async removes(ids) {
    const { ctx, app } = this;
    const { Op } = app.Sequelize;

    // 删除多条
    const user = await ctx.model.User.destroy({
      where: {
        userid: {
          [Op.in]: ids,
        },
      },
    });

    return {
      count: user || 0,
    };
  }
}

module.exports = UserService;
