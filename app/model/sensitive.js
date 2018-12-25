/*
 * @Author: Benson
 * @Date: 2018-12-25 11:45:54
 * @LastEditors: Benson
 * @LastEditTime: 2018-12-25 11:46:47
 * @Description: 敏感词管理模型
 */

'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Sensitive = app.model.define('st_sensitive', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
    typeid: { type: INTEGER }, // 类型id
    content: { type: STRING(255), allowNull: false }, // 内容
    created_at: { type: DATE }, // 创建时间
    updated_at: { type: DATE }, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
  });

  return Sensitive;
}
;
