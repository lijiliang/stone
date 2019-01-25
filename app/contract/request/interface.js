'use strict';

module.exports = {
  interfaceCreateRequest: {
    name: { type: 'string', required: true, description: '名称', message: '名称不能为空' },
    path: { type: 'string', required: true, description: '路径', message: '路径不能为空' },
    method: { type: 'string', required: true, description: '方法', message: '方法不能为空' },
  },
}
;
