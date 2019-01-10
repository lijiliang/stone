'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 角色用户关联 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('st_role_user', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
      role_id: { type: INTEGER }, // 角色id
      user_id: { type: STRING(100) }, // 用户id
      created_at: { type: DATE }, // 创建时间
      updated_at: { type: DATE }, // 更新时间
    }, {
      freezeTableName: true, // 不自动将表名添加复数
      comment: '角色用户关联表',
    });
  },
  // 在执行数据库降级时调用的函数，删除 st_role_user 表
  down: async queryInterface => {
    await queryInterface.dropTable('st_role_user');
  },
};
