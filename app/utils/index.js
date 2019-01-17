'use strict';

/*
 * 把扁平化的数据转为成结构化的数据
 * @param {Array} data 数组,扁平化数据
 * @param {Object} config 配置对象
 *  config: 配置对象
    id 数据里的 id，string 类型
    pid 数据里的父 id，string 类型
    children 生成结果中子节点的字段名，string 类型
    返回一个数组对象，里面可能包含多个树结构
   @return Object
 */
function transTreeData(data, config = {}) {
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
}

module.exports = {
  transTreeData,
}
;
