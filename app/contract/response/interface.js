/*
 * @Author: Benson
 * @Date: 2019-01-25 10:21:48
 * @LastEditors: Benson
 * @LastEditTime: 2019-01-25 10:31:20
 * @Description: 接口管理 返回值
 */
'use strict';

module.exports = {
  // 分页
  interfacePagination: {
    current: { type: 'integer' },
    pageSize: { type: 'integer' },
    total: { type: 'integer' },
    list: { type: 'array', itemType: 'interface' },
  },
  interfaceListRestonse: {
    success: { type: 'boolean', required: true },
    message: { type: 'string' },
    data: { type: 'interfacePagination' },
  },
  interfaceQueryRestonse: {
    success: { type: 'boolean', required: true },
    message: { type: 'string' },
    data: { type: 'interface' },
  },
}
;
