'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 敏感词类型 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('st_sensitive_type', {
      typeid: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 类型id
      typename: { type: STRING(25), allowNull: false }, // 内容
      created_at: { type: DATE }, // 创建时间
      updated_at: { type: DATE }, // 更新时间
    }, {
      comment: '敏感词类型表',
    });
  },
  // 在执行数据库降级时调用的函数，删除 st_sensitive_type 表
  down: async queryInterface => {
    await queryInterface.dropTable('st_sensitive_type');
  },
};
