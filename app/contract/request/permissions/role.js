'use strict';

module.exports = {
  roleCreateRequest: {
    name: { type: 'string', required: true, description: '角色名字', message: '标题不能为空' },
    code: { type: 'string', required: true, description: '角色标识' },
    description: { type: 'string', required: true, description: '描述' },
  },
}
;
