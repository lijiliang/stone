'use strict';

const Controller = require('egg').Controller;

/**
 * @controller cms-category 栏目管理接口
 */
class CategoryController extends Controller {
  /**
   * @summary 栏目列表
   * @description 获取栏目列表
   * @router get /api/admin/v1/category
   * @apikey Bearer
   * @response 200 baseResponseSuccess 列表数据
   */
  async index() {
    const ctx = this.ctx;
    const res = await ctx.service.cms.category.index();
    ctx.returnBody(200, '列表数据', res);
  }

  /**
   * @summary 获取单个栏目
   * @description 获取单个栏目信息
   * @router get /api/admin/v1/category/{id}
   * @request path string *id
   * @apikey
   * @response 200 categoryQueryRestonse 获取成功
   */
  async show() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用Service进行业务处理
    const res = await service.cms.category.show(id);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '获取成功', res);
  }

  /**
   * @summary 创建栏目
   * @description 创建栏目
   * @router post /api/admin/v1/category/
   * @apikey
   * @request body categoryCreateRequest *body
   * @response 200 categoryQueryRestonse 保存成功
   */
  async create() {
    const { ctx, service } = this;
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(ctx.rule.categoryCreateRequest, payload);
    // 调用 Service 进行业务处理
    const res = await service.cms.category.create(payload);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '保存成功', res);
  }

  /**
   * @summary 更新栏目
   * @description 修改栏目
   * @router put /api/admin/v1/category/{id}
   * @request path string *id
   * @apikey
   * @request body categoryCreateRequest *body
   * @response 200 categoryQueryRestonse 修改成功
   */
  async update() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(ctx.rule.categoryCreateRequest, payload);
    // 调用 Service 进行业务处理
    const res = await service.cms.category.update(id, payload);
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '修改成功', res);
  }

  /**
   * @summary 删除单条栏目
   * @description 删除单条栏目
   * @router delete /api/admin/v1/category/{id}
   * @request path string *id
   * @apikey
   * @response 200 baseResponseSuccess 删除成功
   */
  async destroy() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用 Service进行业务处理
    const res = await service.cms.category.destroy(id);
    // 设置响应内容和响应状态
    ctx.returnBody(200, '删除成功', res);
  }

  /**
   * @summary 删除多条栏目
   * @description 删除所选栏目(字符串 转成 条件id[])
   * @router delete /api/admin/v1/category/
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
    const res = await service.cms.category.removes(_ids);
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
    const res = await service.cms.category.menu();
    // 设置响应内容和响应状态码
    ctx.returnBody(200, '获取成功', res);
  }
}

module.exports = CategoryController;
