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
  // 资源（菜单)
  resource: {
    id: { type: 'number', description: '资源id' },
    pid: { type: 'number', description: '父id' },
    pids: { type: 'number', description: '父id集合' },
    path: { type: 'string', description: '路径' },
    name: { type: 'string', description: 'name' },
    title: { type: 'string', description: '标题' },
    icon: { type: 'string', description: 'icon' },
    component: { type: 'string', description: '组件' },
    componentPath: { type: 'string', description: '组件路径' },
    type: { type: 'number', description: '类型，1:菜单; 2:功能' },
    sort: { type: 'number', description: '排序' },
    isLock: { type: 'Boolean', description: '是否锁定' },
    permission: { type: 'string', description: '权限标识' },
    cache: { type: 'string', description: '缓存' },
    redirect: { type: 'string', description: '重定向' },
  },
  // 角色
  role: {
    id: { type: 'number', description: 'id 唯一键' },
    name: { type: 'string', description: '角色名字' },
    code: { type: 'string', description: '角色标识' },
    description: { type: 'string', description: '描述' },
  },
  // 角色与资源关联
  role_resource: {
    id: { type: 'number', description: 'id 唯一键' },
    role_id: { type: 'number', description: '角色id' },
    resource_id: { type: 'string', description: '资源id' },
    resource_id_fe: { type: 'string', description: '资源id(前端专用)' },
  },
  // 角色与用户关联
  role_user: {
    id: { type: 'number', description: 'id 唯一键' },
    role_id: { type: 'number', description: '角色id' },
    user_id: { type: 'string', description: '用户Id' },
  },
  // cms 栏目
  category: {
    id: { type: 'number', description: '资源id' },
    pid: { type: 'number', description: '父id' },
    name: { type: 'string', description: '栏目名称' },
    en_name: { type: 'string', description: '英文栏目名称' },
    code: { type: 'string', description: '编码' },
    route: { type: 'string', description: '路由' },
    type: { type: 'string', description: '类型：channel栏目、page单页、link外链' },
    url: { type: 'string', description: '外链' },
    articleid: { type: 'number', description: '单页关联文章id' },
    image: { type: 'string', description: '栏目图' },
    description: { type: 'string', description: '描述' },
    meta_title: { type: 'string', description: 'seo标题' },
    meta_keywords: { type: 'string', description: 'seo关键词' },
    meta_description: { type: 'string', description: 'seo描述' },
    sort: { type: 'number', description: '排序' },
    enable: { type: 'Boolean', description: '是否启用' },
  },
  // cms 文章
  article: {
    id: { type: 'number', description: '记录Id' },
    categoryid: { type: 'number', description: '栏目Id' },
    title: { type: 'string', description: '标题' },
    subtitle: { type: 'string', description: '副标题' },
    type: { type: 'string', description: '文章类型' },
    image: { type: 'string', description: '图片' },
    thumbnil: { type: 'string', description: '缩略图' },
    url: { type: 'string', description: '外链' },
    tag: { type: 'string', description: 'TAG' },
    intro: { type: 'string', description: '简介' },
    content: { type: 'string', description: '内容' },
    view_count: { type: 'number', description: '浏览数' },
    custom_params: { type: 'string', description: '自定义参数' },
    start_time: { type: 'string', description: '开始时间' },
    end_time: { type: 'string', description: '结束时间' },
    description: { type: 'string', description: '描述' },
    meta_title: { type: 'string', description: 'seo标题' },
    meta_keywords: { type: 'string', description: 'seo关键词' },
    meta_description: { type: 'string', description: 'seo内容隐藏域' },
    sort: { type: 'number', description: '排序' },
    enable: { type: 'Boolean', description: '是否启用' },
    isDeleted: { type: 'Boolean', description: '是否删除' },
    creator: { type: 'string', description: '创建人' },
    modifier: { type: 'string', description: '修改人' },
  },
};
