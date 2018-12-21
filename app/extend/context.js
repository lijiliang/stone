'use strict';

module.exports = {
  /**
   * 获取客户端内容
   * @param {Number} status 返回状态
   * @param {string} message 返回说明
   * @param {Object} data 内容
   */
  returnBody(status, message, data = {}) {
    this.status = status;
    this.body = {
      data,
      message,
      success: true,
    };
  },
};
