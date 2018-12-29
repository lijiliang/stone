'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1545294654973_2137';

  const dir = [ path.join(appInfo.baseDir, 'app/public') ];

  config.static = {
    dir,
  };

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

  // config.validator = {
  //   open: async ctx => 'zh-CN',
  //   // or
  //   // open: 'zh-CN',
  //   languages: {
  //     'zh-CN': {
  //       required: '%s 必填',
  //     },
  //   },
  //   async formatter(ctx, error) {
  //     ctx.type = 'json';
  //     ctx.status = 400;
  //     ctx.body = error;
  //   },
  // };

  config.jwt = {
    secret: 'Stone',
    enable: true, // default is false
    match: '/jwt', // optional
  };

  config.multipart = {
    fileSize: '50mb', // 允许上传文件大小
  };

  // 七牛
  config.fullQiniu = {
    default: {
      ak: '', // Access Key
      sk: '', // Secret Key
      useCdnDomain: true,
      isLog: true,
    },
    app: true,
    agent: false,
    client: {
      zone: 'Zone_z2', // Zone_z0 华东, Zone_z1 华北, Zone_z2 华南, Zone_na0 北美
      bucket: 'stone',
      baseUrl: 'http://img1.sucaiweb.com/', // 用于拼接已上传文件的完整地址
    },

    // 单实例
    // 通过 app.fullQiniu 直接使用实例
    // client: {
    //     zone: '', // Zone_z0 华东, Zone_z1 华北, Zone_z2 华南, Zone_na0 北美
    //     bucket: '',
    //     baseUrl: null, // 用于拼接已上传文件的完整地址
    // }

    // 多实例
    // clients: {
    //     // 可以通过 app.fullQiniu.get('myImage'), app.fullQiniu.get('myText') 获取实例
    //     myImage: {
    //         zone: '', // Zone_z0 华东, Zone_z1 华北, Zone_z2 华南, Zone_na0 北美
    //         bucket: '',
    //     baseUrl: null, // 用于拼接已上传文件的完整地址
    //     },
    //     myText: {
    //         zone: '', // Zone_z0 华东, Zone_z1 华北, Zone_z2 华南, Zone_na0 北美
    //         bucket: '',
    //     baseUrl: null, // 用于拼接已上传文件的完整地址
    //     },
    // },
  };

  return config;
};
