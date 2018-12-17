'use strict';

// 可以在扩展里面引入第三方模块

/*
npm i silly-datetime --save
*/
const sd = require('silly-datetime');

module.exports = {
  formatTime(param) {
    // this 是 helper 对象，在其中可以调用其他 helper 方法
    // this.ctx => context 对
    // this.app => application 对象
    // 格式化日期
    return sd.format(new Date(param * 1000), 'YYYY-M-DD HH:mm');
  },
  getHelperData() {
    return '我是helper 方法';
  },
};
