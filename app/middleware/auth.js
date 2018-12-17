'use strict';

module.exports = (options, app) => {
  // 这是一个异步的方法
  return async function auth(ctx, next) {
    // 设置全局变量
    ctx.state.csrf = ctx.csrf;

    await next();
  };
};
