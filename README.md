# stone-api



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

## 开发日志

### 20181218
- 基础项目搭建
- egg-validate验证接口数据

### 20181221
- 用户注册接口
- 登录接口
- 完成 jwt 部分，并使用 jwt 记录用户 userid
- jwt 校验用户信息
  1. egg-jwt 
  2. 将 jwt 解密之后的内容挂载到 `ctx.state.user` 上，方便对用户进行标识
  3. 一定不要使用 jwt 存放敏感信息

### 20181226
- 日志登录接口
- 敏感词管理接口

### 20181227
- 图片验证码接口

[egg]: https://eggjs.org