'use strict';

module.exports = {
  recommendArticleCreateRequest: {
    recommendId: { type: 'number', required: true, description: '推荐位id', message: '推荐位id不能为空' },
    articleId: { type: 'number', required: true, description: '文章id', message: '文章id不能为空' },
    sort: { type: 'number', required: false, allowEmpty: true, description: '排序' },
  },
}
;
