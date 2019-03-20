/*
 * @Author: Benson
 * @Date: 2019-01-10 11:08:05
 * @LastEditors: Benson
 * @LastEditTime: 2019-03-19 17:37:20
 * @Description: 文章推荐位管理
 */

'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize;
  const CmsRecommend = app.model.define('st_cms_recommend', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
    title: { type: STRING(255) }, // 标题
    code: { type: STRING(20) }, // 编码
    picPath: { type: STRING(50) }, // 栏目图
    orderBy: { type: STRING(10) }, // 排序方式
    creator: { type: STRING(30) }, // 创建人
    modifier: { type: STRING(30) }, // 修改人
    enable: { type: BOOLEAN, defaultValue: true }, // 是否启用
    isDeleted: { type: BOOLEAN, defaultValue: false }, // 是否删除
    created_at: { type: DATE }, // 创建时间
    updated_at: { type: DATE }, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
    comment: '文章推荐位管理表',
  });

  return CmsRecommend;
};
