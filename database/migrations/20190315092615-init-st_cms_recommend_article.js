'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 推荐位关联文章 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER } = Sequelize;
    await queryInterface.createTable('st_cms_recommend_article', {
      recommendId: { type: INTEGER, primaryKey: true }, // 推荐位id
      articleId: { type: INTEGER, primaryKey: true }, // 文章id
      sort: { type: INTEGER, defaultValue: 0 }, // 排序
    }, {
      comment: '推荐位关联文章',
    });
  },
  // 在执行数据库降级时调用的函数，删除 st_cms_recommend_article 表
  down: async queryInterface => {
    await queryInterface.dropTable('st_cms_recommend_article');
  },
};
