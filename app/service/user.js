'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  constructor(ctx) {
    super(ctx);
    this.attributes = [ 'id', 'userid', 'username', 'email', 'mobile', 'avatar', 'sex', 'state', 'user_type', 'last_login_ip', 'last_login_time' ]; // 用户信息需要显示字段
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

  /*
   * 查询是否是管理员
   */
  async _hasAdmin() {
    const { ctx } = this;
    const _userid = ctx.state.user.data.userid;
    const user = await this.getUserByUserId(_userid);
    // if (user.user_type !== '1') {
    //   ctx.throw(422, '您不是管理员，没权限删除该用户！');
    // }
    if (user && user.user_type === '1') {
      return true;
    }
    return false;
  }

  // 获取所有用户
  async index() {
    // 当前页数：current; 每页条数：pageSize;  总数：total;
    const { ctx } = this;
    const { current, pageSize, userType, sortBy, descending, filter } = ctx.query;
    const _current = current ? current : 1; // 当前页数
    const _pageSize = pageSize ? pageSize : 10; // 每页条数
    const _userType = userType; // 用户类型，1:admin ;2:会员
    const _offset = ((Number(_current)) - 1) * Number(_pageSize); // 偏移量

    const { username, email, roleId } = filter ? JSON.parse(filter) : {};

    // 模糊查询
    const _where = {};
    // 如果有用户类型
    if (_userType) {
      _where.user_type = _userType;
    }

    // 如果有表单搜索
    if (username) {
      _where.username = {
        $like: `%${username}%`,
      };
    }
    if (email) {
      _where.email = {
        $like: `%${email}%`,
      };
    }

    const _order = [[ 'id', 'desc' ]]; // 排序 [[ 'id', 'desc' ]]
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
      order: _order,
      // order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]], // 排序
      // distinct: true, // 去重
    };

    // 如果有角色id
    if (roleId) {
      query.distinct = true;
      query.include = {
        model: this.ctx.model.RoleUser,
        as: 'role',
        // required: true, // 只显示匹配到的项
        attributes: [ 'role_id', 'user_id' ],
      };
    }

    const user = await ctx.model.User.findAndCountAll(query);

    // 返回整理后的数据
    const _list = user.rows.map(e => {
      const jsonObject = Object.assign({}, e.dataValues);
      // jsonObject.last_login_ip = e.last_login_ip;
      jsonObject.last_login_time = this.ctx.helper.formatTime(e.last_login_time);

      // isAdd true代表已添加角色，false代表没添加角色
      if (jsonObject.role) {
        // 查询当前角色id是否已经存在
        const index = jsonObject.role.findIndex(item => {
          return item.role_id === parseInt(roleId);
        });
        if (index > -1) {
          jsonObject.isAdd = true;
        } else {
          jsonObject.isAdd = false;
        }

        jsonObject.role = jsonObject.role.length; // 重置角色列表为个数
      }

      return jsonObject;
    });

    return {
      total: user.count,
      curent: ctx.helper.toInt(_current),
      pageSize: ctx.helper.toInt(_pageSize),
      list: _list,
    };
  }

  // 创建用户
  async create(payload) {
    const { ctx } = this;
    const hasAdmin = await this._hasAdmin();
    if (!hasAdmin) {
      ctx.throw(422, '您不是管理员，没操作权限！');
    }
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
    const _userid = ctx.state.user.data.userid;
    const existUser = await this.getUserByUserId(userid);
    if (!existUser) {
      ctx.throw(422, '用户不存在');
    }

    const hasAdmin = await this._hasAdmin();
    // 不是管理员，但可以编辑自己的个人信息
    if (_userid !== userid) {
      if (!hasAdmin) {
        ctx.throw(422, '您不是管理员，没操作权限！');
      }
    }

    // 如果是个人用户，不允许将自己改成管理员
    if (payload.user_type === '1') {
      if (!hasAdmin) {
        ctx.throw(422, '您是普遍用户，不能直接变更为管理员。请联系管理员！');
      }
    }

    // 验证邮箱
    if (existUser.email !== payload.email) {
      const existUserEmail = await this._hasRegister(payload.email);
      if (existUserEmail) {
        ctx.throw(422, '邮箱已被使用');
      }
    }
    // 密码转hash
    if (payload.password) {
      payload.password = ctx.helper.createPasswordHash(payload.password);
    }
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
    const _userid = ctx.state.user.data.userid;

    const hasAdmin = await this._hasAdmin();
    if (!hasAdmin) {
      ctx.throw(422, '您不是管理员，没操作权限！');
    }

    const user = await this.getUserByUserId(userid);
    if (!user) {
      ctx.throw(422, '用户不存在');
    }

    if (_userid === user.userid) {
      ctx.throw(422, '不能删除自己');
    }

    await user.destroy();
    return {
    };
  }

  // 删除所选用户(条件ids[])
  async removes(ids) {
    const { ctx, app } = this;
    const { Op } = app.Sequelize;

    const hasAdmin = await this._hasAdmin();
    if (!hasAdmin) {
      ctx.throw(422, '您不是管理员，没操作权限！');
    }

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
