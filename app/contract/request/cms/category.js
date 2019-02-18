'use strict';

module.exports = {
  categoryCreateRequest: {
    name: { type: 'string', required: true, description: '栏目名称', message: '栏目名称不能为空' },
    en_name: { type: 'string', required: false, allowEmpty: true, description: '英文栏目名称' },
    code: { type: 'string', required: false, allowEmpty: true, description: '编码' },
    route: { type: 'string', required: false, allowEmpty: true, description: '路由' },
    type: { type: 'string', required: true, description: '类型' },
    url: { type: 'string', required: false, allowEmpty: true, description: '外链' },
    articleid: { type: 'string', required: false, allowEmpty: true, description: '单页关联文章id' },
    image: { type: 'string', required: false, allowEmpty: true, description: '栏目图' },
    description: { type: 'string', required: false, allowEmpty: true, description: '描述' },
    meta_title: { type: 'string', required: false, allowEmpty: true, description: 'seo标题' },
    meta_keywords: { type: 'string', required: false, allowEmpty: true, description: 'seo关键词' },
    meta_description: { type: 'string', required: false, allowEmpty: true, description: 'seo描述' },
    sort: { type: 'number', required: false, allowEmpty: true, description: '排序' },
    enable: { type: 'boolean', required: false, allowEmpty: true, description: '是否锁定' },
  },
}
;
