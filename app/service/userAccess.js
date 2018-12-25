'use strict';

const Service = require('egg').Service;

class UserAccessService extends Service {
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
   * 根据userId查找用户
   * @param {String} userId 用户Id
   * @return {Promise[user]} 承载用户的 Promise 对象
   */
  async getUserByUserId(userId) {
    return this.ctx.model.User.findOne({
      where: {
        userId,
      },
    });
  }

  // 注册
  async register(payload) {
    const { ctx } = this;
    // 密码转hash
    payload.password = ctx.helper.createPasswordHash(payload.password);
    // 添加uuid
    payload.userid = ctx.helper.uuid(); // uuidv4().replace(/-/g, '');
    // 查看邮箱是否已经注册
    const queryResult = await this._hasRegister(payload.email);

    if (queryResult) {
      ctx.throw(422, '邮箱已被使用');
      // ctx.returnBody(200, '邮箱已被使用', {
      //   message: '邮箱已被使用',
      //   flag: false,
      // });
      // return;
    }
    const userInfo = await ctx.model.User.create(payload);
    const _data = {
      userId: userInfo.dataValues.userid,
      username: userInfo.dataValues.username,
      email: userInfo.dataValues.email,
      flag: true,
    };
    // 注册成功，返回成功后的数据
    return _data;
  }

  // 用户登录
  async login(payload) {
    const { ctx } = this;
    const existUser = await this.getUserByMail(payload.email);

    // 用户不存在
    if (!existUser) {
      return;
    }

    const { password } = payload;
    const equal = ctx.helper.hasPasswordHash(password, existUser.password);
    // 密码不匹配
    if (!equal) {
      return false;
    }

    const _ip = ctx.ip ? ctx.ip : '127.0.0.1';
    const _time = ctx.helper.formatTime(new Date());

    // 登录时更新数据表信息
    existUser.update(
      {
        last_login_ip: _ip, // 最后登录 ip
        last_login_time: _time, // 最后登录时间
      }
    );

    // 插入一条登录记录到日志数据库
    await ctx.model.Logs.create({
      username: existUser.username,
      content: '登录成功',
      last_login_ip: _ip, // 最后登录 ip
      last_login_time: _time, // 最后登录时间
    });

    // 验证通过
    // 生成Token令牌
    return { token: await ctx.service.actionToken.apply(existUser.userid) };
  }

  // 用户登出
  async logout() {
    // 登出现在不做处理，在前端清除token
  }

  // 获取用户信息
  async current() {
    const { ctx } = this;
    // ctx.state.user 可以提取到JWT编码的data
    const _userid = ctx.state.user.data.userid;

    // const authorization = ctx.get('Authorization');
    // if (authorization === '') { // 判断请求头有没有携带 token ,没有直接返回 401
    //   ctx.throw(401, 'no token detected in http header "Authorization"');
    // }
    // const token = authorization.split(' ')[1];

    const user = await this.getUserByUserId(_userid);

    if (!user) {
      ctx.throw(422, '用户不存在');
    }
    // 返回过滤后的信息
    const { userid, username, email, avatar, mobile, sex, state, last_login_ip, last_login_time } = user;
    const userInfo = {
      userid,
      username,
      email,
      avatar,
      mobile,
      sex,
      state,
      last_login_ip,
      last_login_time,
    };
    return userInfo;
  }

  // 修改密码
  async resetPsw(payload) {
    const { ctx } = this;
    // const existUser = await this.getUserByMail(payload.email);  // 根据邮箱
    // // 用户不存在
    // if (!existUser) {
    //   return;
    // }

    // ctx.state.user 可以提取到JWT编码的data
    const _userid = ctx.state.user.data.userid;
    const existUser = await this.getUserByUserId(_userid); // 根据JWT传过来的userid

    if (!existUser) {
      ctx.throw(422, '用户不存在');
    }

    const { oldpassword, newpassword } = payload;
    // 对比旧密码
    const equal = ctx.helper.hasPasswordHash(oldpassword, existUser.password);
    // 密码不匹配
    if (!equal) {
      ctx.throw(422, '旧密码不正确');
    }

    // 新密码转hash
    const newPasswordHash = ctx.helper.createPasswordHash(newpassword);
    existUser.update({
      password: newPasswordHash,
    });

    return {
      flag: true,
    };
  }

  // 修改基础信息
  async resetSelf() {

  }

  // 修改头像
  async resetAvatar() {

  }
}

module.exports = UserAccessService;
