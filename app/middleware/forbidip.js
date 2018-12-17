'use strict';

module.exports = (options, app) => {
  // return async function forbidip(ctx, next) {
  //   var foridip = '127.0.0.1'; // 要屏掉的ip

  //   // 获取客户端的ip
  //   console.log(ctx.request.ip);

  //   if (ctx.request.ip == foridip) {
  //     ctx.status = 403;
  //     ctx.body = '您的ip已经无法访问本网站！';
  //   } else {
  //     await next();
  //   }
  // };

  // 这是一个异步的方法
  return async function forbidIp(ctx, next) {
    // 要屏掉的ip
    const forbidips = options.forbidips;

    // 获取客户端的ip
    const clientIP = ctx.request.ip;

    const hasIp = forbidips.some(function(val) {
      if (val == clientIP) {
        return true;
      }
    });

    if (hasIp) {
      ctx.status = 403;
      ctx.body = '您的ip已经无法访问本网站！';
    } else {
      await next();
    }
  };
};
