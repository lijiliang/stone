'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 文件管理 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('st_files', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 记录Id
      key: { type: STRING(255) }, // KEY
      url: { type: STRING(255) }, // 文件路径
      mimeType: { type: STRING(50) }, // 文件类型
      extname: { type: STRING(10) }, // 文件后缀
      size: { type: INTEGER }, // 文件大小
      bucket: { type: STRING(20) }, // 所在空间
      directory: { type: STRING(50) }, // 所在目录
      ip: { type: STRING(50) }, // ip
      creator: { type: STRING(20) }, // 创建人
      state: { // 状态 0：禁用； 1：正常
        type: STRING(2),
        defaultValue: '1', // 默认值
      },
      created_at: { type: DATE }, // 创建时间
      updated_at: { type: DATE }, // 更新时间
    }, {
      comment: '文件管理管理表',
    });
  },
  // 在执行数据库降级时调用的函数，删除 st_files 表
  down: async queryInterface => {
    await queryInterface.dropTable('st_files');
  },
};
