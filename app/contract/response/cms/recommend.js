/*
 * @Author: Benson
 * @Date: 2019-03-20 10:21:48
 * @LastEditors: Benson
 * @LastEditTime: 2019-03-20 11:22:30
 * @Description: 推荐位管理 返回值
 */
'use strict';

module.exports = {
  // 分页
  recommendPagination: {
    current: { type: 'integer' },
    pageSize: { type: 'integer' },
    total: { type: 'integer' },
    list: { type: 'array', itemType: 'recommend' },
  },
  recommendListRestonse: {
    success: { type: 'boolean', required: true },
    message: { type: 'string' },
    data: { type: 'recommendPagination' },
  },
  recommendQueryRestonse: {
    success: { type: 'boolean', required: true },
    message: { type: 'string' },
    data: { type: 'recommend' },
  },
}
;
