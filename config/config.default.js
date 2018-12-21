'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1545294654973_2137';

  // add your config here
  config.middleware = [];

  // 配置session
  config.session = {
    key: 'SESSION_ID',
    maxAge: 5000,
    httOnly: true,
    encrypt: true,
    renew: true, // renew等于true，每次刷新页面的时候 session 都会被延期
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'Q1234567890',
    database: 'stone_instagram',
    // operatorsAliases: false,
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  return config;
};
