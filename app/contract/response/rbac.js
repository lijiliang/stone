/*
 * @Author: Benson
 * @Date: 2019-01-25 10:21:48
 * @LastEditors: Benson
 * @LastEditTime: 2019-01-28 16:22:20
 * @Description: rbac 返回值
 */
'use strict';

module.exports = {
  // 角色与资源返回数据
  rbacQueryRestonse: {
    success: { type: 'boolean', required: true },
    message: { type: 'string' },
    data: { type: 'role_resource' },
  },
  // 角色与用户关联返回数据
  rbacRoleUserQueryRestonse: {
    success: { type: 'boolean', required: true },
    message: { type: 'string' },
    data: { type: 'role_user' },
  },
}
;
