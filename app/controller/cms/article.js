'use strict';

const Controller = require('egg').Controller;

/**
 * @controller cms-article 文章管理接口
 */
class ArticleController extends Controller {
  /**
   * @summary 文章列表
   * @description 获取文章列表
   * @router get /api/admin/v1/article
   * @Request query number categoryid 栏目id
   * @Request query number current eg:1 当前第几页
   * @Request query number pageSize eg:10 一页多少条
   * @apikey Bearer
   * @response 200 articleListRestonse 列表数据
   */

  //  current=1&pageSize=15&sortBy=&descending=false&filter=%7B%22username%22:%22%22,%22email%22:%22%22%7D&categoryid=3
  async index() {
    const ctx = this.ctx;
    const res = await ctx.service.cms.article.index();
    ctx.returnBody(200, '列表数据', res);
  }
  /**
   * @summary 获取单个文章
   * @description 获取获取单个角色信息
   * @router get /api/admin/v1/article/{id}
   * @request path string *id
   * @apikey
   * @response 200 articleQueryRestonse 获取成功
   */
  async show() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用Service进行业务处理
    const res = await service.cms.article.show(id);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '获取成功', res);
  }
  /**
   * @summary 创建文章
   * @description 创建文章
   * @router post /api/admin/v1/article
   * @apikey
   * @request body articleCreateRequest *body
   * @response 200 articleQueryRestonse 添加成功
   */
  async create() {
    const { ctx, service } = this;
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(ctx.rule.articleCreateRequest, payload);
    // 调用 Service 进行业务处理
    const res = await service.cms.article.create(payload);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '添加成功', res);
  }
  /**
   * @summary 更新文章
   * @description 修改文章
   * @router put /api/admin/v1/article/{id}
   * @request path string *id
   * @apikey
   * @request body articleCreateRequest *body
   * @response 200 articleQueryRestonse 修改成功
   */
  async update() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(ctx.rule.articleCreateRequest, payload);
    // 调用 Service 进行业务处理
    const res = await service.cms.article.update(id, payload);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '修改成功', res);
  }
  /**
   * @summary 删除单个文章
   * @description 删除单个文章
   * @router delete /api/admin/v1/article/{id}
   * @request path string *id
   * @apikey
   * @response 200 baseResponseSuccess 删除成功
   */
  async destroy() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用 Service进行业务处理
    const res = await service.cms.article.destroy(id);
    // 设置响应内容和响应状态
    ctx.returnBody(200, '删除成功', res);
  }
  /**
   * @summary 删除多篇文章
   * @description 删除所选接口(字符串 转成 条件id[])
   * @router delete /api/admin/v1/article
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
    const res = await service.cms.article.removes(_ids);
    // 设置响应内容和响应状态
    ctx.returnBody(200, '操作成功', res);
  }
}

module.exports = ArticleController;
