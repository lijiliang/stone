/*
 * @Author: Benson
 * @Date: 2018-12-27 18:29:45
 * @LastEditors: Benson
 * @LastEditTime: 2018-12-29 16:09:37
 * @Description: 文件上传
 */
'use strict';

const Controller = require('egg').Controller;

class UploadController extends Controller {

  // 七牛云上传单文件
  async create() {
    const ctx = this.ctx;
    // 获取文件流
    const stream = await ctx.getFileStream();
    // 上传文件到七牛
    const res = await ctx.service.upload._createQiniuFile(stream);
    // 文件响应
    ctx.returnBody(200, 'success', res);
  }

  // 获取所有用户(分页/模糊)
  async index() {
    const ctx = this.ctx;
    const res = await ctx.service.upload.index();
    ctx.returnBody(200, 'success', res);
  }

  // 删除单个文件
  async destroy() {
    const { ctx } = this;
    // 组装参数
    const { id } = ctx.params;
    const res = await ctx.service.upload.destroy(id);
    ctx.returnBody(200, 'success', res);
  }

  // 七牛云上传多文件
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
        // 上传文件到七牛
        const url = await ctx.service.upload._createQiniuFile(part);
        imgs.push(url);
      }
    }
    // 文件响应
    ctx.returnBody(200, 'success', {
      imgs,
    });
  }

  // 单文件上传 到本地
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

  // 多文件上传 到本地
  // https://github.com/eggjs/egg-multipart
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
