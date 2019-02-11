/*
 * @Author: Benson
 * @Date: 2019-01-25 10:21:48
 * @LastEditors: Benson
 * @LastEditTime: 2019-02-11 16:40:58
 * @Description: 栏目管理 返回值
 */
'use strict';

module.exports = {
  // 分页
  categoryPagination: {
    current: { type: 'integer' },
    pageSize: { type: 'integer' },
    total: { type: 'integer' },
    list: { type: 'array', itemType: 'category' },
  },
  categoryListRestonse: {
    success: { type: 'boolean', required: true },
    message: { type: 'string' },
    data: { type: 'categoryPagination' },
  },
  categoryQueryRestonse: {
    success: { type: 'boolean', required: true },
    message: { type: 'string' },
    data: { type: 'category' },
  },
}
;
