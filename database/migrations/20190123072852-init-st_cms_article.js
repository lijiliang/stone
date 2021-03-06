'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 文章信息 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, BOOLEAN, TEXT } = Sequelize;
    await queryInterface.createTable('st_cms_article', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
      categoryid: { type: INTEGER }, // 栏目Id
      title: { type: STRING(50), allowNull: false }, // 标题
      subtitle: { type: STRING(50), defaultValue: '' }, // 副标题
      type: { type: STRING(10), defaultValue: '' }, // 文章类型:info资讯、img图片, page单页
      image: { type: STRING(100), defaultValue: '' }, // 图片
      thumbnil: { type: STRING(100), defaultValue: '' }, // 缩略图
      url: { type: STRING(150), defaultValue: '' }, // 外链
      tag: { type: STRING(50), defaultValue: '' }, // TAG
      intro: { type: STRING(200), defaultValue: '' }, // 简介
      content: { type: TEXT }, // 内容
      view_count: { type: INTEGER }, // 浏览数
      custom_params: { type: STRING(500), defaultValue: '' }, // 自定义参数
      start_time: { type: DATE }, // 开始时间
      end_time: { type: DATE }, // 结束时间
      description: { type: STRING(100), defaultValue: '' }, // 描述
      meta_title: { type: STRING(50), defaultValue: '' }, // seo标题
      meta_keywords: { type: STRING(100), defaultValue: '' }, // seo关键词
      meta_description: { type: STRING(250), defaultValue: '' }, // seo描述
      content_hidden: { type: STRING(1000), defaultValue: '' }, // seo内容隐藏域
      sort: { type: INTEGER, defaultValue: 0 }, // 排序
      enable: { type: BOOLEAN, defaultValue: true }, // 是否启用
      isDeleted: { type: BOOLEAN, defaultValue: false }, // 是否删除
      creator: { type: STRING(30), defaultValue: '' }, // 创建人
      modifier: { type: STRING(30), defaultValue: '' }, // 修改人
      created_at: { type: DATE }, // 创建时间
      updated_at: { type: DATE }, // 更新时间
      deleted_at: { type: DATE }, // 删除时间
    }, {
      freezeTableName: true, // 不自动将表名添加复数
      // 不删除数据库条目，但将新添加的属性deletedAt设置为当前日期（删除完成时）
      paranoid: true,
      comment: '文章信息表',
    });
  },
  // 在执行数据库降级时调用的函数，删除 st_cms_article 表
  down: async queryInterface => {
    await queryInterface.dropTable('st_cms_article');
  },
};
