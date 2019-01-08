/*
 * @Author: Benson
 * @Date: 2019-01-08 16:33:23
 * @LastEditors: Benson
 * @LastEditTime: 2019-01-08 16:34:35
 * @Description: 接口管理模型
 */

'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Interface = app.model.define('st_interface', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
    name: { type: STRING(100) }, // 名称
    path: { type: STRING(100) }, // 接口地址
    method: { type: STRING(12) }, // 接口方法
    description: { type: STRING(255) }, // 接口描述
    state: { // 状态 0：禁用； 1：正常
      type: STRING(2),
      defaultValue: '1', // 默认值
    },
    created_at: { type: DATE }, // 创建时间
    updated_at: { type: DATE }, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
    comment: '接口管理表',
  });

  return Interface;
}
;
