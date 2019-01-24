'use strict';
const regrule = require('../../utils/regrule');
module.exports = {
  userAccessCreateRequest: {
    username: { type: 'string', required: true, description: '用户名', message: '用户名不能为空' },
    password: { type: 'string', format: regrule.regPassword, required: true, description: '用户密码', message: '密码不正确' },
    email: { type: 'string', format: regrule.regEmail, required: true, example: '1951828835@qq.com', description: '邮箱', message: '邮箱不正确' },
    code: { type: 'string', required: true, description: '验证码', message: '验证码不能为空' },
  },
  userAccessLoginRequest: {
    email: { type: 'string', format: regrule.regEmail, required: true, example: '1951828835@qq.com', description: '邮箱', message: '邮箱不正确' },
    password: { type: 'string', format: regrule.regPassword, required: true, description: '用户密码', message: '密码不正确' },
  },
  userAccessResetPswRequest: {
    email: { type: 'string', required: true, format: regrule.regEmail, description: '邮箱', message: '邮箱不正确' },
    oldpassword: { type: 'string', required: true, format: regrule.regPassword, description: '旧密码', message: '密码不正确' },
    newpassword: { type: 'string', required: true, format: regrule.regPassword, description: '新密码', message: '密码不正确' },
  },
}
;
