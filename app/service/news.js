'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    // 主要获取新闻数据
    const list = [ '11', '222', '333' ];

    const userInfo = await this.service.user.getUserInfo();
    console.log(userInfo);
    return list;
  }
  async getNewList() {
    // 通过抓取接口返回数据
    // curl的方法可以获取远程的数据
    // http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1
    // http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=123
    const api = this.config.api + 'appapi.php?a=getPortalList&catid=20&page=1';
    const repsonse = await this.ctx.curl(api);
    // console.log(repsonse.data)  // 返回的是 Buffer 类型
    const data = JSON.parse(repsonse.data); // 把 Buffer 类型 转换对象
    // console.log(data.result);
    return data.result;
  }
  // 获取新闻详情
  async getNewsContent(aid) {
    // curl的方法可以获取远程的数据
    const api = this.config.api + `appapi.php?a=getPortalArticle&aid=${aid}`;
    const repsonse = await this.ctx.curl(api);
    // console.log(repsonse.data)  // 返回的是 Buffer 类型
    const data = JSON.parse(repsonse.data); // 把 Buffer 类型 转换对象
    // console.log(data.result);
    return data.result;
  }
}

module.exports = NewsService;
