'use strict';

// 外部通过 this.ctx.request.foo()

module.exports = {
  foo(param) {
    console.log(this);
    return 'request';
  },
};
