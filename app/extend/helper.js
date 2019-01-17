'use strict';
const bcrypt = require('bcryptjs');
const sd = require('silly-datetime');
const uuidv4 = require('uuid/v4');

// function findChildNode(arrData, node) {
//   // console.log('node', node);
//   let ans = [];
//   for (let i = 0; i < arrData.length; i++) {
//     if (node.id === arrData[i].pid) {
//       ans.push(arrData[i]);
//       ans = ans.concat(findChildNode(arrData, arrData[i]));
//     }
//   }
//   return ans;
// }

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

  /*
  * 把扁平化的数据转为成结构化的数据
  * @param {Array} data 数组,扁平化数据
  * @param {Object} config 配置对象
  *  config: 配置对象
      id 数据里的 id，string 类型
      pid 数据里的父 id，string 类
      children 生成结果中子节点的字段名，string 类型
      返回一个数组对象，里面可能包含多个树结构
    @returns Object
  */
  transTreeData(data, config = {}) {
    const id = config.id || 'id';
    const pid = config.pid || 'pid';
    const children = config.children || 'children';
    const idMap = {};
    const jsonTree = [];
    data.forEach(function(v) {
      idMap[v[id]] = v;
    });
    data.forEach(function(v) {
      const parent = idMap[v[pid]];
      if (parent) {
        !parent[children] && (parent[children] = []);
        parent[children].push(v);
      } else {
        jsonTree.push(v);
      }
    });
    return jsonTree;
  },
  /*
   *根据节点找所有子孙节点
   https://segmentfault.com/q/1010000010645187
   * @param {Array} arrData 平行的Arr数据 [{id:1,pid:0,name:'name1'}, {....}]
   * @param {Object} node 一组对比数据  {id:1,pid:0,name:'name1'}
   * @returns 子孙节点的数组，数组为空即没有子孙节点
   */
  findChildNode(arrData, node) {
    let ans = [];
    for (let i = 0; i < arrData.length; i++) {
      if (node.id === arrData[i].pid) {
        ans.push(arrData[i]);
        ans = ans.concat(this.findChildNode(arrData, arrData[i]));
      }
    }
    return ans;
  },
  /*
   * 根据节点找所有父节点
   * @param {Array} arrData 平行的Arr数据 [{id:1,pid:0,name:'name1'}, {....}]
   * @param {Object} node 一组对比数据  {id:1,pid:0,name:'name1'}
   * @returns 父节点的数组，数组为空即没有父节点
   */
  findParentNode(arrData, node) {
    const ans = [];
    for (let i = 0; i < arrData.length; i++) {
      if (node.pid === arrData[i].id) {
        if (arrData[i].id === 0) {
          return arrData[i];
        }
        ans.push(arrData[i]);
        return ans.concat(this.findParentNode(arrData, arrData[i]));
      }
    }
  },
};
