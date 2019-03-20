/*
 * @Author: Benson
 * @Date: 2019-01-20 11:08:05
 * @LastEditors: Benson
 * @LastEditTime: 2019-03-20 16:14:14
 * @Description: 文章推荐位与文章关联管理
 */

'use strict';

module.exports = app => {
  const { INTEGER } = app.Sequelize;
  const CmsRecommendArticle = app.model.define('st_cms_recommend_article', {
    recommendId: { type: INTEGER, primaryKey: true }, // 推荐位id
    articleId: { type: INTEGER, primaryKey: true }, // 文章id
    sort: { type: INTEGER, defaultValue: 0 }, // 排序
  }, {
    freezeTableName: true, // 不自动将表名添加复数
    comment: '文章推荐位与文章关联管理表',
  });

  return CmsRecommendArticle;
};
