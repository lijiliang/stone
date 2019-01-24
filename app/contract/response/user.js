'use strict';

module.exports = {
  // 分页
  userPagination: {
    current: { type: 'integer' },
    pageSize: { type: 'integer' },
    total: { type: 'integer' },
    list: { type: 'array', itemType: 'user' },
  },
  userListRestonse: {
    success: { type: 'boolean', required: true },
    message: { type: 'string' },
    data: { type: 'userPagination' },
  },
  userQueryRestonse: {
    success: { type: 'boolean', required: true },
    message: { type: 'string' },
    data: { type: 'user' },
  },
}
;
