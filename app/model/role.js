/*
 * @Author: Benson
 * @Date: 2019-01-10 11:08:05
 * @LastEditors: Benson
 * @LastEditTime: 2019-01-10 11:23:00
 * @Description: 角色模型
 */

'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Role = app.model.define('st_role', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
    name: { type: STRING(25) }, // 角色名称
    code: { type: STRING(25) }, // 角色标识
    description: { type: STRING(255) }, // 角色描述
    state: { // 状态 0：禁用； 1：正常
      type: STRING(2),
      defaultValue: '1', // 默认值
    },
    created_at: { type: DATE }, // 创建时间
    updated_at: { type: DATE }, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
    comment: '角色管理表',
  });

  return Role;
}
;
