'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1542014150825_1917';

  // 配置session
  config.session = {
    key: 'SESSION_ID',
    maxAge: 5000,
    httOnly: true,
    encrypt: true,
    renew: true, // renew等于true，每次刷新页面的时候 session 都会被延期
  };

  return config;
};
