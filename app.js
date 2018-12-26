'use strict';

module.exports = app => {
  if (app.config.env === 'local' || app.config.env === 'unittest') {
    // 创建数据库
    // app.beforeStart(async () => {
    //   await app.model.sync({ force: true });
    // });
  }
};
