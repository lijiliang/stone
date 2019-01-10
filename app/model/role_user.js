/*
 * @Author: Benson
 * @Date: 2019-01-10 11:08:05
 * @LastEditors: Benson
 * @LastEditTime: 2019-01-10 11:25:45
 * @Description: 角色用户关联模型
 */

'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const RoleUser = app.model.define('st_role_user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
    role_id: { type: INTEGER }, // 角色id
    user_id: { type: STRING(100) }, // 用户id
    created_at: { type: DATE }, // 创建时间
    updated_at: { type: DATE }, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
    comment: '角色用户关联表',
  });

  return RoleUser;
}
;
