'use strict';

// had enabled by egg
// exports.static = true;

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

exports.routerPlus = {
  enable: true,
  package: 'egg-router-plus',
};

exports.validate = {
  enable: true,
  package: 'egg-validate',
};

exports.validator = {
  enable: true,
  package: 'egg-y-validator',
};

exports.jwt = {
  enable: true,
  package: 'egg-jwt',
}
;

// 七牛云上传
exports.fullQiniu = {
  enable: true,
  package: 'egg-full-qiniu',
};

exports.cors = {
  enable: true,
  package: 'egg-cors',
};
