/*
 * @Author: Benson
 * @Date: 2018-12-28 18:25:56
 * @LastEditors: Benson
 * @LastEditTime: 2019-01-28 11:22:22
 * @Description: 文件上传 - 支持七牛云、本地
 */
'use strict';

const fs = require('fs');
const path = require('path');
const mkdirs = require('jm-mkdirs');
// 故名思意 异步二进制 写入流
const awaitWriteStream = require('await-stream-ready').write;
// 管道读入一个虫洞
const sendToWormhole = require('stream-wormhole');

const Service = require('egg').Service;

class UploadService extends Service {
  constructor(ctx) {
    super(ctx);
    this.attributes = [ 'id', 'key', 'url', 'mimeType', 'extname', 'size', 'created_at' ]; // 需要显示字段
  }

  // 创建七牛上传文件
  async _createQiniuFile(stream, size) {
    const { ctx } = this;
    // 自定义文件名
    const filename = ctx.helper.uuid() + path
      .extname(stream.filename)
      .toLocaleLowerCase();
    const res = await this.app.fullQiniu.uploadStream(`stone/${filename}`, stream);

    // 根据用户Id找出用户名
    // const _userid = ctx.state.user && ctx.state.user.data.userid;
    // let creator = '';
    // if (_userid) {
    //   const user = await this.ctx.model.User.findByIdWithUser(_userid);
    //   creator = user.username;
    // }

    // 上传到七牛云成功后写入一条数据到数据库
    if (res.ok) {
      const createInfo = {
        key: res.key,
        url: res.url,
        extname: path.extname(stream.filename),
        mimeType: stream.mimeType, // 文件类型
        size, // 文件大小
        ip: ctx.ip ? ctx.ip : '127.0.0.1', // ip地址
        // creator, // 上传者
      };
      console.log(createInfo);
      await ctx.service.upload.create(createInfo);
    }

    return res;
  }

  /**
   * 文件上传到七牛成功后，写记录到数据库
   * @param {Object} params {key: key, url: url链接, extname: 后缀名, mimeType: 文件类型, size: 文件大小}
   */
  async create(createInfo) {
    const { ctx } = this;
    const res = await ctx.model.Files.create(createInfo);
    return res;
  }

  // 获取所有图片
  async index() {
    // 当前页数：current; 每页条数：pageSize;  总数：total;
    const { ctx } = this;
    const { current, pageSize } = ctx.query;
    const _current = current ? current : 1; // 当前页数
    const _pageSize = pageSize ? pageSize : 10; // 每页条数
    const _offset = ((Number(_current)) - 1) * Number(_pageSize); // 偏移量

    const query = {
      attributes: this.attributes, // 需要显示字段
      limit: ctx.helper.toInt(_pageSize), // 条数限制
      offset: ctx.helper.toInt(_offset), // 起始位置 从0开始
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]], // 排序
    };

    const _data = await ctx.model.Files.findAndCountAll(query);

    // 返回整理后的数据
    const _list = _data.rows.map(e => {
      const jsonObject = Object.assign({}, e.dataValues);
      jsonObject.created_at = this.ctx.helper.formatTime(e.created_at);
      return jsonObject;
    });

    return {
      total: _data.count,
      curent: ctx.helper.toInt(_current),
      pageSize: ctx.helper.toInt(_pageSize),
      list: _list,
    };
  }

  // 删除单个文件
  async destroy(id) {
    const { ctx } = this;
    const _file = await ctx.model.Files.findById(id);
    if (!_file) {
      ctx.throw(422, '图片不存在');
    }
    // 删除七牛云上的数据
    const _res = await this.app.fullQiniu.delete(_file.key);

    if (_res.ok) {
      // 如果成功删除七牛云上的数据，同时将数据库的记录也删掉
      await _file.destroy();
    }
    return _res;
  }

  /**
   * 创建上传文件到本地
   * @param {stream} stream 传入流
   */
  async _createLocalFile(stream) {
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

module.exports = UploadService;
