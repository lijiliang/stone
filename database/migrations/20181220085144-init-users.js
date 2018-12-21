'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
      userid: { type: STRING(255) }, // 用户Id
      username: { type: STRING(255), allowNull: false }, // 用户名
      email: { type: STRING(255), allowNull: false }, // email 地址
      password: { type: STRING(255), allowNull: false }, // 密码
      avatarUrl: STRING(256), // 头像
      mobile: STRING(32), // 手机号
      sex: { type: INTEGER, defaultValue: 0 }, // 值为1时是男性，值为2时是女性，默认值为0时是未知
      state: { // 状态 0未激活邮箱、1已激活邮箱
        type: STRING(2),
        defaultValue: '0', // 默认值
      },
      created_at: DATE, // 创建时间
      updated_at: DATE, // 更新时间
    }, {
      comment: '用户表',
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};
