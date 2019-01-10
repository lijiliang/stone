/*
 * @Author: Benson
 * @Date: 2019-01-10 11:08:05
 * @LastEditors: Benson
 * @LastEditTime: 2019-01-10 16:02:52
 * @Description: 权限资源表模型
 */

'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize;
  const Resource = app.model.define('st_resource', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
    pid: { type: INTEGER }, // 父id 0标识为根节点
    pids: { type: STRING(100) }, // '当前资源的所有父节点id集合',
    path: { type: STRING(100) }, // 路径
    name: { type: STRING(20) }, // name
    title: { type: STRING(20) }, // 标题
    icon: { type: STRING(20) }, // 图标
    component: { type: STRING(20) }, // 组件
    componentPath: { type: STRING(100) }, // 组件路径
    type: { type: STRING(2), defaultValue: '1' }, // 类型，1:菜单; 2:功能
    sort: { type: INTEGER }, // 排序
    isLock: { type: BOOLEAN, defaultValue: false }, // 锁定
    permission: { type: STRING(20) }, // 权限标识
    state: { // 菜单状态 0：禁用； 1：启用
      type: STRING(2),
      defaultValue: '1', // 默认值
    },
    cache: { type: BOOLEAN, defaultValue: false }, // 缓存
    created_at: { type: DATE }, // 创建时间
    updated_at: { type: DATE }, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
    comment: '权限资源表',
  });

  return Resource;
}
;
