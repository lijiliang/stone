'use strict';

module.exports = {
  user: {
    id: { type: 'string', description: 'id 唯一键' },
    userid: { type: 'string', description: '用户id' },
    username: { type: 'string', description: '用户姓名' },
    email: { type: 'string', description: '邮箱' },
    mobile: { type: 'string', description: '手机号' },
    avatar: { type: 'string', description: '头像' },
    sex: { type: 'integer', description: '性别' },
    state: { type: 'string', description: '状态' },
    user_type: { type: 'string', description: '用户类型，1:admin ;2:会员' },
    last_login_ip: { type: 'string', description: '最后登录ip' },
    last_login_time: { type: 'string', description: '最后登录时间' },
  },

};
