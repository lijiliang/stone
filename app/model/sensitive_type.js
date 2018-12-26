/*
 * @Author: Benson
 * @Date: 2018-12-25 11:45:54
 * @LastEditors: Benson
 * @LastEditTime: 2018-12-26 15:02:03
 * @Description: 敏感词类型模型
 */

'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const SensitiveType = app.model.define('st_sensitive_type', {
    typeid: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
    typename: { type: STRING(25), allowNull: false }, // 内容
    created_at: { type: DATE }, // 创建时间
    updated_at: { type: DATE }, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
    comment: '敏感词类型表',
  });

  return SensitiveType;
}
;
