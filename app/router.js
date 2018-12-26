'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const { userAccess } = controller;
  const apiV1Router = app.router.namespace('/api/v1');

  router.get('/', controller.home.index);

  // userAccess
  apiV1Router.post('/register', userAccess.register); // 注册
  apiV1Router.post('/login', userAccess.login); // 登录,
  apiV1Router.get('/logout', app.jwt, userAccess.logout); // 登出,
  apiV1Router.get('/current', app.jwt, userAccess.current); // 获取用户信息
  apiV1Router.put('/resetpsw', app.jwt, userAccess.resetPsw); // 修改密码

  // user
  // router.post('/api/user', controller.user.create)
  // router.delete('/api/user/:id', controller.user.destroy)
  // router.put('/api/user/:id', controller.user.update)
  // router.get('/api/user/:id', controller.user.show)
  // router.get('/api/user', controller.user.index)
  router.delete('/api/v1/user', controller.user.removes); // 同时删除多个用户
  router.resources('user', '/api/v1/user', app.jwt, controller.user);

  // sensitive 敏感词
  apiV1Router.post('/sensitivetype', controller.sensitive.type);
  router.delete('/api/v1/sensitive', controller.sensitive.removes); // 同时删除多个敏感词
  router.resources('sensitive', '/api/v1/sensitive', controller.sensitive);

};
