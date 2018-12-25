/*
 * @Author: Benson
 * @Date: 2018-12-25 11:32:37
 * @LastEditors: Benson
 * @LastEditTime: 2018-12-25 11:38:18
 * @Description: 用户日志管理模型
 */
'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Logs = app.model.define('st_logs', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
    username: { type: STRING(60), allowNull: false }, // 用户名
    content: { type: STRING(255), allowNull: false }, // 内容
    last_login_ip: { type: STRING(50) }, // 最后登录ip
    last_login_time: { type: DATE }, // 最后登录时间
    created_at: { type: DATE }, // 创建时间
    updated_at: { type: DATE }, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
  });

  return Logs;
}
;
