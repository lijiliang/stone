'use strict';

module.exports = {
  // 角色与用户关联
  rbacRoleUserCreateRequest: {
    role_id: { type: 'number', required: true, description: '角色id', message: '角色不能为空' },
    user_id: { type: 'string', required: true, description: '用户id', message: '用户id不能为空' },
  },
  // 角色与资源关联
  rbacResourceCreateRequest: {
    role_id: { type: 'number', required: true, description: '角色id', message: '角色不能为空' },
    resource_id: { type: 'string', required: true, description: '资源id(数组)', message: '资源id不能为空' },
  },
}
;
