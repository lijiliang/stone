'use strict';

module.exports = {
  resourceCreateRequest: {
    title: { type: 'string', required: true, description: '标题', message: '标题不能为空' },
    path: { type: 'string', required: true, description: '路径', message: '路径不能为空' },
    component: { type: 'string', required: true, description: '组件', message: '组件不能为空' },
    componentPath: { type: 'string', required: false, allowEmpty: true, description: '组件路径' },
    icon: { type: 'string', required: false, allowEmpty: true, description: 'icon' },
    permission: { type: 'string', required: false, allowEmpty: true, description: '权限标识' },
    sort: { type: 'number', required: false, allowEmpty: true, description: '排序' },
    type: { type: 'number', required: false, allowEmpty: true, description: '类型' },
    isLock: { type: 'boolean', required: false, allowEmpty: true, description: '是否锁定' },
    cache: { type: 'boolean', required: false, allowEmpty: true, description: '缓存' },
    redirect: { type: 'string', required: false, allowEmpty: true, description: '重定向' },
  },
}
;
