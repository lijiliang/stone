'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, NOW } = app.Sequelize;
  const User = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
    userid: { type: STRING(100) }, // 用户Id
    username: { type: STRING(60), allowNull: false }, // 用户名
    email: { type: STRING(100), allowNull: false, isEmail: true }, // email 地址
    password: { type: STRING(255), allowNull: false }, // 密码
    avatar: { type: STRING(256), defaultValue: 'https://s11.mogucdn.com/mlcdn/c45406/181105_60bdj928jdhjg9ehhg58hje1212ek_640x640.jpg' }, // 头像
    mobile: STRING(32), // 手机号
    sex: { type: INTEGER, defaultValue: 0 }, // 值为1时是男性，值为2时是女性，默认值为0时是未知
    state: { // 用户状态 0：禁用； 1：正常 ；2：未验证
      type: STRING(2),
      defaultValue: '2', // 默认值
    },
    user_type: { type: STRING(2), defaultValue: '2' },
    last_login_ip: {type: STRING(50)}, // 最后登录ip
    last_login_time: { type: DATE }, // 最后登录时间
    created_at: { type: DATE, defaultValue: NOW }, // 创建时间
    updated_at: { type: DATE, defaultValue: NOW }, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
  });

  return User;
}
;
