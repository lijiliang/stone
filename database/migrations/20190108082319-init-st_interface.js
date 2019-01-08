'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 接口管理 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('st_interface', {
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
      comment: '接口管理表',
    });
  },
  // 在执行数据库降级时调用的函数，删除 st_interface 表
  down: async queryInterface => {
    await queryInterface.dropTable('st_interface');
  },
};
