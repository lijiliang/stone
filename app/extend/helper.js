'use strict';
const bcrypt = require('bcryptjs');
const sd = require('silly-datetime');
const uuidv4 = require('uuid/v4');

module.exports = {
  /**
   * 创建密码hash
   * @param {String} password 原字符串密码
   * @return {String} hash密码
   */
  createPasswordHash(password) {
    const salt = bcrypt.genSaltSync(10); // 盐
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  },
  /*
   * 判断密码与hash是否对应
   * @param {String} password 密码
   * @param {String} hash 加密后的hash
   */
  hasPasswordHash(password, hash) {
    const hasPassword = bcrypt.compareSync(password, hash);
    return hasPassword;
  },
  // 格式化时间
  formatTime(time) {
    if (!time) {
      return null;
    }
    return sd.format(time, 'YYYY-MM-DD HH:mm:ss');
  },
  // 生成uuid
  uuid() {
    return uuidv4().replace(/-/g, '');
  },
  // 转数字
  toInt(str) {
    if (typeof str === 'number') return str;
    if (!str) return str;
    return parseInt(str, 10) || 0;
  },
}
;
