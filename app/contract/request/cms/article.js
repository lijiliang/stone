'use strict';

module.exports = {
  articleCreateRequest: {
    title: { type: 'string', required: true, description: '标题', message: '标题不能为空' },
    subtitle: { type: 'string', required: false, allowEmpty: true, description: '副标题' },
    type: { type: 'string', required: false, allowEmpty: true, description: '文章类型' },
    image: { type: 'string', required: false, allowEmpty: true, description: '图片' },
    thumbnil: { type: 'string', required: false, allowEmpty: true, description: '缩略图' },
    url: { type: 'string', required: false, allowEmpty: true, description: '外链' },
    tag: { type: 'string', required: false, allowEmpty: true, description: 'TAG' },
    intro: { type: 'string', required: false, allowEmpty: true, description: '简介' },
    content: { type: 'string', required: true, description: '内容' },
    view_count: { type: 'string', required: false, allowEmpty: true, description: '浏览数' },
    custom_params: { type: 'string', required: false, allowEmpty: true, description: '自定义参数' },
    start_time: { type: 'string', required: false, allowEmpty: true, description: '开始时间' },
    end_time: { type: 'string', required: false, allowEmpty: true, description: '结束时间' },
    description: { type: 'string', required: false, allowEmpty: true, description: '描述' },
    meta_title: { type: 'string', required: false, allowEmpty: true, description: 'seo标题' },
    meta_keywords: { type: 'string', required: false, allowEmpty: true, description: 'seo关键词' },
    meta_description: { type: 'string', required: false, allowEmpty: true, description: 'seo描述' },
    sort: { type: 'number', required: false, allowEmpty: true, description: '排序' },
    enable: { type: 'number', required: false, allowEmpty: true, description: '是否启用' },
    creator: { type: 'string', required: false, allowEmpty: true, description: '创建人' },
    modifier: { type: 'string', required: false, allowEmpty: true, description: '修改人' },
  },
}
;
