'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test', controller.home.test);
  router.get('/admin', controller.admin.index);
  router.get('/news', controller.news.index);
  
  router.get('/newslist/:id', controller.news.newslist);

  router.get('/newshome', controller.news.home);
  router.get('/newscontent', controller.news.content);

  router.get('/homepost', controller.home.homepost);
  router.post('/add', controller.home.add);
  router.get('/loginout', controller.home.loginOut);
};
