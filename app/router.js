'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const { login, userAccess } = controller;
  const apiV1Router = app.router.namespace('/api/v1');

  router.get('/', controller.home.index);

  // userAccess
  apiV1Router.post('/register', userAccess.register) // 注册
  apiV1Router.post('/login', userAccess.login); // 登录,
  apiV1Router.get('/logout', app.jwt, userAccess.logout); // 登出,
  apiV1Router.get('/current', app.jwt, userAccess.current); // 获取用户信息
  apiV1Router.put('/resetpsw', app.jwt, userAccess.resetPsw) // 修改密码
};
