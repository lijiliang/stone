'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const { userAccess } = controller;
  const apiV1Router = app.router.namespace('/api/v1');
  // const apiAdminV1Router = app.router.namespace('/api/admin/v1');

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
  router.delete('/api/v1/user', app.jwt, controller.user.removes); // 同时删除多个用户
  router.resources('user', '/api/v1/user', app.jwt, controller.user);

  // sensitive 敏感词
  apiV1Router.post('/sensitivetype', controller.sensitive.type);
  apiV1Router.get('/sensitivetype', controller.sensitive.typeList);
  router.delete('/api/v1/sensitive', controller.sensitive.removes); // 同时删除多个敏感词
  router.resources('sensitive', '/api/v1/sensitive', controller.sensitive);

  // logs 登录日志
  apiV1Router.get('/logs', app.jwt, controller.logs.index);

  // 验证码
  apiV1Router.get('/captcha', controller.captcha.getcode);

  // 上传图片
  apiV1Router.post('/uploadlocal', app.jwt, controller.upload.uploadLoacl); // 上传单文件到本地
  apiV1Router.post('/uploadlocals', app.jwt, controller.upload.multipartUploadLocal); // 上传多文件到本地
  apiV1Router.post('/uploads', app.jwt, controller.upload.qiniuMultipartUpload); // 上传多文件到七牛云
  apiV1Router.post('/upload', app.jwt, controller.upload.create);
  apiV1Router.get('/upload', app.jwt, controller.upload.index);
  apiV1Router.delete('/upload/:id', app.jwt, controller.upload.destroy);

  // 接口管理
  router.resources('interface', '/api/v1/interface', app.jwt, controller.interface);
  router.delete('/api/v1/interface', app.jwt, controller.interface.removes); // 同时删除多个敏感词

  // 角色管理
  router.resources('role', '/api/admin/v1/role', app.jwt, controller.permissions.role);
  router.delete('/api/admin/v1/role', app.jwt, controller.permissions.role.removes); // 同时删除多个角色


  // 角色与用户关联
  router.post('/api/admin/v1/roleuser', app.jwt, controller.permissions.rbac.svaeRoleUser);
  // 获取角色与资源关联列表
  router.get('/api/admin/v1/roleresources/:id', app.jwt, controller.permissions.rbac.getRoleResources);
  // 保存角色与资源关联
  router.post('/api/admin/v1/saveresources', app.jwt, controller.permissions.rbac.saveRoleResource);

  // 资源管理
  router.resources('resource', '/api/admin/v1/resource', app.jwt, controller.permissions.resource);
  router.get('/api/admin/v1/menu', app.jwt, controller.permissions.resource.menu); // 当前用户所能访问的资源(菜单)

  // cms 栏目管理
  router.resources('category', '/api/admin/v1/category', app.jwt, controller.cms.category);

};
