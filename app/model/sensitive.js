/*
 * @Author: Benson
 * @Date: 2018-12-25 11:45:54
 * @LastEditors: Benson
 * @LastEditTime: 2019-01-28 10:35:28
 * @Description: 敏感词管理模型
 */

'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Sensitive = app.model.define('st_sensitive', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
    typeid: { type: INTEGER }, // 类型id  脏话:1; 色情:2; 毒品:3; 政治:4; 未知:5
    content: { type: STRING(255), allowNull: false }, // 内容
    created_at: { type: DATE }, // 创建时间
    updated_at: { type: DATE }, // 更新时间
  }, {
    comment: '敏感词管理表',
    freezeTableName: true, // 不自动将表名添加复数
  });

  // 设置外键
  // https://github.com/eggjs/examples/blob/master/sequelize/app/model/post.js
  Sensitive.associate = function() {
    app.model.Sensitive.belongsTo(app.model.SensitiveType, { as: 'type', foreignKey: 'typeid' });
  };

  return Sensitive;
}
;
