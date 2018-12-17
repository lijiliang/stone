'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  /*
   * 根据userID查询users用户表下的所有数据(查询一条数据)
   * @param {String} userId
   */
  async find(userid) {
    const res = await this.app.mysql.get('users', { userid });
    return res;
  }
  /*
   * 查询全表
   */
  async findAll() {
    // 条件查询和结果定制
    const condition = {
      // where: { status: 'draft', author: ['author1', 'author2'] }, // WHERE 条件
      columns: [ 'userId', 'username', 'sex', 'abstract', 'updated_at' ], // 要查询的表字段
      orders: [[ 'updated_at' ], [ 'id', 'desc' ]], // 排序方式
      limit: 10, // 返回数据量
      offset: 0, // 数据偏移量
    };
    const res = await this.app.mysql.select('users', condition);
    return res;
  }
  /*
   * 插入一条记录
   * @param {Object} row 表结构数据
   */
  async add(row = {}) {
    const res = await this.app.mysql.insert('users', row);
    return res;
  }
  /*
   * 删除一条用户数据
   * @param {String} userid 当前用户Id
   */
  async delete(userid) {
    const res = await this.app.mysql.delete('users', { userid });
    return res;
  }
  /*
   * update 更新数据库记录
   * @param {Object} row 表结构数据
   */
  async update(row = {}, userid) {
    // const res = await this.app.mysql.update('users', params); // 修改数据，将会根据主键 ID 查找，并更新

    // 主键是自定义的 ID 名称
    const options = {
      where: {
        userid,
      },
    };
    const res = await this.app.mysql.update('users', row, options);
    return res;
  }
  /*
   * 自定义执行sql
   * @param {string} sql sql语句
   * @param {*} params
   */
  async query(sql, params) {
    const res = await this.app.mysql.query(sql, params);
    return res;
  }
}

module.exports = UserService;
