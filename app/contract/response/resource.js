/*
 * @Author: Benson
 * @Date: 2019-01-25 10:21:48
 * @LastEditors: Benson
 * @LastEditTime: 2019-01-28 14:01:21
 * @Description: 资源管理 返回值
 */
'use strict';

module.exports = {
  // 分页
  resourcePagination: {
    current: { type: 'integer' },
    pageSize: { type: 'integer' },
    total: { type: 'integer' },
    list: { type: 'array', itemType: 'resource' },
  },
  resourceListRestonse: {
    success: { type: 'boolean', required: true },
    message: { type: 'string' },
    data: { type: 'resourcePagination' },
  },
  resourceQueryRestonse: {
    success: { type: 'boolean', required: true },
    message: { type: 'string' },
    data: { type: 'resource' },
  },
}
;
