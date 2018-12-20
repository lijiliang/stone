'use strict';

// 外部通过 this.ctx.request.foo()

module.exports = {
  foo() {
    console.log(this);
    return 'request';
  },
};
