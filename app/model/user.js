'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, NOW } = app.Sequelize;
  const User = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
    userid: { type: STRING(255) }, // 用户Id
    username: { type: STRING(255), allowNull: false }, // 用户名
    email: { type: STRING(255), allowNull: false }, // email 地址
    password: { type: STRING(255), allowNull: false }, // 密码
    avatarUrl: { type: STRING(256), defaultValue: 'https://s11.mogucdn.com/mlcdn/c45406/181105_60bdj928jdhjg9ehhg58hje1212ek_640x640.jpg' }, // 头像
    mobile: STRING(32), // 手机号
    sex: { type: INTEGER, defaultValue: 0 }, // 值为1时是男性，值为2时是女性，默认值为0时是未知
    state: { // 状态 0未激活邮箱、1已激活邮箱
      type: STRING(2),
      defaultValue: '0', // 默认值
    },
    created_at: { type: DATE, defaultValue: NOW }, // 创建时间
    updated_at: { type: DATE, defaultValue: NOW }, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
  });

  return User;
}
;
