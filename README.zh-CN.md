# stone-api



## 快速入门

<!-- 在此次添加使用文档 -->

如需进一步了解，参见 [egg 文档][egg]。

### 本地开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 部署

```bash
$ npm start
$ npm stop
```

### 单元测试

- [egg-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [egg 文档 - 单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。

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

### 20181228
- 上传文件
  1.单文件上传
  2.多文件上传
  3.七牛云单文件上传
  4.七牛云多文件上传
七牛云操作用了[egg-full-qiniu] 这个插件。

### 20181229
- 文件管理、删除功能

[egg]: https://eggjs.org
[egg-full-qiniu]: https://github.com/alex-my/egg-full-qiniu
