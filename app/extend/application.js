'use strict';
/*
外部可以通过 this.app.foo() 访问到这个方法
*/
module.exports = {
  foo(param) {
    // this 就是 app 对象，在其中可以调用  app 上的其它方法，或访问属性
    console.log(this, param);
    return this.config.api;
  },
};
