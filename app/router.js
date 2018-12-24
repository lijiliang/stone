'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const { login } = controller;
  const apiV1Router = app.router.namespace('/api/v1');

  router.get('/', controller.home.index);

  apiV1Router.post('/login/register', login.register) // 注册
  apiV1Router.post('/login', login.loginIn); // 登录,
  apiV1Router.get('/current', app.jwt, login.current)
};
