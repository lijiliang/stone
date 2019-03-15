'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 推荐位管理 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, BOOLEAN, STRING } = Sequelize;
    await queryInterface.createTable('st_cms_recommend', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
      title: { type: STRING(255) }, // 标题
      code: { type: STRING(20) }, // 编码
      picPath: { type: STRING(50) }, // 图片路径
      orderBy: { type: STRING(10) }, // '排序方式
      enable: { type: BOOLEAN, defaultValue: true }, // 是否启用
      isDeleted: { type: BOOLEAN, defaultValue: false }, // 是否删除
      creator: { type: STRING(30), defaultValue: '' }, // 创建人
      modifier: { type: STRING(30), defaultValue: '' }, // 修改人
      created_at: { type: DATE }, // 创建时间
      updated_at: { type: DATE }, // 更新时间
    }, {
      comment: '推荐位管理表',
    });
  },
  // 在执行数据库降级时调用的函数，删除 st_cms_recommend 表
  down: async queryInterface => {
    await queryInterface.dropTable('st_cms_recommend');
  },
};
