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
  /*
   * 根据传过来的options取出匹配的数组id
   * @param {Array} list 列表对象数据 [{},{}]
   * @param {String} options 'role_id'
   * @returns 数组
   */
  findOptionsIds(list, options) {
    return list.reduce(function(r, item) {
      const _item = item.dataValues;
      for (const k in _item) {
        if (k === options) {
          // 将所有值转成字符串，再根据,号转成数组
          r.push(...('' + _item[k]).split(','));
        }
      }
      return r;
    }, []);
  },
  /*
   * 将路由数据转成前端可用的格式
   * @param {Arrar} list
   * list: [{{"path":"/system","name":"system","title":"系统设置","icon":"system","component":null,"componentPath":"/views/layout/Layout","cache":false,"redirect":"noredirect","children":{[...]}}]
   * @returns 转换后的数组
   */
  routeTransformData(list) {
    const _this = this;
    return list.reduce(function(r, item) {
      const temp = {};
      for (const k in item) {
        if (k === 'children') {
          if (item[k].length > 0) {
            temp[k] = _this.routeTransformData(item[k]); // 递归匿名方法
          }
        } else {
          const _meta = {};
          temp.path = item.path;
          // temp.component = item.componentPath;
          temp.component = item.component;
          temp.name = item.name;
          if (item.redirect) {
            temp.redirect = item.redirect;
          }
          // 配置属性
          _meta.title = item.name;
          if (item.icon) {
            _meta.icon = item.icon;
          }
          if (item.cache) {
            _meta.noCache = item.cache;
          }
          temp.meta = _meta;
        }
      }
      r.push(temp);
      return r;
    }, []);
  },
  /**
 * stream流文件转Buffer
 * https://www.codesky.me/archives/stream-to-buffer-transform.wind
 * Stream，中文叫做流，和我们平时充值信仰的那个 Steam 还是差了那么一点的。所谓流，是一种消费的模型，被消费完就木有了，所以如果我们需要重复使用，就得存下来
 * 可利用Buffer的length计算一个文件的大小
 * @param {stream} stream
 * @returns
 */
  streamToBuffer(stream) {
    return new Promise((resolve, reject) => {
      const buffers = [];
      stream.on('error', reject);
      stream.on('data', data => buffers.push(data));
      stream.on('end', () => resolve(Buffer.concat(buffers)));
    });
  },
};
