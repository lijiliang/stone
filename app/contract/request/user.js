'use strict';
const regrule = require('../../utils/regrule');
module.exports = {
  userCreateRequest: {
    username: { type: 'string', required: true, description: '用户名', message: '用户名不能为空' },
    password: { type: 'string', format: regrule.regPassword, required: true, description: '用户密码', message: '密码不正确' },
    email: { type: 'string', format: regrule.regEmail, required: true, example: '1951828835@qq.com', description: '邮箱', message: '邮箱不正确' },
    mobile: { type: 'string', required: false, allowEmpty: true, format: regrule.regPhone, description: '手机号', message: '手机号不正确' },
    sex: { type: 'number', required: false, allowEmpty: true, values: [ 0, 1, 2 ], description: '性别', message: '性别不正确' },
    user_type: { type: 'string', required: false, allowEmpty: true, values: [ '1', '2' ], example: '2', description: '用户类型，1:admin ;2:会员', message: '用户类型不正确' },
  },
  // 用户信息，密码可以为空
  userUpdateRequest: {
    userid: { type: 'string', required: true, description: '用户id', message: '用户id不能为空' },
    username: { type: 'string', required: true, description: '用户名', message: '用户名不能为空' },
    password: { type: 'string', format: regrule.regPassword, required: false, allowEmpty: true, description: '用户密码', message: '密码不正确' },
    email: { type: 'string', format: regrule.regEmail, required: true, example: '1951828835@qq.com', description: '邮箱', message: '邮箱不正确' },
    mobile: { type: 'string', required: false, allowEmpty: true, format: regrule.regPhone, description: '手机号', message: '手机号不正确' },
    sex: { type: 'number', required: false, allowEmpty: true, values: [ 0, 1, 2 ], description: '性别', message: '性别不正确' },
    user_type: { type: 'string', required: false, allowEmpty: true, values: [ '1', '2' ], example: '2', description: '用户类型，1:admin ;2:会员', message: '用户类型不正确' },
  },
  // 删除多个id
  userDeleteIdsRequest: {
    ids: { type: 'string' },
  },
}
;
