/*
 * @Author: Benson
 * @Date: 2019-01-08 16:39:39
 * @LastEditors: Benson
 * @LastEditTime: 2019-01-25 10:50:50
 * @Description: 接口控制器
 */
'use strict';

const Controller = require('egg').Controller;

/**
 * @controller interface 接口信息管理(后台)
 */
class InterfaceController extends Controller {
  /**
   * @summary 获取所有接口
   * @description 获取列表(分页/模糊/搜索)
   * @router get /api/v1/interface
   * @apikey
   * @request query integer current eg:1 页码 默认 1
   * @request query integer pageSize eg:10 单页数量 默认 10
   * @request query string sortBy 排序名字(按哪个名字排序)
   * @request query boolean descending 是否降序
   * @request query name descending 名称
   * @request query path descending 路径
   * @request query method descending 方法
   * @response 200 interfaceListRestonse 列表数据
   */
  async index() {
    const ctx = this.ctx;
    const res = await ctx.service.interface.index();
    ctx.returnBody(200, '列表数据', res);
  }

  /**
   * @summary 获取单条接口
   * @description 获取单条接口信息
   * @router get /api/v1/interface/{id}
   * @request path string *id
   * @apikey
   * @response 200 interfaceQueryRestonse 获取成功
   */
  async show() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用Service进行业务处理
    const res = await service.interface.show(id);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '获取成功', res);
  }

  /**
   * @summary 创建接口
   * @description 创建接口
   * @router post /api/v1/interface
   * @apikey
   * @request body interfaceCreateRequest *body
   * @response 200 interfaceQueryRestonse 添加成功
   */
  async create() {
    const { ctx, service } = this;
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(ctx.rule.interfaceCreateRequest, payload);
    // 调用 Service 进行业务处理
    const res = await service.interface.create(payload);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '添加成功', res);
  }

  /**
   * @summary 更新接口
   * @description 修改接口
   * @router put /api/v1/interface/{id}
   * @request path string *id
   * @apikey
   * @request body interfaceCreateRequest *body
   * @response 200 interfaceQueryRestonse 修改成功
   */
  async update() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(ctx.rule.interfaceCreateRequest, payload);
    // 调用 Service 进行业务处理
    const res = await service.interface.update(id, payload);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '修改成功', res);
  }

  /**
   * @summary 删除单条接口
   * @description 删除单条接口
   * @router delete /api/v1/interface/{id}
   * @request path string *id
   * @apikey
   * @response 200 baseResponseSuccess 删除成功
   */
  async destroy() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用 Service进行业务处理
    const res = await service.interface.destroy(id);
    // 设置响应内容和响应状态
    ctx.returnBody(200, '删除成功', res);
  }

  /**
   * @summary 删除多条接口
   * @description 删除所选接口(字符串 转成 条件id[])
   * @router delete /api/v1/interface
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
    const res = await service.interface.removes(_ids);
    // 设置响应内容和响应状态
    ctx.returnBody(200, '操作成功', res);

  }
}

module.exports = InterfaceController;
