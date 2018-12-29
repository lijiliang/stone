/*
 * @Author: Benson
 * @Date: 2018-12-28 18:23:35
 * @LastEditors: Benson
 * @LastEditTime: 2018-12-28 18:25:02
 * @Description: 文件管理模型
 */
'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Files = app.model.define('st_files', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
    key: { type: STRING(255) }, // KEY
    url: { type: STRING(255) }, // 文件路径
    extname: { type: STRING(10) }, // 文件后缀
    state: { // 状态 0：禁用； 1：正常
      type: STRING(2),
      defaultValue: '1', // 默认值
    },
    created_at: { type: DATE }, // 创建时间
    updated_at: { type: DATE }, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
    comment: '文件管理表',
  });

  return Files;
}
;
