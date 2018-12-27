'use strict';

module.exports = app => {
  if (app.config.env === 'local' || app.config.env === 'unittest') {
    // 创建数据库
    app.beforeStart(async () => {
      // 同步所有尚未在数据库中的模型;
      // await app.model.sync();
      // 强制同步所有模型;
      // await app.model.sync({ force: true });
    });

  }
};
