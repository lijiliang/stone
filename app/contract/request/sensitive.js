'use strict';

module.exports = {
  // 创建敏感词类型
  sensitivetTypeCreateRequest: {
    typename: { type: 'string', required: true, message: '敏感词类型' },
  },
  sensitiveCreateRequest: {
    typeid: { type: 'number', required: true, message: 'id必须是数字类型' },
    content: { type: 'string', required: true, message: '敏感字不正确' },
  },
}
;
