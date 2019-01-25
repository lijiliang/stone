'use strict';

module.exports = {
  // 用户信息
  user: {
    id: { type: 'number', description: 'id 唯一键' },
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
  // 接口
  interface: {
    id: { type: 'number', description: 'id 唯一键' },
    name: { type: 'string', description: '名称' },
    path: { type: 'string', description: '路径' },
    method: { type: 'string', description: '方法' },
    description: { type: 'string', description: '描述' },
    state: { type: 'string', description: '状态' },
    created_at: { type: 'string', description: '创建时间' },
    updated_at: { type: 'string', description: '更新时间' },
  },
  // 敏感词类型
  sensitiveType: {
    typeid: { type: 'number', description: '敏感词类型Id' },
    typename: { type: 'string', description: '敏感词名称' },
  },
  // 敏感词
  sensitive: {
    id: { type: 'number', description: 'id 唯一键' },
    typeid: { type: 'number', description: '敏感词类型Id' },
    content: { type: 'string', description: '敏感词' },
  },
};
