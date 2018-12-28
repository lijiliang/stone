/*
 * @Author: Benson
 * @Date: 2018-12-27 18:29:45
 * @LastEditors: Benson
 * @LastEditTime: 2018-12-28 14:01:10
 * @Description: 文件上传
 */
'use strict';

const Controller = require('egg').Controller;

const fs = require('fs');
const path = require('path');
const mkdirs = require('jm-mkdirs');
// const md5 = require('md5');
// 故名思意 异步二进制 写入流
const awaitWriteStream = require('await-stream-ready').write;
// 管道读入一个虫洞
const sendToWormhole = require('stream-wormhole');

class UploadController extends Controller {
  async index() {
    const ctx = this.ctx;
    // egg-multipart 已经帮我们处理文件二进制对象 node.js 和 php 的上传唯一的不同就是 ，php 是转移一个临时文件，node.js和其他语言（java c#） 一样操作文件流
    const stream = await ctx.getFileStream();

    const url = await this._createFile(stream);

    // 文件响应
    ctx.returnBody(200, 'success', {
      fileurl: url,
    });
  }

  // 多文件上传
  // https://github.com/eggjs/egg-multipart
  async multipartUpload() {
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
        const url = await this._createFile(part);
        imgs.push(url);
      }
    }

    ctx.returnBody(200, 'success', {
      imgs,
    });
  }

  /**
   * 创建一个文件
   * @param {stream} stream 传入流
   */
  async _createFile(stream) {
    const { ctx } = this;
    // 新建一个文件名 利用md5,同名的文件会被替换掉
    // const filename = md5(stream.filename) + path
    //   .extname(stream.filename)
    //   .toLocaleLowerCase();

    // 新建一个文件名
    const filename = ctx.helper.uuid() + path
      .extname(stream.filename)
      .toLocaleLowerCase();

    // 文件生成绝对路径
    const uploadsPath = 'app/public/uploads/' + new Date().getFullYear() + new Date().getMonth();

    // 检测目录是否存在，不存在则创建
    if (!fs.existsSync(uploadsPath)) {
      mkdirs.sync(uploadsPath);
    }

    const target = path.join(this.config.baseDir, uploadsPath, filename);

    // 生成一个文件写入 文件流
    const writeStream = fs.createWriteStream(target);

    try {
      await awaitWriteStream(stream.pipe(writeStream));
    } catch (err) {
      // 如果出现错误，关闭管道
      await sendToWormhole(stream);
      throw err;
    }

    const url = '/public/uploads/' + new Date().getFullYear() + new Date().getMonth() + '/' + filename;
    return url;
  }
}

module.exports = UploadController;
