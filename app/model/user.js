/*
 * @Author: Benson
 * @Date: 2018-12-20 17:36:17
 * @LastEditors: Benson
 * @LastEditTime: 2018-12-27 10:33:53
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
    avatar: { type: STRING(256), defaultValue: 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4' }, // 头像
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
    deleted_at: { type: DATE }, // 删除时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
    // 不删除数据库条目，但将新添加的属性deletedAt设置为当前日期（删除完成时）
    paranoid: true,
    comment: '用户表',
  });

  // 根据userid查找用户
  // 使用 const user = await this.ctx.model.User.findByIdWithUser(userid);

  User.findByIdWithUser = async function(userid) {
    return await this.findOne({
      where: { userid },
    });
  };

  return User;
}
;
