'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 敏感词列表 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('st_sensitive', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
      typeid: { type: INTEGER }, // 类型id
      content: { type: STRING(255), allowNull: false }, // 内容
      created_at: { type: DATE }, // 创建时间
      updated_at: { type: DATE }, // 更新时间
    }, {
      comment: '敏感词管理表',
    });
  },
  // 在执行数据库降级时调用的函数，删除 st_sensitive 表
  down: async queryInterface => {
    await queryInterface.dropTable('st_sensitive');
  },
};
