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

  // 配置模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  // add your config here 增加配置中间件
  config.middleware = [ 'printdate', 'forbidip', 'gzip', 'auth' ];

  // 给printdate中间件传参数
  config.printdate = {
    aaa: 'test params',
  };

  config.forbidip = {
    forbidips: [ '127.0.0.2', '192.168.0.10' ],
  };

  config.gzip = {
    threshold: 1024, // 小于 1k 的响应体不压缩
  };

  config.api = 'http://www.phonegap100.com/';

  return config;
};
