'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 角色管理 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('st_role', {
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
  },
  // 在执行数据库降级时调用的函数，删除 st_role 表
  down: async queryInterface => {
    await queryInterface.dropTable('st_role');
  },
};
