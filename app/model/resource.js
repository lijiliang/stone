/*
 * @Author: Benson
 * @Date: 2019-01-10 11:08:05
 * @LastEditors: Benson
 * @LastEditTime: 2019-01-28 14:28:02
 * @Description: 权限资源表模型
 */

'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize;
  const Resource = app.model.define('st_resource', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
    pid: { type: INTEGER }, // 父id 0标识为根节点
    pids: { type: STRING(100) }, // '当前资源的所有父节点id集合',
    path: { type: STRING(100), defaultValue: '' }, // 路径
    name: { type: STRING(20), defaultValue: '' }, // name
    title: { type: STRING(20), defaultValue: '' }, // 标题
    icon: { type: STRING(20), defaultValue: '' }, // 图标
    component: { type: STRING(20), defaultValue: '' }, // 组件
    componentPath: { type: STRING(100), defaultValue: '' }, // 组件路径
    type: { type: INTEGER, defaultValue: 1 }, // 类型，1:菜单; 2:功能
    sort: { type: INTEGER }, // 排序
    isLock: { type: BOOLEAN, defaultValue: false }, // 锁定
    permission: { type: STRING(20), defaultValue: '' }, // 权限标识
    state: { // 菜单状态 0：禁用； 1：启用
      type: INTEGER,
      defaultValue: 1, // 默认值
    },
    cache: { type: BOOLEAN, defaultValue: false }, // 缓存
    redirect: { type: STRING(100) }, // 重定向
    created_at: { type: DATE }, // 创建时间
    updated_at: { type: DATE }, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
    comment: '权限资源表',
  });

  return Resource;
}
;
