/*
 * @Author: Benson
 * @Date: 2019-01-10 11:08:05
 * @LastEditors: Benson
 * @LastEditTime: 2019-01-29 15:32:24
 * @Description: 文章信息表模型
 */

'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN, TEXT } = app.Sequelize;
  const CmsArticle = app.model.define('st_cms_article', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
    categoryid: { type: INTEGER }, // 栏目Id
    title: { type: STRING(50), allowNull: false }, // 标题
    subtitle: { type: STRING(50), defaultValue: '' }, // 副标题
    type: { type: STRING(10), defaultValue: '' }, // 文章类型:info资讯、img图片
    image: { type: STRING(100), defaultValue: '' }, // 图片
    thumbnil: { type: STRING(100), defaultValue: '' }, // 缩略图
    url: { type: STRING(150), defaultValue: '' }, // 外链
    tag: { type: STRING(50), defaultValue: '' }, // TAG
    intro: { type: STRING(200), defaultValue: '' }, // 简介
    content: { type: TEXT }, // 内容
    view_count: { type: INTEGER }, // 浏览数
    custom_params: { type: STRING(500), defaultValue: '' }, // 自定义参数
    start_time: { type: DATE }, // 开始时间
    end_time: { type: DATE }, // 结束时间
    description: { type: STRING(100), defaultValue: '' }, // 描述
    meta_title: { type: STRING(50), defaultValue: '' }, // seo标题
    meta_keywords: { type: STRING(100), defaultValue: '' }, // seo关键词
    meta_description: { type: STRING(250), defaultValue: '' }, // seo描述
    content_hidden: { type: STRING(1000), defaultValue: '' }, // seo内容隐藏域
    sort: { type: INTEGER, defaultValue: 0 }, // 排序
    enable: { type: BOOLEAN, defaultValue: true }, // 是否启用
    isDeleted: { type: BOOLEAN, defaultValue: false }, // 是否删除
    creator: { type: STRING(30), defaultValue: '' }, // 创建人
    created_at: { type: DATE }, // 创建时间
    updated_at: { type: DATE }, // 更新时间
    deleted_at: { type: DATE }, // 删除时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
    comment: '文章信息表',
  });

  return CmsArticle;
}
;
