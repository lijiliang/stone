'use strict';

module.exports = {
  // 分页
  sensitivePagination: {
    current: { type: 'integer' },
    pageSize: { type: 'integer' },
    total: { type: 'integer' },
    list: { type: 'array', itemType: 'sensitive' },
  },
  sensitiveTypeResponse: {
    success: { type: 'boolean', required: true },
    message: { type: 'string' },
    data: { type: 'sensitiveType' },
  },
  // 敏感词类型列表
  sensitiveTypeListResponse: {
    success: { type: 'boolean', required: true },
    message: { type: 'string' },
    data: { type: 'array', itemType: 'sensitiveType' },
  },
  // 敏感词列表
  sensitiveListResponse: {
    success: { type: 'boolean', required: true },
    message: { type: 'string' },
    data: { type: 'sensitivePagination' },
  },
  sensitiveQueryRestonse: {
    success: { type: 'boolean', required: true },
    message: { type: 'string' },
    data: { type: 'sensitive' },
  },
};
