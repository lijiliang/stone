/*
 * @Author: Benson
 * @Date: 2018-12-27 18:29:45
 * @LastEditors: Benson
 * @LastEditTime: 2019-03-14 11:27:49
 * @Description: 文件上传
 */
'use strict';

const Controller = require('egg').Controller;

/**
 * @controller uploadfile 文件上传
 */
class UploadController extends Controller {

  /**
   * @summary 上传单文件到七牛云
   * @description 上传单文件到七牛云
   * @router post /api/v1/upload
   * @request formData file *file
   * @apikey
   * @response 200 baseResponseSuccess success
   */
  async create() {
    const ctx = this.ctx;
    // 获取文件流
    const stream = await ctx.getFileStream();

    // const _imgBuffer = await ctx.helper.streamToBuffer(stream);
    // const size = _imgBuffer.length;

    // 上传文件到七牛 size:是文件大小
    const res = await ctx.service.upload._createQiniuFile(stream);
    // 文件响应
    ctx.returnBody(200, 'success', res);
  }

  /**
   * @summary 上传多文件到七牛云
   * @description 上传多文件到七牛云
   * @router post /api/v1/uploads
   * @apikey
   * @request formData file *file1
   * @request formData file *file2
   * @response 200 baseResponseSuccess success
   */
  async qiniuMultipartUpload() {
    const ctx = this.ctx;
    const parts = ctx.multipart();
    let part;
    const imgs = [];
    while ((part = await parts()) != null) {
      if (part.length) {
        // arrays are busboy fields
      } else {
        if (!part.filename) {
          continue;
        }

        const _imgBuffer = await ctx.helper.streamToBuffer(part);
        const size = _imgBuffer.length;

        // 上传文件到七牛 size:是文件大小

        // 上传文件到七牛
        const url = await ctx.service.upload._createQiniuFile(part, size);
        imgs.push(url);
      }
    }
    // 文件响应
    ctx.returnBody(200, 'success', {
      imgs,
    });
  }

  /**
   * @summary 获取所有文件列表
   * @description 获取列表(分页/模糊/搜索)
   * @router get /api/v1/upload
   * @request query integer current eg:1 页码 默认 1
   * @request query integer pageSize eg:10 单页数量 默认 10
   * @response 200 baseResponseSuccess success
   */
  async index() {
    const ctx = this.ctx;
    const res = await ctx.service.upload.index();
    ctx.returnBody(200, 'success', res);
  }

  /**
   * @summary 删除单个文件
   * @description 删除单个文件
   * @router delete /api/v1/upload/{id}
   * @request path string *id
   * @response 200 baseResponseSuccess 删除成功
   */
  async destroy() {
    const { ctx } = this;
    // 组装参数
    const { id } = ctx.params;
    const res = await ctx.service.upload.destroy(id);
    ctx.returnBody(200, 'success', res);
  }

  /**
   * @summary 单文件上传 到本地
   * @description 单文件上传 到本地
   * @router post /api/v1/uploadlocal
   * @request formData file *file
   * @apikey
   * @response 200 baseResponseSuccess success
   */
  async uploadLoacl() {
    const ctx = this.ctx;
    // egg-multipart 已经帮我们处理文件二进制对象 node.js 和 php 的上传唯一的不同就是 ，php 是转移一个临时文件，node.js和其他语言（java c#） 一样操作文件流
    const stream = await ctx.getFileStream();

    const url = await ctx.service.upload._createLocalFile(stream);

    // 文件响应
    ctx.returnBody(200, 'success', {
      fileurl: url,
    });
  }

  // https://github.com/eggjs/egg-multipart
  /**
   * @summary 多文件上传 到本地
   * @description 多文件上传 到本地
   * @router post /api/v1/uploadlocals
   * @request formData file *file
   * @apikey
   * @response 200 baseResponseSuccess success
   */
  async multipartUploadLocal() {
    const { ctx } = this;
    const parts = ctx.multipart();
    let part;
    const imgs = [];
    while ((part = await parts()) != null) {
      if (part.length) {
        // arrays are busboy fields
      } else {
        if (!part.filename) {
          continue;
        }
        // otherwise, it's a stream
        // const result = await ctx.oss.put('multipart-test/' + part.filename, part);
        // console.log('multipart-test/' + part.filename, part);
        const url = await ctx.service.upload._createLocalFile(part);
        imgs.push(url);
      }
    }

    ctx.returnBody(200, 'success', {
      imgs,
    });
  }
}

module.exports = UploadController;
