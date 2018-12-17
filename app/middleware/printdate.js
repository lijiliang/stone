'use strict';

// 一个中间件的写法
/*

options: 中间件的配置项，框架会将 app.config[${middlewareName}] 传递进来。
app: 当前应用 Application 的实例。

*/
module.exports = (options, app) => {

  // koa  app.use(function() {})

  console.log(options);
  // 返回一个异步的方法
  return async function printdate(ctx, next) {
    console.log(new Date());
    await next();
  };
};
