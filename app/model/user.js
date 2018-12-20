'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  // console.log(app.Sequelize);
  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    age: INTEGER,
    // email: { type: STRING(255), allowNull: false, comment: "email 地址" }, // email 地址
    // password: { type: STRING(255), allowNull: false }, // 密码
    created_at: DATE,
    updated_at: DATE,
  }, {
    comment: '这是用户表',
  });

  return User;
};
