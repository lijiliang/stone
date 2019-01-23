'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 cms 栏目表 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, BOOLEAN } = Sequelize;
    await queryInterface.createTable('st_cms_category', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
      pid: { type: INTEGER }, // 上级栏目Id
      name: { type: STRING(30) }, // 栏目名称
      en_name: { type: STRING(30) }, // 英文栏目名称
      code: { type: STRING(30) }, // 编码
      route: { type: STRING(30) }, // 路由
      type: { type: STRING(30) }, // 类型：channel栏目、page单页、link外链'
      url: { type: STRING(150) }, // 外链
      articleid: { type: INTEGER(11) }, // 单页关联文章id
      image: { type: STRING(100) }, // 栏目图
      description: { type: STRING(100) }, // 描述
      meta_title: { type: STRING(50) }, // seo标题
      meta_keywords: { type: STRING(100) }, // seo关键词
      meta_description: { type: STRING(250) }, // seo描述
      sort: { INTEGER, defaultValue: 0 }, // 排序
      enable: { type: BOOLEAN, defaultValue: 1 }, // 是否启用
      isDeleted: { type: BOOLEAN, defaultValue: 0 }, // 是否删除
      created_at: { type: DATE }, // 创建时间
      updated_at: { type: DATE }, // 更新时间
      deleted_at: { type: DATE }, // 删除时间
    }, {
      freezeTableName: true, // 不自动将表名添加复数
      // 不删除数据库条目，但将新添加的属性deletedAt设置为当前日期（删除完成时）
      paranoid: true,
      comment: '文章栏目表',
    });
  },
  // 在执行数据库降级时调用的函数，删除 st_cms_category 表
  down: async queryInterface => {
    await queryInterface.dropTable('st_cms_category');
  },
};
