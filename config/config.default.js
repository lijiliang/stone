'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1545294654973_2137';

  config.proxy = true;
  // 加载 s中间件
  config.middleware = [ 'errorApiHandler' ];

  // 只对 /api 前缀的 url 路径生效
  config.errorApiHandler = {
    match: '/api',
  };

  // 配置session
  config.session = {
    key: 'SESSION_ID',
    maxAge: 5000,
    httOnly: true,
    encrypt: true,
    // renew: true, // renew等于true，每次刷新页面的时候 session 都会被延期
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'Q1234567890',
    database: 'stone_instagram',
    // operatorsAliases: false,
    timezone: '+08:00', // 东八时区
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.validator = {
    open: async ctx => 'zh-CN',
    // or
    // open: 'zh-CN',
    languages: {
      'zh-CN': {
        required: '%s 必填',
      },
    },
    async formatter(ctx, error) {
      ctx.type = 'json';
      ctx.status = 400;
      ctx.body = error;
    },
  };

  config.jwt = {
    secret: 'Stone',
    enable: true, // default is false
    match: '/jwt', // optional
  };

  return config;
};
