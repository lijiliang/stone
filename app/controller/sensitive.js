/*
 * @Author: Benson
 * @Date: 2018-12-26 11:19:13
 * @LastEditors: Benson
 * @LastEditTime: 2019-01-25 11:53:04
 * @Description: 敏感词管理 控制器
 */
'use strict';

const Controller = require('egg').Controller;

/**
 * @controller sensitive 敏感词管理(后台)
 */
class SensitiveController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.typeParamRule = {
      typeid: { type: 'number', required: true, message: 'id必须是数字类型' },
      content: { type: 'string', required: true, message: '敏感字不正确' },
    };
  }

  /**
   * @summary 添加敏感词类型
   * @description 添加敏感词类型
   * @router post /api/v1/sensitivetype
   * @apikey
   * @request body sensitivetTypeCreateRequest *body
   * @response 200 sensitiveTypeResponse 添加成功
   */
  async type() {
    const { ctx } = this;
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(ctx.rule.sensitivetTypeCreateRequest, payload);
    const res = await ctx.service.sensitive.type(payload);
    ctx.returnBody(200, '添加成功', res);
  }

  /**
   * @summary 查询敏感词类型列表
   * @description 查询敏感词类型列表
   * @router get /api/v1/sensitivetype
   * @apikey
   * @response 200 sensitiveTypeListResponse success
   */
  async typeList() {
    const { ctx } = this;
    const res = await ctx.service.sensitive.typeList();
    ctx.returnBody(200, 'success', res);
  }

  /**
   * @summary 查询所有敏感词
   * @description 获取列表(分页/模糊/搜索)
   * @router get /api/v1/sensitive
   * @apikey
   * @request query integer current eg:1 页码 默认 1
   * @request query integer pageSize eg:10 单页数量 默认 10
   * @response 200 sensitiveListResponse 列表数据
   */
  async index() {
    const { ctx } = this;
    const res = await ctx.service.sensitive.index();
    ctx.returnBody(200, '获取成功', res);
  }

  /**
   * @summary 创建敏感词
   * @description 创建敏感词
   * @router post /api/v1/sensitive
   * @apikey
   * @request body sensitiveCreateRequest *body
   * @response 200 sensitiveQueryRestonse 添加成功
   */
  async create() {
    const { ctx } = this;
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(ctx.rule.sensitiveCreateRequest, payload);
    const res = await ctx.service.sensitive.create(payload);
    ctx.returnBody(200, '添加成功', res);
  }

  /**
   * @summary 获取单个敏感词
   * @description 获取单个敏感词信息
   * @router get /api/v1/sensitive/{id}
   * @request path string *id
   * @apikey
   * @response 200 sensitiveQueryRestonse 获取成功
   */
  async show() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用Service进行业务处理
    const res = await service.sensitive.show(id);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '获取成功', res);
  }

  /**
   * @summary 修改敏感词
   * @description 修改敏感词
   * @router put /api/v1/sensitive/{id}
   * @request path string *id
   * @apikey
   * @request body sensitiveCreateRequest *body
   * @response 200 sensitiveQueryRestonse 修改成功
   */
  async update() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(this.typeParamRule, payload);
    // 调用 Service 进行业务处理
    const res = await service.sensitive.update(id, payload);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '修改成功', res);
  }

  /**
   * @summary 删除单个敏感词
   * @description 删除单个敏感词
   * @router delete /api/v1/sensitive/{id}
   * @request path string *id
   * @apikey
   * @response 200 baseResponseSuccess 删除成功
   */
  async destroy() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用 Service进行业务处理
    const res = await service.sensitive.destroy(id);
    // 设置响应内容和响应状态
    ctx.returnBody(200, '删除成功', res);
  }

  /**
   * @summary 删除多条敏感词
   * @description 删除所选(字符串 转成 条件id[])
   * @router delete /api/v1/sensitive
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
    const res = await service.sensitive.removes(_ids);
    // 设置响应内容和响应状态
    ctx.returnBody(200, '操作成功', res);

  }
}

module.exports = SensitiveController;
