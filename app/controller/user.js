'use strict';

const Controller = require('egg').Controller;
const regrule = require('../utils/regrule');

/**
 * @controller user 用户信息管理(后台)接口
 */

class UserController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.userParamRule = {
      password: { type: 'string', required: true, format: regrule.regPassword, message: '密码必须有8位且有一个大写字母和数字' },
      username: { type: 'string', required: true, message: '用户名不能为空' },
      email: { type: 'email', required: true, message: '邮箱不正确' },
      mobile: { type: 'string', required: false, allowEmpty: true, format: regrule.regPhone, message: '手机号不正确' },
      sex: { type: 'enum', required: false, allowEmpty: true, values: [ 0, 1, 2 ], message: '性别不正确' },
      user_type: { type: 'enum', required: false, allowEmpty: true, values: [ '1', '2' ], message: '用户类型不正确' },
    };
  }
  // 获取用户信息
  async userInfo() {
    const ctx = this.ctx;
    const userId = ctx.query.userId || ctx.user.userId;

    // 获取并填充数据
    const user = await this.service.user.getUserByUser(userId);
    const userInfo = {
      username: user.username,
    };
    ctx.returnBody(200, '获取成功', userInfo);
  }

  /**
   * @summary 获取所有用户
   * @description 获取所有用户(分页/模糊)
   * @router get /api/v1/user
   * @apikey
   * @request query integer current eg:1 页码 默认 1
   * @request query integer pageSize eg:10 单页数量 默认 10
   * @request query string sortBy 排序名字(按哪个名字排序)
   * @request query boolean descending 是否降序
   * @request query body filter 例：filter: {"username":"","email":"1", "roleId":1}
   * @response 200 userListRestonse 用户列表数据
   */
  async index() {
    const ctx = this.ctx;
    const res = await ctx.service.user.index();
    ctx.returnBody(200, '用户列表数据', res);
  }

  /**
   * @summary 创建用户
   * @description 创建用户，具有全部信息的创建
   * @router post /api/v1/user
   * @apikey
   * @request body userCreateRequest *body
   * @response 200 userQueryRestonse 创建用户成功
   */
  async create() {
    const { ctx, service } = this;
    // 组装参数
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(ctx.rule.userCreateRequest, payload);
    // 调用 Service 进行业务处理
    const res = await service.user.create(payload);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '创建用户成功', res);
  }

  /**
   * @summary 获取单个用户
   * @description 获取单个用户信息
   * @router get /api/v1/user/{id}
   * @request path string *id id的值是用户的userid
   * @apikey
   * @response 200 userQueryRestonse 获取成功
   */
  async show() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用Service进行业务处理
    const res = await service.user.show(id);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '获取成功', res);
  }

  /**
   * @summary 修改用户
   * @description 修改用户，具有全部信息的创建
   * @router put /api/v1/user/{id}
   * @request path string *id id的值是用户的userid
   * @apikey
   * @request body userUpdateRequest *body
   * @response 200 userQueryRestonse 修改用户成功
   */
  async update() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    const payload = ctx.request.body || {};

    // 校验参数
    ctx.validate(ctx.rule.userUpdateRequest, payload);
    // 调用 Service 进行业务处理
    const res = await service.user.update(id, payload);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '修改用户成功', res);
  }

  /**
   * @summary 删除单个用户
   * @description 删除单个用户信息
   * @router delete /api/v1/user/{id}
   * @request path string *id id的值是用户的userid
   * @apikey
   * @response 200 baseResponseSuccess 删除成功
   */
  async destroy() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用 Service进行业务处理
    const res = await service.user.destroy(id);
    // 设置响应内容和响应状态
    ctx.returnBody(200, '删除成功', res);
  }

  /**
   * @summary 删除多个用户
   * @description 删除所选用户(字符串 转成 条件id[])
   * @router delete /api/v1/user
   * @apikey
   * @request body deleteIdsRequest *ids
   * @response 200 baseResponseSuccess 删除成功
   */
  async removes() {
    const { ctx, service } = this;
    const { ids } = ctx.request.body;
    // 组装参数
    const _ids = ids.split(',');
    // 调用 Service 进行业务处理
    const res = await service.user.removes(_ids);
    // 设置响应内容和响应状态
    ctx.returnBody(200, '操作成功', res);

  }
}

module.exports = UserController;
