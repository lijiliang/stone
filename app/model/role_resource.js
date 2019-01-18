/*
 * @Author: Benson
 * @Date: 2019-01-10 11:08:05
 * @LastEditors: Benson
 * @LastEditTime: 2019-01-18 18:19:46
 * @Description: 角色资源关联模型
 */

'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const RoleResource = app.model.define('st_role_resource', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
    role_id: { type: INTEGER }, // 角色id
    resource_id: { type: STRING(100) }, // 资源id
    resource_id_fe: { type: STRING(100) }, // 资源id(前端用，选中没有父id)
    created_at: { type: DATE }, // 创建时间
    updated_at: { type: DATE }, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
    comment: '角色资源关联表',
  });

  return RoleResource;
}
;
