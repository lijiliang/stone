/*
 * @Author: Benson
 * @Date: 2018-12-20 17:36:17
 * @LastEditors: Benson
 * @LastEditTime: 2018-12-26 15:02:22
 * @Description: 用户管理模型
 */
'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, NOW } = app.Sequelize;
  const User = app.model.define('st_users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
    userid: { type: STRING(100) }, // 用户Id
    username: { type: STRING(60), allowNull: false }, // 用户名
    email: { type: STRING(100), allowNull: false, isEmail: true }, // email 地址
    password: { type: STRING(255), allowNull: false }, // 密码
    avatar: { type: STRING(256), defaultValue: 'https://s11.mogucdn.com/mlcdn/c45406/181105_60bdj928jdhjg9ehhg58hje1212ek_640x640.jpg' }, // 头像
    mobile: STRING(32), // 手机号
    sex: { type: INTEGER, defaultValue: 0 }, // 性别 0：未知；1:男性; 2:女性
    state: { // 用户状态 0：禁用； 1：正常 ；2：未验证
      type: STRING(2),
      defaultValue: '2', // 默认值
    },
    user_type: { type: STRING(2), defaultValue: '2' }, // 用户类型，1:admin ;2:会员
    last_login_ip: { type: STRING(50) }, // 最后登录ip
    last_login_time: { type: DATE }, // 最后登录时间
    created_at: { type: DATE, defaultValue: NOW }, // 创建时间
    updated_at: { type: DATE, defaultValue: NOW }, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
    comment: '用户表',
  });

  return User;
}
;
