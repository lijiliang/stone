'use strict';

module.exports = {
  recommendCreateRequest: {
    title: { type: 'string', required: true, description: '标题', message: '标题不能为空' },
    code: { type: 'string', required: false, allowEmpty: true, description: '编码' },
    picPath: { type: 'string', required: false, allowEmpty: true, description: '图片路径' },
    orderBy: { type: 'string', required: false, allowEmpty: true, description: '排序方式' },
    enable: { type: 'boolean', required: false, allowEmpty: true, description: '是否启用' },
    isDeleted: { type: 'boolean', required: false, allowEmpty: true, description: '是否删除' },
    creator: { type: 'string', required: false, allowEmpty: true, description: '创建人' },
    modifier: { type: 'string', required: false, allowEmpty: true, description: '修改人' },
  },
}
;
