'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('st_users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
      userid: { type: STRING(100) }, // 用户Id
      username: { type: STRING(60), allowNull: false }, // 用户名
      email: { type: STRING(100), allowNull: false, isEmail: true }, // email 地址
      password: { type: STRING(255), allowNull: false }, // 密码
      avatar: { type: STRING(256) }, // 头像
      mobile: STRING(32), // 手机号
      sex: { type: INTEGER, defaultValue: 0 }, // 值为1时是男性，值为2时是女性，默认值为0时是未知
      state: { // 用户状态 0：禁用； 1：正常 ；2：未验证
        type: STRING(2),
        defaultValue: '2', // 默认值
      },
      user_type: { type: STRING(2), defaultValue: '2' }, // 用户类型，1:admin ;2:会员
      last_login_ip: { type: STRING(50) }, // 最后登录ip
      last_login_time: { type: DATE }, // 最后登录时间
      created_at: { type: DATE }, // 创建时间
      updated_at: { type: DATE }, // 更新时间
      deleted_at: { type: DATE }, // 删除时间
    }, {
      freezeTableName: true, // 不自动将表名添加复数
      // 不删除数据库条目，但将新添加的属性deletedAt设置为当前日期（删除完成时）
      paranoid: true,
      comment: '用户表',
    });
  },
  // 在执行数据库降级时调用的函数，删除 st_users 表
  down: async queryInterface => {
    await queryInterface.dropTable('st_users');
  },
};
