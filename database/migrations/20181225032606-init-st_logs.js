'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 用户日志管理 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('st_logs', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
      username: { type: STRING(60), allowNull: false }, // 用户名
      content: { type: STRING(255), allowNull: false }, // 内容
      last_login_ip: { type: STRING(50) }, // 最后登录ip
      last_login_time: { type: DATE }, // 最后登录时间
      created_at: { type: DATE }, // 创建时间
      updated_at: { type: DATE }, // 更新时间
    }, {
      comment: '用户日志管理表',
    });
  },
  // 在执行数据库降级时调用的函数，删除 st_logs 表
  down: async queryInterface => {
    await queryInterface.dropTable('st_logs');
  },
};
