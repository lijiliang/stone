/*
 * @Author: Benson
 * @Date: 2019-01-10 11:08:05
 * @LastEditors: Benson
 * @LastEditTime: 2019-01-29 15:30:47
 * @Description: 文章栏目表模型
 */

'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize;
  const CmsCategory = app.model.define('st_cms_category', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
    pid: { type: INTEGER }, // 上级栏目Id
    name: { type: STRING(30) }, // 栏目名称
    en_name: { type: STRING(30) }, // 英文栏目名称
    code: { type: STRING(30) }, // 编码
    route: { type: STRING(30) }, // 路由
    type: { type: STRING(30) }, // 类型：channel栏目、page单页、link外链'
    url: { type: STRING(150) }, // 外链
    articleid: { type: INTEGER }, // 单页关联文章id
    image: { type: STRING(100) }, // 栏目图
    description: { type: STRING(100) }, // 描述
    meta_title: { type: STRING(50) }, // seo标题
    meta_keywords: { type: STRING(100) }, // seo关键词
    meta_description: { type: STRING(250) }, // seo描述
    sort: { type: INTEGER, defaultValue: 0 }, // 排序
    enable: { type: BOOLEAN, defaultValue: true }, // 是否启用
    isDeleted: { type: BOOLEAN, defaultValue: false }, // 是否删除
    created_at: { type: DATE }, // 创建时间
    updated_at: { type: DATE }, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
    comment: '文章栏目表',
  });

  return CmsCategory;
}
;
