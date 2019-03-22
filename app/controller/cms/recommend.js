'use strict';

const Controller = require('egg').Controller;

/**
 * @controller cms-recommend 推荐位管理接口
 */
class RecommendContoller extends Controller {
  /**
   * @summary 推荐位列表
   * @description 获取推荐位列表
   * @router get /api/admin/v1/recommend
   * @Request query number current eg:1 当前第几页
   * @Request query number pageSize eg:10 一页多少条
   * @Request query number title 标题
   * @Request query number code 编码
   * @apikey Bearer
   * @response 200 baseResponseSuccess 列表数据
   */
  async index() {
    const ctx = this.ctx;
    const res = await ctx.service.cms.recommend.index();
    ctx.returnBody(200, '列表数据', res);
  }

  /**
   * @summary 获取单个推荐位
   * @description 获取单个推荐位信息
   * @router get /api/admin/v1/recommend/{id}
   * @request path string *id
   * @apikey
   * @response 200 recommendQueryRestonse 获取成功
   */
  async show() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用Service进行业务处理
    const res = await service.cms.recommend.show(id);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '获取成功', res);
  }

  /**
   * @summary 创建推荐位
   * @description 创建推荐位
   * @router post /api/admin/v1/recommend/
   * @apikey
   * @request body recommendCreateRequest *body
   * @response 200 recommendQueryRestonse 保存成功
   */
  async create() {
    const { ctx, service } = this;
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(ctx.rule.recommendCreateRequest, payload);
    // 调用 Service 进行业务处理
    const res = await service.cms.recommend.create(payload);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '保存成功', res);
  }

  /**
   * @summary 更新推荐位
   * @description 修改推荐位
   * @router put /api/admin/v1/recommend/{id}
   * @request path string *id
   * @apikey
   * @request body recommendCreateRequest *body
   * @response 200 recommendQueryRestonse 修改成功
   */
  async update() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(ctx.rule.recommendCreateRequest, payload);
    // 调用 Service 进行业务处理
    const res = await service.cms.recommend.update(id, payload);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '修改成功', res);
  }

  /**
   * @summary 删除单条推荐位
   * @description 删除单条推荐位
   * @router delete /api/admin/v1/recommend/{id}
   * @request path string *id
   * @apikey
   * @response 200 baseResponseSuccess 删除成功
   */
  async destroy() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用 Service进行业务处理
    const res = await service.cms.recommend.destroy(id);
    // 设置响应内容和响应状态
    ctx.returnBody(200, '删除成功', res);
  }

  /**
   * @summary 删除多条推荐位
   * @description 删除所选推荐位(字符串 转成 条件id[])
   * @router delete /api/admin/v1/recommend/
   * @apikey
   * @request body deleteIdsRequest *ids
   * @response 200 baseResponseSuccess 操作成功
   */
  async removes() {
    const { ctx, service } = this;
    const { ids } = ctx.request.body;
    // 组装参数
    const _ids = ids.split(',');
    // 调用 Service 进行业务处理
    const res = await service.cms.recommend.removes(_ids);
    // 设置响应内容和响应状态
    ctx.returnBody(200, '操作成功', res);
  }

  /**
   * @summary 获取后台菜单
   * @description 获取管理员所能访问的后台菜单列表
   * @router get /api/admin/v1/menu
   * @apikey Bearer
   * @response 200 baseResponseSuccess 获取成功
   */
  async menu() {
    const { ctx, service } = this;
    // 调用Service进行业务处理
    const res = await service.cms.recommend.menu();
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '获取成功', res);
  }
}

module.exports = RecommendContoller;
