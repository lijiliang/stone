/*
 * @Author: Benson
 * @Date: 2019-01-25 10:21:48
 * @LastEditors: Benson
 * @LastEditTime: 2019-01-28 14:56:05
 * @Description: 角色管理 返回值
 */
'use strict';

module.exports = {
  // 分页
  rolePagination: {
    current: { type: 'integer' },
    pageSize: { type: 'integer' },
    total: { type: 'integer' },
    list: { type: 'array', itemType: 'role' },
  },
  roleListRestonse: {
    success: { type: 'boolean', required: true },
    message: { type: 'string' },
    data: { type: 'rolePagination' },
  },
  roleQueryRestonse: {
    success: { type: 'boolean', required: true },
    message: { type: 'string' },
    data: { type: 'role' },
  },
}
;
