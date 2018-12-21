'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  /**
   * 创建密码hash
   * @param {String} password 原字符串密码
   * @return {String} hash密码
   */
  createPasswordHash(password) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  },
  /**
   * 判断密码与hash是否对应
   * @param {String} password 密码
   * @param {String} hash 加密后的hash
   */
  hasPasswordHash(password, hash) {
    const hasPassword = bcrypt.compareSync(password, hash);
    return hasPassword;
  }
}