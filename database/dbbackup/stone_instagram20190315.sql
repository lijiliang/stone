/*
 Navicat MySQL Data Transfer

 Source Server         : 本机
 Source Server Type    : MySQL
 Source Server Version : 80013
 Source Host           : localhost:3306
 Source Schema         : stone_instagram

 Target Server Type    : MySQL
 Target Server Version : 80013
 File Encoding         : 65001

 Date: 15/03/2019 17:56:56
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for SequelizeMeta
-- ----------------------------
DROP TABLE IF EXISTS `SequelizeMeta`;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of SequelizeMeta
-- ----------------------------
BEGIN;
INSERT INTO `SequelizeMeta` VALUES ('20181225032549-init-st_users.js');
INSERT INTO `SequelizeMeta` VALUES ('20181225032606-init-st_logs.js');
INSERT INTO `SequelizeMeta` VALUES ('20181225032616-init-st_sensitive.js');
INSERT INTO `SequelizeMeta` VALUES ('20181226030838-init-st_sensitive_type.js');
INSERT INTO `SequelizeMeta` VALUES ('20181228100926-init-st_files.js.js');
INSERT INTO `SequelizeMeta` VALUES ('20190108082319-init-st_interface.js');
INSERT INTO `SequelizeMeta` VALUES ('20190110075513-init-resource.js');
INSERT INTO `SequelizeMeta` VALUES ('20190110075526-init-role_resource.js');
INSERT INTO `SequelizeMeta` VALUES ('20190110075533-init-role.js');
INSERT INTO `SequelizeMeta` VALUES ('20190110075538-init-role_user.js');
INSERT INTO `SequelizeMeta` VALUES ('20190123072644-init-st_cms_category.js');
INSERT INTO `SequelizeMeta` VALUES ('20190123072852-init-st_cms_article.js');
COMMIT;

-- ----------------------------
-- Table structure for st_cms_article
-- ----------------------------
DROP TABLE IF EXISTS `st_cms_article`;
CREATE TABLE `st_cms_article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoryid` int(11) DEFAULT NULL,
  `title` varchar(50) COLLATE utf8_bin NOT NULL,
  `subtitle` varchar(50) COLLATE utf8_bin DEFAULT '',
  `type` varchar(10) COLLATE utf8_bin DEFAULT '',
  `image` varchar(100) COLLATE utf8_bin DEFAULT '',
  `thumbnil` varchar(100) COLLATE utf8_bin DEFAULT '',
  `url` varchar(150) COLLATE utf8_bin DEFAULT '',
  `tag` varchar(50) COLLATE utf8_bin DEFAULT '',
  `intro` varchar(200) COLLATE utf8_bin DEFAULT '',
  `content` text COLLATE utf8_bin,
  `view_count` int(11) DEFAULT NULL,
  `custom_params` varchar(500) COLLATE utf8_bin DEFAULT '',
  `start_time` datetime DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  `description` varchar(100) COLLATE utf8_bin DEFAULT '',
  `meta_title` varchar(50) COLLATE utf8_bin DEFAULT '',
  `meta_keywords` varchar(100) COLLATE utf8_bin DEFAULT '',
  `meta_description` varchar(250) COLLATE utf8_bin DEFAULT '',
  `content_hidden` varchar(1000) COLLATE utf8_bin DEFAULT '',
  `sort` int(11) DEFAULT '0',
  `enable` tinyint(1) DEFAULT '1',
  `isDeleted` tinyint(1) DEFAULT '0',
  `creator` varchar(30) COLLATE utf8_bin DEFAULT '',
  `modifier` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='文章信息表';

-- ----------------------------
-- Records of st_cms_article
-- ----------------------------
BEGIN;
INSERT INTO `st_cms_article` VALUES (1, 3, '良好生态环境是最普惠的民生福祉dsf', '测试副标题12345', 'info', '', '', '', '', '', '<p>asdfasdfasdfasdfsadfasdfsadfsadf</p>\n<p>asdfasdfasdfasdfsadfsadfasdf<br />asdfsadfasdfasdfsadfsadfsadfsdafasdfasdfasdf<br />asdfsadf</p>\n<p>sadfsadfsadfsadfasdfasdfsadfsadfsadfsadfsadf</p>\n<p>asdfasdfasdfasdfadsf</p>\n<p>asdfasdfasd</p>\n<p>asdfsadf</p>\n<p>asdfsadfsasafd</p>', NULL, '{\"eventTime\":\"8月-29-星期三\",\"eventInfo\":\"2時至4時 ⋅ 上海体验中心 ⋅ 名额有限 先报先得\"}', NULL, NULL, '', 'seo标题', '', '', '', 0, 1, 0, 'Bli', 'admin', '2019-01-07 11:38:49', '2019-03-14 17:27:53', NULL);
INSERT INTO `st_cms_article` VALUES (4, 10, '关于我们', '添加副标题', 'page', 'http://img1.sucaiweb.com/stone/7b0c1a0476fc4c88ad6a1cfedb9110e0.jpeg', 'http://img1.sucaiweb.com/stone/419f22be1a7140b6938d3e016837ffcd.png', '', '好吧，测试', '模压在', '<p><img class=\"wscnph\" src=\"http://img1.sucaiweb.com/stone/e9607690d66d40c29b6bb6630484795f.png\" />123450654</p>\n<p>sdfasfds</p>\n<p><img class=\"wscnph\" src=\"http://img1.sucaiweb.com/stone/18e59d5ed5f94abca1b3fa37ed914ed2.png\" /></p>\n<p><img src=\"http://img1.sucaiweb.com/stone/697e8944c9654f6f8384636e1fe4c5be.png\" alt=\"\" width=\"200\" height=\"200\" /></p>\n<p><img class=\"wscnph\" src=\"data:image/png;base64,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\" /></p>\n<p><img src=\"http://img1.sucaiweb.com/stone/adcb4bdf2f43494fa1b1aa3b5cbd604f.png\" alt=\"\" /></p>\n<p>&nbsp;</p>', NULL, '{\"sdf\":\"水电费\"}', '2019-03-07 18:13:58', '2019-03-29 18:14:00', '', 'seo标题', 'seo关键字', 'seo描述', '', 0, 1, 0, '', 'admin', '2019-03-08 16:05:46', '2019-03-14 17:21:15', NULL);
INSERT INTO `st_cms_article` VALUES (5, 11, '顶起sdaf茜模压', '这是一个副标题', 'page', 'http://img1.sucaiweb.com/stone/92fbf967f0f3451983c58ee915850b19.png', 'http://img1.sucaiweb.com/stone/5bbb357ee4ba4286a7741383e82f1a83.png', '', '', '', '<p><img class=\"wscnph\" src=\"http://img1.sucaiweb.com/stone/73e1e146e6b341af839ef2000865a776.png\" /></p>\n<p>sadfsadf</p>', NULL, '{\"sdf\":\"水电费\"}', '2019-03-07 00:00:00', '2021-03-27 00:00:00', '', '标题', '关键字', '描述', '', 0, 1, 0, '', 'admin', '2019-03-08 16:07:56', '2019-03-15 09:30:23', NULL);
INSERT INTO `st_cms_article` VALUES (7, 3, 'asdfsadfsad', 'asdfsaf', 'info', '', '', '', '', '', '<p><img class=\"wscnph\" src=\"http://img1.sucaiweb.com/stone/2f285ea544e8486ba99d49d0ebc1e8f9.png\" />asdfsadfsadfsadfasd<span style=\"text-decoration: line-through;\"><span style=\"text-decoration: underline;\">fsadf</span></span></p>\n<p>&nbsp;</p>\n<p><strong>test asdfsdsa</strong></p>', NULL, '{\"test\":\"米亚\",\"dddd\":\"顶顶顶顶\",\"cccc\":\"啛啛喳喳\"}', '2019-03-11 15:59:36', '2019-03-11 15:59:38', '', '', '', '', '', 1, 1, 0, '', 'admin', '2019-03-11 15:59:38', '2019-03-14 14:58:04', NULL);
INSERT INTO `st_cms_article` VALUES (9, 3, '顶起sdaf模压', '', 'info', '', '', '', '', '', '<p>茜sadfsadsas sadfsadsas sadfsad</p>', NULL, '{}', NULL, '2019-03-11 18:30:49', '', '', '', '', '', 1, 1, 0, '', '', '2019-03-11 18:31:03', '2019-03-11 18:31:03', NULL);
INSERT INTO `st_cms_article` VALUES (11, 3, '顶起sdaf模压', '', 'info', '', '', '', '', '', '<p>茜sadfsadsas sadfsadsas sadfsad</p>', NULL, '{\"dd\":\"大大大声\"}', NULL, NULL, '', '', '', '', '', 1, 1, 0, '', '', '2019-03-11 18:31:35', '2019-03-11 18:31:35', NULL);
INSERT INTO `st_cms_article` VALUES (13, 3, '公平正义是民众对法治的最高期待', '', 'info', '', '', '', '', '导语：防范和纠正冤假错案，是公平正义最直接，也是最鲜明的体现，人民群众抱以最高的关注和期待。', '<p>3月12日，两高工作报告再次成为人们关注的焦点。在纠防冤错案件上，检察机关、审判机关都交出了一份颇具分量的答卷。</p>\n<p>比如，检察机关对发现的冤错案件及时提出抗诉、再审检察建议。最高人民检察院提出再审检察建议的&ldquo;李锦莲故意杀人案&rdquo;&ldquo;邹俊敏贩卖毒品案&rdquo;均得到改判。紧盯有案不立、有罪未究和不当立案、越权管辖等问题，其中，对认为确有错误的刑事裁判提出抗诉8504件，法院已改判、发回重审5244 件，同比分别上升7.2%和8.4%。</p>\n<div>\n<p><img src=\"https://inews.gtimg.com/newsapp_bt/0/8098004671/1000\" alt=\"周强作最高人民法院工作报告\" />周强作最高人民法院工作报告</p>\n</div>\n<div>\n<p><img src=\"https://inews.gtimg.com/newsapp_bt/0/8106689851/1000\" alt=\"张军作最高人民检察院工作报告\" />张军作最高人民检察院工作报告</p>\n</div>', NULL, '{\"自定义参数1\":\"参数value1\"}', NULL, NULL, '', '公平正义是民众对法治的最高期待', 'seo关键', 'seo描述', '', 1, 1, 0, '', 'admin', '2019-03-13 15:31:19', '2019-03-15 15:13:24', NULL);
INSERT INTO `st_cms_article` VALUES (14, 3, '测试添加者12345', '', 'info', '', '', '', '', '', '<p><img class=\"wscnph\" src=\"http://img1.sucaiweb.com/stone/1bfb9831d55a486aa5483f3d53f97dde.png\" />&nbsp;sadsas sd<img class=\"wscnph\" src=\"http://img1.sucaiweb.com/stone/d0ed87e9c399476aba685cbd370e7e20.png\" /><img class=\"wscnph\" src=\"http://img1.sucaiweb.com/stone/eca73c88622f4c5d8100303b6d245e67.png\" /></p>', NULL, '{\"大\":\"大\"}', NULL, NULL, '', '', '', '', '', 1, 1, 0, 'admin', 'admin', '2019-03-13 16:01:53', '2019-03-14 17:28:54', NULL);
INSERT INTO `st_cms_article` VALUES (16, 3, '樭345678o', '', 'info', '', '', '', '', '', '<p>asdfasdfasdf模压柑基本面</p>', NULL, '{}', NULL, NULL, '', '', '', '', '', 1, 1, 0, 'admin', '', '2019-03-14 18:09:19', '2019-03-14 18:09:19', NULL);
INSERT INTO `st_cms_article` VALUES (17, 3, '枯萎', '', 'info', '', '', '', '', '', '<p>模压asdf</p>', NULL, '{}', NULL, NULL, '', '', '', '', '', 1, 1, 0, 'admin', '', '2019-03-14 18:09:27', '2019-03-14 18:09:27', NULL);
INSERT INTO `st_cms_article` VALUES (19, 3, '模压模压', '', 'info', '', '', '', '', '', '<p>模压</p>', NULL, '{}', NULL, NULL, '', '', '', '', '', 1, 1, 0, 'admin', '', '2019-03-15 14:58:11', '2019-03-15 14:58:11', NULL);
INSERT INTO `st_cms_article` VALUES (20, 3, 'sadf12345678dsfasdf', '', 'info', '', '', '', '', '', '<p>asdfasdf</p>\n<p><img class=\"wscnph\" src=\"http://img1.sucaiweb.com/stone/6b2611f6c6264f5dbdeec991e08ebd78.png\" /></p>', NULL, '{}', NULL, NULL, '', '', '', '', '', 1, 0, 0, 'admin', 'admin', '2019-03-15 15:00:22', '2019-03-15 15:11:12', NULL);
INSERT INTO `st_cms_article` VALUES (21, 3, '测试编辑', '', 'info', 'http://img1.sucaiweb.com/stone/eaec880170eb41af822316b9d3ae6fca.png', '', '', '', '', '<p>sadfasdfasfd</p>', NULL, '{}', NULL, NULL, '', '', '', '', '', 1, 1, 0, 'admin', 'admin', '2019-03-15 15:05:52', '2019-03-15 15:08:36', NULL);
INSERT INTO `st_cms_article` VALUES (23, 3, 'sadf1234567', '', 'info', '', '', '', '', '', '<p>1234567</p>', NULL, '{}', NULL, NULL, '', '', '', '', '', 1, 1, 0, 'admin', 'admin', '2019-03-15 15:06:36', '2019-03-15 15:07:04', NULL);
COMMIT;

-- ----------------------------
-- Table structure for st_cms_category
-- ----------------------------
DROP TABLE IF EXISTS `st_cms_category`;
CREATE TABLE `st_cms_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) DEFAULT NULL,
  `name` varchar(30) COLLATE utf8_bin DEFAULT '',
  `en_name` varchar(30) COLLATE utf8_bin DEFAULT '',
  `code` varchar(30) COLLATE utf8_bin DEFAULT '',
  `route` varchar(30) COLLATE utf8_bin DEFAULT '',
  `type` varchar(30) COLLATE utf8_bin DEFAULT '',
  `url` varchar(150) COLLATE utf8_bin DEFAULT '',
  `articleid` int(11) DEFAULT NULL,
  `image` varchar(100) COLLATE utf8_bin DEFAULT '',
  `description` varchar(100) COLLATE utf8_bin DEFAULT '',
  `meta_title` varchar(50) COLLATE utf8_bin DEFAULT '',
  `meta_keywords` varchar(100) COLLATE utf8_bin DEFAULT '',
  `meta_description` varchar(250) COLLATE utf8_bin DEFAULT '',
  `sort` int(11) DEFAULT '0',
  `enable` tinyint(1) DEFAULT '1',
  `isDeleted` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='文章栏目表';

-- ----------------------------
-- Records of st_cms_category
-- ----------------------------
BEGIN;
INSERT INTO `st_cms_category` VALUES (1, 0, '公司简介', '', 'topMap', 'company', 'channel', '', NULL, 'https://www.baidu.com/img/bd_logo1.png', '描述', 'seo标题', 'seo，关键字', 'seo描述在asdf顶起', 0, 1, 0, '2019-02-18 16:51:38', '2019-03-08 17:46:33');
INSERT INTO `st_cms_category` VALUES (3, 0, '新闻中心', '', 'topMap', 'news', 'channel', '', NULL, 'http://img1.sucaiweb.com/stone/9584adace31843c88eee31dd4cc7c5c2.png', '', '新闻', '关键字', '新闻栏目描述', 0, 1, 0, '2019-02-18 17:39:52', '2019-03-14 17:35:02');
INSERT INTO `st_cms_category` VALUES (10, 1, '关于我们', '', '', '', 'page', '', 4, '', '', '', '', '', 0, 1, 0, '2019-03-08 16:05:46', '2019-03-08 16:05:46');
INSERT INTO `st_cms_category` VALUES (11, 1, '再试一个单页', 'pagedd', '', 'pageid', 'page', '', 5, '', '', 'seo', '', '', 1, 1, 0, '2019-03-08 16:07:56', '2019-03-15 16:03:29');
INSERT INTO `st_cms_category` VALUES (12, 3, '测试', '', '', '', 'channel', '', NULL, 'http://img1.sucaiweb.com/stone/61c562cd29d14842813c0d8bd6f8e853.png', '', '基本面', 'seo关键字', '', 0, 1, 0, '2019-03-15 15:56:36', '2019-03-15 15:59:40');
INSERT INTO `st_cms_category` VALUES (13, 0, '公司产品', '', 'topMap', '', 'channel', '', NULL, 'http://img1.sucaiweb.com/stone/89efd223b118452b95797d293ed36e4e.png', '', 'seo', 'seo', 'seo', 0, 1, 0, '2019-03-15 15:57:50', '2019-03-15 16:00:07');
COMMIT;

-- ----------------------------
-- Table structure for st_files
-- ----------------------------
DROP TABLE IF EXISTS `st_files`;
CREATE TABLE `st_files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `key` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `url` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `mimeType` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `extname` varchar(10) COLLATE utf8_bin DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `bucket` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `directory` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `ip` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `creator` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `state` varchar(2) COLLATE utf8_bin DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='文件管理管理表';

-- ----------------------------
-- Records of st_files
-- ----------------------------
BEGIN;
INSERT INTO `st_files` VALUES (1, 'stone/73e1e146e6b341af839ef2000865a776.png', 'http://img1.sucaiweb.com/stone/73e1e146e6b341af839ef2000865a776.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 15:03:51', '2019-03-14 15:03:51');
INSERT INTO `st_files` VALUES (2, 'stone/d0ed87e9c399476aba685cbd370e7e20.png', 'http://img1.sucaiweb.com/stone/d0ed87e9c399476aba685cbd370e7e20.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 15:07:01', '2019-03-14 15:07:01');
INSERT INTO `st_files` VALUES (3, 'stone/eca73c88622f4c5d8100303b6d245e67.png', 'http://img1.sucaiweb.com/stone/eca73c88622f4c5d8100303b6d245e67.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 15:07:06', '2019-03-14 15:07:06');
INSERT INTO `st_files` VALUES (4, 'stone/18e59d5ed5f94abca1b3fa37ed914ed2.png', 'http://img1.sucaiweb.com/stone/18e59d5ed5f94abca1b3fa37ed914ed2.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 15:13:39', '2019-03-14 15:13:39');
INSERT INTO `st_files` VALUES (5, 'stone/dae05b6d36344d1d969483b680c4c866.png', 'http://img1.sucaiweb.com/stone/dae05b6d36344d1d969483b680c4c866.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 15:17:51', '2019-03-14 15:17:51');
INSERT INTO `st_files` VALUES (6, 'stone/148bf340cf0d4c6eada113c85c675dd2.png', 'http://img1.sucaiweb.com/stone/148bf340cf0d4c6eada113c85c675dd2.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 15:17:56', '2019-03-14 15:17:56');
INSERT INTO `st_files` VALUES (7, 'stone/288195b87e704d129288bddcf563eb8c.png', 'http://img1.sucaiweb.com/stone/288195b87e704d129288bddcf563eb8c.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 15:18:01', '2019-03-14 15:18:01');
INSERT INTO `st_files` VALUES (8, 'stone/e9607690d66d40c29b6bb6630484795f.png', 'http://img1.sucaiweb.com/stone/e9607690d66d40c29b6bb6630484795f.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 15:20:30', '2019-03-14 15:20:30');
INSERT INTO `st_files` VALUES (9, 'stone/df922242bbda4d299d6aaef487e2e796.jpg', 'http://img1.sucaiweb.com/stone/df922242bbda4d299d6aaef487e2e796.jpg', 'image/jpeg', 'jpg', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 15:49:26', '2019-03-14 15:49:26');
INSERT INTO `st_files` VALUES (10, 'stone/6967b4cca12c4fc084f387b3669f308b.jpg', 'http://img1.sucaiweb.com/stone/6967b4cca12c4fc084f387b3669f308b.jpg', 'image/jpeg', 'jpg', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 15:50:51', '2019-03-14 15:50:51');
INSERT INTO `st_files` VALUES (11, 'stone/ba39e216b68a4f6aaea49eb869546243.jpg', 'http://img1.sucaiweb.com/stone/ba39e216b68a4f6aaea49eb869546243.jpg', 'image/jpeg', 'jpg', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 15:53:01', '2019-03-14 15:53:01');
INSERT INTO `st_files` VALUES (12, 'stone/5f96bb4e884146d48791b87ca5f30fc5.jpg', 'http://img1.sucaiweb.com/stone/5f96bb4e884146d48791b87ca5f30fc5.jpg', 'image/jpeg', 'jpg', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 15:53:35', '2019-03-14 15:53:35');
INSERT INTO `st_files` VALUES (13, 'stone/361dd7f48db84fbc849d909bd454c959.jpg', 'http://img1.sucaiweb.com/stone/361dd7f48db84fbc849d909bd454c959.jpg', 'image/jpeg', 'jpg', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 15:55:18', '2019-03-14 15:55:18');
INSERT INTO `st_files` VALUES (14, 'stone/e8101c7705334dfca31f71c6aad82732.png', 'http://img1.sucaiweb.com/stone/e8101c7705334dfca31f71c6aad82732.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 15:57:03', '2019-03-14 15:57:03');
INSERT INTO `st_files` VALUES (15, 'stone/d361b8717b4346509e878a9a7037ab92.png', 'http://img1.sucaiweb.com/stone/d361b8717b4346509e878a9a7037ab92.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 15:57:33', '2019-03-14 15:57:33');
INSERT INTO `st_files` VALUES (16, 'stone/0706ae3dfd264a7ca9e568aa8d32c6ed.png', 'http://img1.sucaiweb.com/stone/0706ae3dfd264a7ca9e568aa8d32c6ed.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 15:57:49', '2019-03-14 15:57:49');
INSERT INTO `st_files` VALUES (17, 'stone/2822fa18fcd149878df311959bb21687.png', 'http://img1.sucaiweb.com/stone/2822fa18fcd149878df311959bb21687.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 15:58:41', '2019-03-14 15:58:41');
INSERT INTO `st_files` VALUES (18, 'stone/3aaa709a274b4c20a8bdcabe8b1af686.png', 'http://img1.sucaiweb.com/stone/3aaa709a274b4c20a8bdcabe8b1af686.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 15:59:00', '2019-03-14 15:59:00');
INSERT INTO `st_files` VALUES (19, 'stone/375bdc48cdec4ccbafe2973b896bdfe9.png', 'http://img1.sucaiweb.com/stone/375bdc48cdec4ccbafe2973b896bdfe9.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 15:59:47', '2019-03-14 15:59:47');
INSERT INTO `st_files` VALUES (20, 'stone/18bdcd504e0245f1a6025bc804eefce3.png', 'http://img1.sucaiweb.com/stone/18bdcd504e0245f1a6025bc804eefce3.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 16:00:56', '2019-03-14 16:00:56');
INSERT INTO `st_files` VALUES (21, 'stone/97f7f57ce2ba488291092fac33798cc5.png', 'http://img1.sucaiweb.com/stone/97f7f57ce2ba488291092fac33798cc5.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 16:01:30', '2019-03-14 16:01:30');
INSERT INTO `st_files` VALUES (22, 'stone/ba136e8d42bd43b599acc3c2567d3398.png', 'http://img1.sucaiweb.com/stone/ba136e8d42bd43b599acc3c2567d3398.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 16:01:58', '2019-03-14 16:01:58');
INSERT INTO `st_files` VALUES (23, 'stone/53fc466d4f374cd1bbf3508e9f5cff17.png', 'http://img1.sucaiweb.com/stone/53fc466d4f374cd1bbf3508e9f5cff17.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 16:07:19', '2019-03-14 16:07:19');
INSERT INTO `st_files` VALUES (24, 'stone/88c35793951a4dd3b71f14aacb3aa72b.png', 'http://img1.sucaiweb.com/stone/88c35793951a4dd3b71f14aacb3aa72b.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 16:10:11', '2019-03-14 16:10:11');
INSERT INTO `st_files` VALUES (25, 'stone/1eb5b00fbe0d4aeabecb784d605d3301.png', 'http://img1.sucaiweb.com/stone/1eb5b00fbe0d4aeabecb784d605d3301.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 16:10:17', '2019-03-14 16:10:17');
INSERT INTO `st_files` VALUES (26, 'stone/2b969486a0ec4294b979d293c0b891ee.png', 'http://img1.sucaiweb.com/stone/2b969486a0ec4294b979d293c0b891ee.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 16:10:54', '2019-03-14 16:10:54');
INSERT INTO `st_files` VALUES (27, 'stone/c31124fe506a4ea7ad8b6deea20148a2.png', 'http://img1.sucaiweb.com/stone/c31124fe506a4ea7ad8b6deea20148a2.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 16:15:13', '2019-03-14 16:15:13');
INSERT INTO `st_files` VALUES (28, 'stone/0051d58d47ca4840aff3020951e97bf4.png', 'http://img1.sucaiweb.com/stone/0051d58d47ca4840aff3020951e97bf4.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 16:18:18', '2019-03-14 16:18:18');
INSERT INTO `st_files` VALUES (29, 'stone/7de382e778204322ba383cfeca9989cf.png', 'http://img1.sucaiweb.com/stone/7de382e778204322ba383cfeca9989cf.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 16:21:07', '2019-03-14 16:21:07');
INSERT INTO `st_files` VALUES (30, 'stone/3d53e873754d443c8e40357b2f9fb546.png', 'http://img1.sucaiweb.com/stone/3d53e873754d443c8e40357b2f9fb546.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 16:22:09', '2019-03-14 16:22:09');
INSERT INTO `st_files` VALUES (31, 'stone/29d0ecfdaab342abbf4df27e78ce0a14.png', 'http://img1.sucaiweb.com/stone/29d0ecfdaab342abbf4df27e78ce0a14.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 16:23:35', '2019-03-14 16:23:35');
INSERT INTO `st_files` VALUES (32, 'stone/fa5b16187f1149f7917fbbde8c1c0781.png', 'http://img1.sucaiweb.com/stone/fa5b16187f1149f7917fbbde8c1c0781.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 16:26:18', '2019-03-14 16:26:18');
INSERT INTO `st_files` VALUES (33, 'stone/5847757e63964c7a8cdd30a4e13d66e9.png', 'http://img1.sucaiweb.com/stone/5847757e63964c7a8cdd30a4e13d66e9.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 16:26:49', '2019-03-14 16:26:49');
INSERT INTO `st_files` VALUES (34, 'stone/947cf3c06a9d4755aba6b76c4ba8022c.png', 'http://img1.sucaiweb.com/stone/947cf3c06a9d4755aba6b76c4ba8022c.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 16:27:15', '2019-03-14 16:27:15');
INSERT INTO `st_files` VALUES (35, 'stone/31363f60edc34bad813c0933cc8fbf77.png', 'http://img1.sucaiweb.com/stone/31363f60edc34bad813c0933cc8fbf77.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 16:29:37', '2019-03-14 16:29:37');
INSERT INTO `st_files` VALUES (36, 'stone/4977bf09811243b7a2e8aec1b08f4f78.png', 'http://img1.sucaiweb.com/stone/4977bf09811243b7a2e8aec1b08f4f78.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 16:29:46', '2019-03-14 16:29:46');
INSERT INTO `st_files` VALUES (37, 'stone/087f021eb5f94d129ecbb69b38b5782a.png', 'http://img1.sucaiweb.com/stone/087f021eb5f94d129ecbb69b38b5782a.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 16:38:17', '2019-03-14 16:38:17');
INSERT INTO `st_files` VALUES (38, 'stone/000aba7add2a4f92a3178bf33a59f022.png', 'http://img1.sucaiweb.com/stone/000aba7add2a4f92a3178bf33a59f022.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 16:40:46', '2019-03-14 16:40:46');
INSERT INTO `st_files` VALUES (39, 'stone/cf782738fe31426ca8e44c9b4f96dd50.png', 'http://img1.sucaiweb.com/stone/cf782738fe31426ca8e44c9b4f96dd50.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 16:41:07', '2019-03-14 16:41:07');
INSERT INTO `st_files` VALUES (40, 'stone/05579307444f4c2c86637f419c5d0a23.png', 'http://img1.sucaiweb.com/stone/05579307444f4c2c86637f419c5d0a23.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 16:43:46', '2019-03-14 16:43:46');
INSERT INTO `st_files` VALUES (41, 'stone/d0c4784012074084b00b4eb415eb49b5.png', 'http://img1.sucaiweb.com/stone/d0c4784012074084b00b4eb415eb49b5.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 16:44:15', '2019-03-14 16:44:15');
INSERT INTO `st_files` VALUES (42, 'stone/611e8dc9b4f040e099242034b43cf624.png', 'http://img1.sucaiweb.com/stone/611e8dc9b4f040e099242034b43cf624.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 16:47:37', '2019-03-14 16:47:37');
INSERT INTO `st_files` VALUES (43, 'stone/62a979a271b94be6a88b4e81f62d0de6.jpg', 'http://img1.sucaiweb.com/stone/62a979a271b94be6a88b4e81f62d0de6.jpg', 'image/jpeg', 'jpg', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 16:49:30', '2019-03-14 16:49:30');
INSERT INTO `st_files` VALUES (44, 'stone/a51a7595658c4f00bf59fe6d192bb1a3.png', 'http://img1.sucaiweb.com/stone/a51a7595658c4f00bf59fe6d192bb1a3.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 16:52:27', '2019-03-14 16:52:27');
INSERT INTO `st_files` VALUES (45, 'stone/e5b32ab4f71246fda08133f930278e0d.png', 'http://img1.sucaiweb.com/stone/e5b32ab4f71246fda08133f930278e0d.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 17:09:29', '2019-03-14 17:09:29');
INSERT INTO `st_files` VALUES (46, 'stone/5bbb357ee4ba4286a7741383e82f1a83.png', 'http://img1.sucaiweb.com/stone/5bbb357ee4ba4286a7741383e82f1a83.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 17:11:35', '2019-03-14 17:11:35');
INSERT INTO `st_files` VALUES (47, 'stone/92fbf967f0f3451983c58ee915850b19.png', 'http://img1.sucaiweb.com/stone/92fbf967f0f3451983c58ee915850b19.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 17:11:45', '2019-03-14 17:11:45');
INSERT INTO `st_files` VALUES (48, 'stone/2c3d20f48a87475b89a4bd3bc264e615.png', 'http://img1.sucaiweb.com/stone/2c3d20f48a87475b89a4bd3bc264e615.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 17:12:35', '2019-03-14 17:12:35');
INSERT INTO `st_files` VALUES (49, 'stone/419f22be1a7140b6938d3e016837ffcd.png', 'http://img1.sucaiweb.com/stone/419f22be1a7140b6938d3e016837ffcd.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 17:12:43', '2019-03-14 17:12:43');
INSERT INTO `st_files` VALUES (50, 'stone/d5976dd8a6834c0d8a2445f3bedee23c.png', 'http://img1.sucaiweb.com/stone/d5976dd8a6834c0d8a2445f3bedee23c.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 17:16:08', '2019-03-14 17:16:08');
INSERT INTO `st_files` VALUES (51, 'stone/4a710d1760e64e9bbfb6d5ff76dbf8fd.png', 'http://img1.sucaiweb.com/stone/4a710d1760e64e9bbfb6d5ff76dbf8fd.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 17:16:15', '2019-03-14 17:16:15');
INSERT INTO `st_files` VALUES (52, 'stone/7b0c1a0476fc4c88ad6a1cfedb9110e0.jpeg', 'http://img1.sucaiweb.com/stone/7b0c1a0476fc4c88ad6a1cfedb9110e0.jpeg', 'image/jpeg', 'jpeg', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 17:20:50', '2019-03-14 17:20:50');
INSERT INTO `st_files` VALUES (53, 'stone/495c90b3372846978e77603e2739809a.png', 'http://img1.sucaiweb.com/stone/495c90b3372846978e77603e2739809a.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 17:27:04', '2019-03-14 17:27:04');
INSERT INTO `st_files` VALUES (54, 'stone/1bfb9831d55a486aa5483f3d53f97dde.png', 'http://img1.sucaiweb.com/stone/1bfb9831d55a486aa5483f3d53f97dde.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 17:28:50', '2019-03-14 17:28:50');
INSERT INTO `st_files` VALUES (55, 'stone/19b40d7a0ba341d9a7ec4be2f486dab0.png', 'http://img1.sucaiweb.com/stone/19b40d7a0ba341d9a7ec4be2f486dab0.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 17:33:47', '2019-03-14 17:33:47');
INSERT INTO `st_files` VALUES (56, 'stone/9584adace31843c88eee31dd4cc7c5c2.png', 'http://img1.sucaiweb.com/stone/9584adace31843c88eee31dd4cc7c5c2.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-14 17:34:56', '2019-03-14 17:34:56');
INSERT INTO `st_files` VALUES (57, 'stone/6b2611f6c6264f5dbdeec991e08ebd78.png', 'http://img1.sucaiweb.com/stone/6b2611f6c6264f5dbdeec991e08ebd78.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-15 15:02:04', '2019-03-15 15:02:04');
INSERT INTO `st_files` VALUES (58, 'stone/eaec880170eb41af822316b9d3ae6fca.png', 'http://img1.sucaiweb.com/stone/eaec880170eb41af822316b9d3ae6fca.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-15 15:08:33', '2019-03-15 15:08:33');
INSERT INTO `st_files` VALUES (59, 'stone/8e02b9b7537347d1b15d29d72c2b42c4.png', 'http://img1.sucaiweb.com/stone/8e02b9b7537347d1b15d29d72c2b42c4.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-15 15:49:10', '2019-03-15 15:49:10');
INSERT INTO `st_files` VALUES (60, 'stone/ce50a17fa368476f9d16353ee57d55c4.png', 'http://img1.sucaiweb.com/stone/ce50a17fa368476f9d16353ee57d55c4.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-15 15:49:20', '2019-03-15 15:49:20');
INSERT INTO `st_files` VALUES (61, 'stone/e33176b8e8af4ed6b5cd6514d582f700.png', 'http://img1.sucaiweb.com/stone/e33176b8e8af4ed6b5cd6514d582f700.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-15 15:49:30', '2019-03-15 15:49:30');
INSERT INTO `st_files` VALUES (62, 'stone/096c1eedd3bb417ca40904160c932811.png', 'http://img1.sucaiweb.com/stone/096c1eedd3bb417ca40904160c932811.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-15 15:49:39', '2019-03-15 15:49:39');
INSERT INTO `st_files` VALUES (63, 'stone/afb267de097047408219e975188f69f2.png', 'http://img1.sucaiweb.com/stone/afb267de097047408219e975188f69f2.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-15 15:56:04', '2019-03-15 15:56:04');
INSERT INTO `st_files` VALUES (64, 'stone/ede744abfe314fdbadeaaa76b23fe62a.png', 'http://img1.sucaiweb.com/stone/ede744abfe314fdbadeaaa76b23fe62a.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-15 15:57:09', '2019-03-15 15:57:09');
INSERT INTO `st_files` VALUES (65, 'stone/8a30ec41f65146c49408b7434b878441.png', 'http://img1.sucaiweb.com/stone/8a30ec41f65146c49408b7434b878441.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-15 15:57:48', '2019-03-15 15:57:48');
INSERT INTO `st_files` VALUES (66, 'stone/61c562cd29d14842813c0d8bd6f8e853.png', 'http://img1.sucaiweb.com/stone/61c562cd29d14842813c0d8bd6f8e853.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-15 15:59:37', '2019-03-15 15:59:37');
INSERT INTO `st_files` VALUES (67, 'stone/89efd223b118452b95797d293ed36e4e.png', 'http://img1.sucaiweb.com/stone/89efd223b118452b95797d293ed36e4e.png', 'image/png', 'png', NULL, NULL, NULL, '127.0.0.1', 'admin', '1', '2019-03-15 16:00:04', '2019-03-15 16:00:04');
COMMIT;

-- ----------------------------
-- Table structure for st_interface
-- ----------------------------
DROP TABLE IF EXISTS `st_interface`;
CREATE TABLE `st_interface` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `path` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `method` varchar(12) COLLATE utf8_bin DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `state` varchar(2) COLLATE utf8_bin DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='接口管理表';

-- ----------------------------
-- Records of st_interface
-- ----------------------------
BEGIN;
INSERT INTO `st_interface` VALUES (4, 'f册接口12', '/api/v1/registerd', 'post', '这是接口描述', '1', '2019-01-08 17:15:49', '2019-01-08 17:15:49');
INSERT INTO `st_interface` VALUES (6, '接口管理', '/api/v1/interface', 'get', '获取接口列表、支持模糊和分页查询', '1', '2019-01-09 11:34:36', '2019-01-09 11:34:36');
INSERT INTO `st_interface` VALUES (7, '接口管理', '/api/v1/interface', 'get', '获取接口列表、支持模糊和分页查询', '1', '2019-01-09 11:34:37', '2019-01-09 11:34:37');
INSERT INTO `st_interface` VALUES (8, '接口管理', '/api/v1/interface', 'get', '获取接口列表、支持模糊和分页查询', '1', '2019-01-09 11:34:38', '2019-01-09 11:34:38');
INSERT INTO `st_interface` VALUES (9, '接口管理', '/api/v1/interface', 'get', '获取接口列表、支持模糊和分页查询', '1', '2019-01-09 11:34:39', '2019-01-09 11:34:39');
INSERT INTO `st_interface` VALUES (10, '接口管理', '/api/v1/interface', 'delete', '获取接口列表、支持模糊和分页查询', '1', '2019-01-09 11:43:36', '2019-01-09 11:43:36');
INSERT INTO `st_interface` VALUES (11, '接口管理', '/api/v1/interface', 'get', '获取接口列表、支持模糊和分页查询', '1', '2019-01-09 11:43:37', '2019-01-09 11:43:37');
INSERT INTO `st_interface` VALUES (12, '接口管理', '/api/v1/interface', 'get', '获取接口列表、支持模糊和分页查询', '1', '2019-01-09 11:43:38', '2019-01-09 11:43:38');
INSERT INTO `st_interface` VALUES (13, '接口管理', '/api/v1/interface', 'get', '获取接口列表、支持模糊和分页查询', '1', '2019-01-09 11:43:39', '2019-01-09 11:43:39');
INSERT INTO `st_interface` VALUES (17, '接口管理', '/api/v1/interface', 'get', '获取接口列表、支持模糊和分页查询', '1', '2019-01-09 11:43:42', '2019-01-09 11:43:42');
INSERT INTO `st_interface` VALUES (19, '接口管理', '/api/v1/interface', 'get', '获取接口列表、支持模糊和分页查询', '1', '2019-01-09 11:43:43', '2019-01-09 11:43:43');
INSERT INTO `st_interface` VALUES (23, '1接口管理', '/api/v1/interface', 'get', '获取接口列表、支持模糊和分页查询', '1', '2019-01-09 11:44:03', '2019-01-09 11:44:03');
INSERT INTO `st_interface` VALUES (24, '24接口管理241234', '/api/v1/interface', 'get', '获取接口列表、支持模糊和分页查询', '1', '2019-01-09 11:44:04', '2019-01-09 15:26:09');
INSERT INTO `st_interface` VALUES (26, '泓', '/api/v2/admin', 'post', 'zxvV', '1', '2019-01-10 11:33:30', '2019-01-10 11:33:30');
COMMIT;

-- ----------------------------
-- Table structure for st_logs
-- ----------------------------
DROP TABLE IF EXISTS `st_logs`;
CREATE TABLE `st_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(60) COLLATE utf8_bin NOT NULL,
  `content` varchar(255) COLLATE utf8_bin NOT NULL,
  `last_login_ip` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `last_login_time` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='用户日志管理表';

-- ----------------------------
-- Records of st_logs
-- ----------------------------
BEGIN;
INSERT INTO `st_logs` VALUES (1, 'Benson', '登录成功', '127.0.0.1', '2018-12-27 10:25:33', '2018-12-27 10:25:33', '2018-12-27 10:25:33');
INSERT INTO `st_logs` VALUES (2, 'Benson', '登录成功', '127.0.0.1', '2018-12-28 14:04:05', '2018-12-28 14:04:05', '2018-12-28 14:04:05');
INSERT INTO `st_logs` VALUES (3, 'Benson', '登录成功', '127.0.0.1', '2018-12-29 15:35:11', '2018-12-29 15:35:11', '2018-12-29 15:35:11');
INSERT INTO `st_logs` VALUES (4, 'Benson', '登录成功', '127.0.0.1', '2019-01-02 12:28:28', '2019-01-02 12:28:28', '2019-01-02 12:28:28');
INSERT INTO `st_logs` VALUES (5, '李', '登录成功', '127.0.0.1', '2019-01-02 18:09:57', '2019-01-02 18:09:57', '2019-01-02 18:09:57');
INSERT INTO `st_logs` VALUES (6, 'admin', '登录成功', '127.0.0.1', '2019-01-02 18:12:47', '2019-01-02 18:12:47', '2019-01-02 18:12:47');
INSERT INTO `st_logs` VALUES (7, 'admin', '登录成功', '127.0.0.1', '2019-01-02 18:29:19', '2019-01-02 18:29:19', '2019-01-02 18:29:19');
INSERT INTO `st_logs` VALUES (8, 'admin', '登录成功', '127.0.0.1', '2019-01-02 18:30:31', '2019-01-02 18:30:31', '2019-01-02 18:30:31');
INSERT INTO `st_logs` VALUES (9, 'admin', '登录成功', '127.0.0.1', '2019-01-02 18:30:38', '2019-01-02 18:30:38', '2019-01-02 18:30:38');
INSERT INTO `st_logs` VALUES (10, 'admin', '登录成功', '127.0.0.1', '2019-01-02 18:30:39', '2019-01-02 18:30:39', '2019-01-02 18:30:39');
INSERT INTO `st_logs` VALUES (11, 'admin', '登录成功', '127.0.0.1', '2019-01-02 18:30:40', '2019-01-02 18:30:40', '2019-01-02 18:30:40');
INSERT INTO `st_logs` VALUES (12, 'admin', '登录成功', '127.0.0.1', '2019-01-02 18:30:50', '2019-01-02 18:30:50', '2019-01-02 18:30:50');
INSERT INTO `st_logs` VALUES (13, 'admin', '登录成功', '127.0.0.1', '2019-01-02 18:31:36', '2019-01-02 18:31:36', '2019-01-02 18:31:36');
INSERT INTO `st_logs` VALUES (14, 'admin', '登录成功', '127.0.0.1', '2019-01-03 09:48:33', '2019-01-03 09:48:33', '2019-01-03 09:48:33');
INSERT INTO `st_logs` VALUES (15, 'admin', '登录成功', '127.0.0.1', '2019-01-03 09:49:08', '2019-01-03 09:49:08', '2019-01-03 09:49:08');
INSERT INTO `st_logs` VALUES (16, 'admin', '登录成功', '127.0.0.1', '2019-01-03 09:49:52', '2019-01-03 09:49:52', '2019-01-03 09:49:52');
INSERT INTO `st_logs` VALUES (17, 'admin', '登录成功', '127.0.0.1', '2019-01-03 09:50:16', '2019-01-03 09:50:16', '2019-01-03 09:50:16');
INSERT INTO `st_logs` VALUES (18, 'admin', '登录成功', '127.0.0.1', '2019-01-03 09:51:04', '2019-01-03 09:51:04', '2019-01-03 09:51:04');
INSERT INTO `st_logs` VALUES (19, 'admin', '登录成功', '127.0.0.1', '2019-01-03 09:51:20', '2019-01-03 09:51:20', '2019-01-03 09:51:20');
INSERT INTO `st_logs` VALUES (20, 'admin', '登录成功', '127.0.0.1', '2019-01-03 09:51:27', '2019-01-03 09:51:27', '2019-01-03 09:51:27');
INSERT INTO `st_logs` VALUES (21, 'admin', '登录成功', '127.0.0.1', '2019-01-03 09:53:56', '2019-01-03 09:53:56', '2019-01-03 09:53:56');
INSERT INTO `st_logs` VALUES (22, 'admin', '登录成功', '127.0.0.1', '2019-01-03 09:55:36', '2019-01-03 09:55:36', '2019-01-03 09:55:36');
INSERT INTO `st_logs` VALUES (23, 'admin', '登录成功', '127.0.0.1', '2019-01-03 09:55:56', '2019-01-03 09:55:56', '2019-01-03 09:55:56');
INSERT INTO `st_logs` VALUES (24, 'admin', '登录成功', '127.0.0.1', '2019-01-03 09:57:30', '2019-01-03 09:57:30', '2019-01-03 09:57:30');
INSERT INTO `st_logs` VALUES (25, 'admin', '登录成功', '127.0.0.1', '2019-01-03 09:57:53', '2019-01-03 09:57:53', '2019-01-03 09:57:53');
INSERT INTO `st_logs` VALUES (26, 'admin', '登录成功', '127.0.0.1', '2019-01-03 10:00:51', '2019-01-03 10:00:51', '2019-01-03 10:00:51');
INSERT INTO `st_logs` VALUES (27, 'admin', '登录成功', '127.0.0.1', '2019-01-03 10:07:30', '2019-01-03 10:07:30', '2019-01-03 10:07:30');
INSERT INTO `st_logs` VALUES (28, 'admin', '登录成功', '127.0.0.1', '2019-01-03 10:07:56', '2019-01-03 10:07:56', '2019-01-03 10:07:56');
INSERT INTO `st_logs` VALUES (29, 'admin', '登录成功', '127.0.0.1', '2019-01-03 10:09:01', '2019-01-03 10:09:01', '2019-01-03 10:09:01');
INSERT INTO `st_logs` VALUES (30, 'admin', '登录成功', '127.0.0.1', '2019-01-03 10:09:24', '2019-01-03 10:09:24', '2019-01-03 10:09:24');
INSERT INTO `st_logs` VALUES (31, 'admin', '登录成功', '127.0.0.1', '2019-01-03 10:18:19', '2019-01-03 10:18:19', '2019-01-03 10:18:19');
INSERT INTO `st_logs` VALUES (32, '李', '登录成功', '127.0.0.1', '2019-01-03 10:25:02', '2019-01-03 10:25:02', '2019-01-03 10:25:02');
INSERT INTO `st_logs` VALUES (33, '李', '登录成功', '127.0.0.1', '2019-01-03 10:25:11', '2019-01-03 10:25:11', '2019-01-03 10:25:11');
INSERT INTO `st_logs` VALUES (34, '李', '登录成功', '127.0.0.1', '2019-01-03 10:25:19', '2019-01-03 10:25:19', '2019-01-03 10:25:19');
INSERT INTO `st_logs` VALUES (35, '李', '登录成功', '127.0.0.1', '2019-01-03 10:25:31', '2019-01-03 10:25:31', '2019-01-03 10:25:31');
INSERT INTO `st_logs` VALUES (36, '李', '登录成功', '127.0.0.1', '2019-01-03 10:25:33', '2019-01-03 10:25:33', '2019-01-03 10:25:33');
INSERT INTO `st_logs` VALUES (37, '李', '登录成功', '127.0.0.1', '2019-01-03 10:25:50', '2019-01-03 10:25:50', '2019-01-03 10:25:50');
INSERT INTO `st_logs` VALUES (38, '李', '登录成功', '127.0.0.1', '2019-01-03 10:25:54', '2019-01-03 10:25:54', '2019-01-03 10:25:54');
INSERT INTO `st_logs` VALUES (39, 'admin', '登录成功', '127.0.0.1', '2019-01-03 10:26:57', '2019-01-03 10:26:57', '2019-01-03 10:26:57');
INSERT INTO `st_logs` VALUES (40, '李', '登录成功', '127.0.0.1', '2019-01-03 10:38:44', '2019-01-03 10:38:44', '2019-01-03 10:38:44');
INSERT INTO `st_logs` VALUES (41, 'admin', '登录成功', '127.0.0.1', '2019-01-03 10:39:40', '2019-01-03 10:39:40', '2019-01-03 10:39:40');
INSERT INTO `st_logs` VALUES (42, 'admin', '登录成功', '127.0.0.1', '2019-01-03 14:32:26', '2019-01-03 14:32:26', '2019-01-03 14:32:26');
INSERT INTO `st_logs` VALUES (43, 'admin', '登录成功', '127.0.0.1', '2019-01-03 14:33:34', '2019-01-03 14:33:34', '2019-01-03 14:33:34');
INSERT INTO `st_logs` VALUES (44, 'admin', '登录成功', '127.0.0.1', '2019-01-03 14:33:46', '2019-01-03 14:33:46', '2019-01-03 14:33:46');
INSERT INTO `st_logs` VALUES (45, 'admin', '登录成功', '127.0.0.1', '2019-01-03 14:34:37', '2019-01-03 14:34:37', '2019-01-03 14:34:37');
INSERT INTO `st_logs` VALUES (46, 'admin', '登录成功', '127.0.0.1', '2019-01-04 14:38:39', '2019-01-04 14:38:39', '2019-01-04 14:38:39');
INSERT INTO `st_logs` VALUES (47, 'admin', '登录成功', '127.0.0.1', '2019-01-04 16:56:35', '2019-01-04 16:56:35', '2019-01-04 16:56:35');
INSERT INTO `st_logs` VALUES (48, 'SAFAF', '登录成功', '127.0.0.1', '2019-01-04 16:57:43', '2019-01-04 16:57:43', '2019-01-04 16:57:43');
INSERT INTO `st_logs` VALUES (49, 'admin', '登录成功', '127.0.0.1', '2019-01-04 18:11:52', '2019-01-04 18:11:52', '2019-01-04 18:11:52');
INSERT INTO `st_logs` VALUES (50, 'admin', '登录成功', '127.0.0.1', '2019-01-07 09:56:07', '2019-01-07 09:56:07', '2019-01-07 09:56:07');
INSERT INTO `st_logs` VALUES (51, 'admin', '登录成功', '127.0.0.1', '2019-01-08 13:11:53', '2019-01-08 13:11:53', '2019-01-08 13:11:53');
INSERT INTO `st_logs` VALUES (52, 'admin', '登录成功', '127.0.0.1', '2019-01-08 15:28:09', '2019-01-08 15:28:09', '2019-01-08 15:28:09');
INSERT INTO `st_logs` VALUES (53, 'admin', '登录成功', '127.0.0.1', '2019-01-08 15:28:53', '2019-01-08 15:28:53', '2019-01-08 15:28:53');
INSERT INTO `st_logs` VALUES (54, 'admin', '登录成功', '127.0.0.1', '2019-01-08 16:51:54', '2019-01-08 16:51:54', '2019-01-08 16:51:54');
INSERT INTO `st_logs` VALUES (55, 'admin', '登录成功', '127.0.0.1', '2019-01-09 10:13:23', '2019-01-09 10:13:23', '2019-01-09 10:13:23');
INSERT INTO `st_logs` VALUES (56, 'admin', '登录成功', '127.0.0.1', '2019-01-09 17:24:38', '2019-01-09 17:24:38', '2019-01-09 17:24:38');
INSERT INTO `st_logs` VALUES (57, 'admin', '登录成功', '127.0.0.1', '2019-01-09 17:31:02', '2019-01-09 17:31:02', '2019-01-09 17:31:02');
INSERT INTO `st_logs` VALUES (58, 'admin', '登录成功', '127.0.0.1', '2019-01-10 17:18:23', '2019-01-10 17:18:23', '2019-01-10 17:18:23');
INSERT INTO `st_logs` VALUES (59, 'admin', '登录成功', '127.0.0.1', '2019-01-10 17:38:29', '2019-01-10 17:38:29', '2019-01-10 17:38:29');
INSERT INTO `st_logs` VALUES (60, 'admin', '登录成功', '127.0.0.1', '2019-01-10 18:12:07', '2019-01-10 18:12:07', '2019-01-10 18:12:07');
INSERT INTO `st_logs` VALUES (61, 'admin', '登录成功', '127.0.0.1', '2019-01-14 09:49:21', '2019-01-14 09:49:21', '2019-01-14 09:49:21');
INSERT INTO `st_logs` VALUES (62, 'admin', '登录成功', '127.0.0.1', '2019-01-15 10:08:17', '2019-01-15 10:08:17', '2019-01-15 10:08:17');
INSERT INTO `st_logs` VALUES (63, 'admin', '登录成功', '127.0.0.1', '2019-01-15 11:01:30', '2019-01-15 11:01:30', '2019-01-15 11:01:30');
INSERT INTO `st_logs` VALUES (64, 'admin', '登录成功', '127.0.0.1', '2019-01-15 17:51:30', '2019-01-15 17:51:30', '2019-01-15 17:51:30');
INSERT INTO `st_logs` VALUES (65, 'admin', '登录成功', '127.0.0.1', '2019-01-16 10:09:08', '2019-01-16 10:09:08', '2019-01-16 10:09:08');
INSERT INTO `st_logs` VALUES (66, 'admin', '登录成功', '127.0.0.1', '2019-01-16 14:44:02', '2019-01-16 14:44:02', '2019-01-16 14:44:02');
INSERT INTO `st_logs` VALUES (67, 'admin', '登录成功', '127.0.0.1', '2019-01-16 15:47:07', '2019-01-16 15:47:07', '2019-01-16 15:47:07');
INSERT INTO `st_logs` VALUES (68, 'admin', '登录成功', '127.0.0.1', '2019-01-16 15:48:11', '2019-01-16 15:48:11', '2019-01-16 15:48:11');
INSERT INTO `st_logs` VALUES (69, 'admin', '登录成功', '127.0.0.1', '2019-01-16 15:52:10', '2019-01-16 15:52:10', '2019-01-16 15:52:10');
INSERT INTO `st_logs` VALUES (70, 'admin', '登录成功', '127.0.0.1', '2019-01-16 18:31:40', '2019-01-16 18:31:40', '2019-01-16 18:31:40');
INSERT INTO `st_logs` VALUES (71, 'admin', '登录成功', '127.0.0.1', '2019-01-17 16:02:57', '2019-01-17 16:02:57', '2019-01-17 16:02:57');
INSERT INTO `st_logs` VALUES (72, 'admin', '登录成功', '127.0.0.1', '2019-01-18 09:51:45', '2019-01-18 09:51:45', '2019-01-18 09:51:45');
INSERT INTO `st_logs` VALUES (73, 'admin', '登录成功', '127.0.0.1', '2019-01-18 10:55:40', '2019-01-18 10:55:40', '2019-01-18 10:55:40');
INSERT INTO `st_logs` VALUES (74, 'admin', '登录成功', '127.0.0.1', '2019-01-18 14:46:53', '2019-01-18 14:46:53', '2019-01-18 14:46:53');
INSERT INTO `st_logs` VALUES (75, 'sdfasfsa', '登录成功', '127.0.0.1', '2019-01-18 18:31:42', '2019-01-18 18:31:42', '2019-01-18 18:31:42');
INSERT INTO `st_logs` VALUES (76, 'admin', '登录成功', '127.0.0.1', '2019-01-18 18:32:23', '2019-01-18 18:32:23', '2019-01-18 18:32:23');
INSERT INTO `st_logs` VALUES (77, 'admin', '登录成功', '127.0.0.1', '2019-01-21 09:57:37', '2019-01-21 09:57:37', '2019-01-21 09:57:37');
INSERT INTO `st_logs` VALUES (78, 'admin', '登录成功', '127.0.0.1', '2019-01-21 11:08:46', '2019-01-21 11:08:46', '2019-01-21 11:08:46');
INSERT INTO `st_logs` VALUES (79, 'admin', '登录成功', '127.0.0.1', '2019-01-21 16:40:17', '2019-01-21 16:40:17', '2019-01-21 16:40:17');
INSERT INTO `st_logs` VALUES (80, 'admin', '登录成功', '127.0.0.1', '2019-01-21 16:44:49', '2019-01-21 16:44:49', '2019-01-21 16:44:49');
INSERT INTO `st_logs` VALUES (81, 'admin', '登录成功', '127.0.0.1', '2019-01-22 10:01:54', '2019-01-22 10:01:54', '2019-01-22 10:01:54');
INSERT INTO `st_logs` VALUES (82, 'sadd', '登录成功', '127.0.0.1', '2019-01-22 10:02:57', '2019-01-22 10:02:57', '2019-01-22 10:02:57');
INSERT INTO `st_logs` VALUES (83, 'admin', '登录成功', '127.0.0.1', '2019-01-22 10:03:15', '2019-01-22 10:03:15', '2019-01-22 10:03:15');
INSERT INTO `st_logs` VALUES (84, 'admin', '登录成功', '127.0.0.1', '2019-01-22 11:18:59', '2019-01-22 11:18:59', '2019-01-22 11:18:59');
INSERT INTO `st_logs` VALUES (85, 'admin', '登录成功', '127.0.0.1', '2019-01-22 11:30:06', '2019-01-22 11:30:06', '2019-01-22 11:30:06');
INSERT INTO `st_logs` VALUES (86, 'admin', '登录成功', '127.0.0.1', '2019-01-23 10:06:01', '2019-01-23 10:06:01', '2019-01-23 10:06:01');
INSERT INTO `st_logs` VALUES (87, 'admin', '登录成功', '127.0.0.1', '2019-01-23 18:28:07', '2019-01-23 18:28:07', '2019-01-23 18:28:07');
INSERT INTO `st_logs` VALUES (88, 'admin', '登录成功', '127.0.0.1', '2019-01-24 14:13:58', '2019-01-24 14:13:58', '2019-01-24 14:13:58');
INSERT INTO `st_logs` VALUES (89, 'admin', '登录成功', '127.0.0.1', '2019-01-24 14:32:19', '2019-01-24 14:32:19', '2019-01-24 14:32:19');
INSERT INTO `st_logs` VALUES (90, 'admin', '登录成功', '127.0.0.1', '2019-01-24 14:34:27', '2019-01-24 14:34:27', '2019-01-24 14:34:27');
INSERT INTO `st_logs` VALUES (91, 'ASDF', '登录成功', '127.0.0.1', '2019-01-24 14:43:52', '2019-01-24 14:43:52', '2019-01-24 14:43:52');
INSERT INTO `st_logs` VALUES (92, 'admin', '登录成功', '127.0.0.1', '2019-01-25 10:05:34', '2019-01-25 10:05:34', '2019-01-25 10:05:34');
INSERT INTO `st_logs` VALUES (93, 'sadf', '登录成功', '127.0.0.1', '2019-01-28 10:59:28', '2019-01-28 10:59:28', '2019-01-28 10:59:28');
INSERT INTO `st_logs` VALUES (94, 'admin', '登录成功', '127.0.0.1', '2019-01-28 11:18:09', '2019-01-28 11:18:09', '2019-01-28 11:18:09');
INSERT INTO `st_logs` VALUES (95, 'admin', '登录成功', '127.0.0.1', '2019-01-28 11:31:18', '2019-01-28 11:31:18', '2019-01-28 11:31:18');
INSERT INTO `st_logs` VALUES (96, 'admin', '登录成功', '127.0.0.1', '2019-01-29 12:12:22', '2019-01-29 12:12:22', '2019-01-29 12:12:22');
INSERT INTO `st_logs` VALUES (97, 'admin', '登录成功', '127.0.0.1', '2019-01-30 15:53:19', '2019-01-30 15:53:19', '2019-01-30 15:53:19');
INSERT INTO `st_logs` VALUES (98, 'admin', '登录成功', '127.0.0.1', '2019-01-31 18:29:06', '2019-01-31 18:29:06', '2019-01-31 18:29:06');
INSERT INTO `st_logs` VALUES (99, 'admin', '登录成功', '127.0.0.1', '2019-02-11 10:07:42', '2019-02-11 10:07:42', '2019-02-11 10:07:42');
INSERT INTO `st_logs` VALUES (100, 'admin', '登录成功', '127.0.0.1', '2019-02-12 10:54:34', '2019-02-12 10:54:34', '2019-02-12 10:54:34');
INSERT INTO `st_logs` VALUES (101, 'admin', '登录成功', '127.0.0.1', '2019-02-18 11:44:00', '2019-02-18 11:44:00', '2019-02-18 11:44:00');
INSERT INTO `st_logs` VALUES (102, 'admin', '登录成功', '127.0.0.1', '2019-02-19 15:05:51', '2019-02-19 15:05:51', '2019-02-19 15:05:51');
INSERT INTO `st_logs` VALUES (103, 'admin', '登录成功', '127.0.0.1', '2019-02-20 15:27:38', '2019-02-20 15:27:38', '2019-02-20 15:27:38');
INSERT INTO `st_logs` VALUES (104, 'admin', '登录成功', '127.0.0.1', '2019-03-04 15:22:44', '2019-03-04 15:22:44', '2019-03-04 15:22:44');
INSERT INTO `st_logs` VALUES (105, 'admin', '登录成功', '127.0.0.1', '2019-03-07 11:15:43', '2019-03-07 11:15:43', '2019-03-07 11:15:43');
INSERT INTO `st_logs` VALUES (106, 'admin', '登录成功', '127.0.0.1', '2019-03-08 10:14:23', '2019-03-08 10:14:23', '2019-03-08 10:14:23');
INSERT INTO `st_logs` VALUES (107, 'admin', '登录成功', '127.0.0.1', '2019-03-11 09:58:10', '2019-03-11 09:58:10', '2019-03-11 09:58:10');
INSERT INTO `st_logs` VALUES (108, 'admin', '登录成功', '127.0.0.1', '2019-03-11 11:42:38', '2019-03-11 11:42:38', '2019-03-11 11:42:38');
INSERT INTO `st_logs` VALUES (109, 'admin', '登录成功', '127.0.0.1', '2019-03-12 15:37:42', '2019-03-12 15:37:42', '2019-03-12 15:37:42');
INSERT INTO `st_logs` VALUES (110, 'admin', '登录成功', '127.0.0.1', '2019-03-13 15:42:35', '2019-03-13 15:42:35', '2019-03-13 15:42:35');
INSERT INTO `st_logs` VALUES (111, 'admin', '登录成功', '127.0.0.1', '2019-03-14 15:42:49', '2019-03-14 15:42:49', '2019-03-14 15:42:49');
INSERT INTO `st_logs` VALUES (112, 'admin', '登录成功', '127.0.0.1', '2019-03-15 15:43:59', '2019-03-15 15:43:59', '2019-03-15 15:43:59');
INSERT INTO `st_logs` VALUES (113, 'admin', '登录成功', '127.0.0.1', '2019-03-15 17:52:24', '2019-03-15 17:52:24', '2019-03-15 17:52:24');
COMMIT;

-- ----------------------------
-- Table structure for st_resource
-- ----------------------------
DROP TABLE IF EXISTS `st_resource`;
CREATE TABLE `st_resource` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) DEFAULT NULL,
  `pids` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `path` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `name` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `title` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `icon` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `component` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `componentPath` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `type` int(2) DEFAULT '1',
  `sort` int(11) DEFAULT NULL,
  `isLock` tinyint(1) DEFAULT '0',
  `permission` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `state` int(2) DEFAULT '1',
  `cache` tinyint(1) DEFAULT '0',
  `redirect` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='权限资源表';

-- ----------------------------
-- Records of st_resource
-- ----------------------------
BEGIN;
INSERT INTO `st_resource` VALUES (1, 0, NULL, '/system', 'system', '系统管理', 'cogs', 'Layout', '/views/layout/Layout', 1, 1, 0, '', 1, 0, 'noredirect', '2019-01-16 18:01:57', '2019-01-22 16:42:38');
INSERT INTO `st_resource` VALUES (2, 13, NULL, 'admin', 'systemAdmin', '管理员列表', 'user', 'systemAdmin', '/views/system/admin', 2, 1, 0, '', 1, 1, '', '2019-01-16 18:16:59', '2019-01-28 14:26:14');
INSERT INTO `st_resource` VALUES (4, 13, NULL, 'role', 'systemRole', '角色管理', 'users', 'systemRole', '/views/system/role', 2, 2, 0, '', 1, 1, '', '2019-01-17 10:05:55', '2019-01-22 14:16:59');
INSERT INTO `st_resource` VALUES (9, 0, NULL, '/component', 'components', '组件管理', 'th', 'Layout', '/views/layout/Layout', 1, 1, 0, '', 1, 0, '', '2019-01-17 15:25:43', '2019-01-22 16:55:02');
INSERT INTO `st_resource` VALUES (10, 9, NULL, 'tinymce', 'tinymce', '富文本编辑', 'edit', 'TinymceDemo', '/views/components-demo/tinymce', 2, 2, 0, '', 1, 1, '', '2019-01-17 15:26:18', '2019-01-22 16:49:44');
INSERT INTO `st_resource` VALUES (11, 9, NULL, 'json-editor', 'markdown', 'json编辑器', 'jsfiddle', 'JsonEditorDemo', '/views/components-demo/jsonEditor', 2, 3, 0, '', 1, 1, '', '2019-01-17 15:27:00', '2019-01-22 16:49:55');
INSERT INTO `st_resource` VALUES (12, 13, NULL, 'resource', 'systemResource', '资源管理', 'th-list', 'systemResource', '/views/system/resource', 2, 3, 0, '', 1, 1, '', '2019-01-21 11:25:00', '2019-01-22 16:55:27');
INSERT INTO `st_resource` VALUES (13, 0, NULL, '/permissions', 'permissions', '权限管理', 'drivers-license-o', 'Layout', '', 1, 0, 0, '', 1, 0, '/permissions/admin', '2019-01-21 17:39:26', '2019-01-22 16:40:00');
INSERT INTO `st_resource` VALUES (14, 1, NULL, 'logs', 'systemLogs', '日志管理', 'tasks', 'systemLogs', '', 2, NULL, 0, '', 1, 1, '', '2019-01-21 17:42:46', '2019-01-22 14:25:56');
INSERT INTO `st_resource` VALUES (15, 13, NULL, 'interface', 'systemInterface', '接口管理', 'paper-plane', 'systemInterface', '', 2, 4, 0, '', 1, 1, '', '2019-01-21 18:21:07', '2019-01-22 16:48:03');
INSERT INTO `st_resource` VALUES (16, 1, NULL, 'icon', 'Icons', '自定义图标', 'fonticons', 'svgIcon', '', 2, NULL, 0, '', 1, 1, '', '2019-01-22 11:24:40', '2019-01-23 10:21:50');
INSERT INTO `st_resource` VALUES (17, 1, NULL, 'sensitive', 'systemSensitive', '敏感词管理', 'list-ol', 'systemSensitive', '', 2, NULL, 0, '', 1, 1, '', '2019-01-22 11:31:57', '2019-01-22 16:43:35');
INSERT INTO `st_resource` VALUES (18, 0, NULL, '/cms', 'cms', '官网管理', 'home', 'Layout', '', 1, 2, 0, '', 1, 0, '/cms/category', '2019-02-18 14:48:46', '2019-02-18 15:17:27');
INSERT INTO `st_resource` VALUES (19, 18, NULL, 'category', 'cmsCategory', '栏目管理', 'th-list', 'cmsCategory', '', 2, NULL, 0, '', 1, 1, NULL, '2019-02-18 14:51:55', '2019-02-18 15:21:03');
INSERT INTO `st_resource` VALUES (20, 18, NULL, 'article', 'cmsArticle', '文章管理', 'file-text', 'cmsArticle', '', 2, NULL, 0, '', 1, 1, NULL, '2019-02-18 14:55:36', '2019-02-18 15:21:30');
COMMIT;

-- ----------------------------
-- Table structure for st_role
-- ----------------------------
DROP TABLE IF EXISTS `st_role`;
CREATE TABLE `st_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) COLLATE utf8_bin DEFAULT NULL,
  `code` varchar(25) COLLATE utf8_bin DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `state` varchar(2) COLLATE utf8_bin DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='角色管理表';

-- ----------------------------
-- Records of st_role
-- ----------------------------
BEGIN;
INSERT INTO `st_role` VALUES (1, 'admin', 'R_ADMIN', '管理员', '1', '2019-01-10 17:21:04', '2019-01-28 16:22:51');
INSERT INTO `st_role` VALUES (2, '菜单管理员', 'R_MENUADMIN', '菜单管理员', '1', '2019-01-10 17:22:49', '2019-01-10 17:22:49');
INSERT INTO `st_role` VALUES (3, 'saler', 'R_SALER', '销售部', '1', '2019-01-10 17:24:09', '2019-01-10 17:24:09');
COMMIT;

-- ----------------------------
-- Table structure for st_role_resource
-- ----------------------------
DROP TABLE IF EXISTS `st_role_resource`;
CREATE TABLE `st_role_resource` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) DEFAULT NULL,
  `resource_id` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `resource_id_fe` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='角色资源关联表';

-- ----------------------------
-- Records of st_role_resource
-- ----------------------------
BEGIN;
INSERT INTO `st_role_resource` VALUES (4, 1, '18,19,20,13,2,4,12,15,1,14,16,17,9,10,11', '19,20,2,4,12,15,14,16,17,10,11', '2019-01-18 10:43:14', '2019-02-18 14:55:49');
INSERT INTO `st_role_resource` VALUES (6, 2, '13,2,4,12,15,1,14,16', '2,4,12,15,14,16', '2019-01-18 11:19:05', '2019-01-28 16:40:45');
INSERT INTO `st_role_resource` VALUES (7, 3, '1,16,17', '16,17', '2019-01-18 11:19:11', '2019-01-28 16:25:47');
COMMIT;

-- ----------------------------
-- Table structure for st_role_user
-- ----------------------------
DROP TABLE IF EXISTS `st_role_user`;
CREATE TABLE `st_role_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) DEFAULT NULL,
  `user_id` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='角色用户关联表';

-- ----------------------------
-- Records of st_role_user
-- ----------------------------
BEGIN;
INSERT INTO `st_role_user` VALUES (54, 3, '5a726bd39b9741999ee0042a5baa59fc', '2019-01-16 10:53:52', '2019-01-16 10:53:52');
INSERT INTO `st_role_user` VALUES (89, 2, 'a92f20b98b8c46bb808f1da349294028', '2019-01-16 11:25:46', '2019-01-16 11:25:46');
INSERT INTO `st_role_user` VALUES (91, 1, 'a92f20b98b8c46bb808f1da349294028', '2019-01-16 13:59:50', '2019-01-16 13:59:50');
INSERT INTO `st_role_user` VALUES (99, 1, '6091b239c9aa4691a87fffbd83f22035', '2019-01-16 14:42:14', '2019-01-16 14:42:14');
INSERT INTO `st_role_user` VALUES (104, 2, '6091b239c9aa4691a87fffbd83f22035', '2019-01-18 14:49:10', '2019-01-18 14:49:10');
INSERT INTO `st_role_user` VALUES (105, 3, '1fa7cd3f18be46618200712f3d2cea4e', '2019-01-22 10:02:45', '2019-01-22 10:02:45');
INSERT INTO `st_role_user` VALUES (107, 3, '6091b239c9aa4691a87fffbd83f22035', '2019-01-28 11:33:58', '2019-01-28 11:33:58');
COMMIT;

-- ----------------------------
-- Table structure for st_sensitive
-- ----------------------------
DROP TABLE IF EXISTS `st_sensitive`;
CREATE TABLE `st_sensitive` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `typeid` int(11) DEFAULT NULL,
  `content` varchar(255) COLLATE utf8_bin NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `typeid` (`typeid`),
  CONSTRAINT `st_sensitive_ibfk_1` FOREIGN KEY (`typeid`) REFERENCES `st_sensitive_type` (`typeid`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='敏感词管理表';

-- ----------------------------
-- Records of st_sensitive
-- ----------------------------
BEGIN;
INSERT INTO `st_sensitive` VALUES (1, 5, '傻逼', '2019-01-07 14:39:39', '2019-01-07 14:39:39');
INSERT INTO `st_sensitive` VALUES (2, 1, '未知敏感词', '2019-01-07 14:40:11', '2019-01-07 14:40:11');
INSERT INTO `st_sensitive` VALUES (3, 5, '无知', '2019-01-07 14:46:34', '2019-01-07 14:46:34');
INSERT INTO `st_sensitive` VALUES (4, 2, '毛枯', '2019-01-07 15:18:22', '2019-01-07 16:41:22');
INSERT INTO `st_sensitive` VALUES (5, 3, '中华', '2019-01-07 15:31:59', '2019-01-07 15:31:59');
INSERT INTO `st_sensitive` VALUES (6, 5, '屁啊', '2019-01-07 15:34:11', '2019-01-07 15:34:11');
INSERT INTO `st_sensitive` VALUES (9, 3, '修改成功', '2019-01-07 16:12:04', '2019-01-07 16:39:22');
INSERT INTO `st_sensitive` VALUES (10, 1, '敏感未知', '2019-01-07 16:12:12', '2019-01-07 16:26:03');
INSERT INTO `st_sensitive` VALUES (11, 2, '无可奈何花落去苛', '2019-01-07 16:22:40', '2019-01-07 16:22:40');
INSERT INTO `st_sensitive` VALUES (12, 2, '震荡', '2019-01-07 16:34:52', '2019-01-07 16:34:57');
INSERT INTO `st_sensitive` VALUES (19, 3, '顶戴顶起', '2019-01-07 17:02:16', '2019-01-07 17:02:16');
INSERT INTO `st_sensitive` VALUES (20, 1, '模压', '2019-01-07 17:02:21', '2019-01-07 17:02:21');
INSERT INTO `st_sensitive` VALUES (21, 5, '124枯', '2019-01-07 17:02:28', '2019-01-07 17:02:28');
INSERT INTO `st_sensitive` VALUES (22, 1, '无可奈何花落去 ', '2019-01-07 17:06:43', '2019-01-07 17:06:43');
INSERT INTO `st_sensitive` VALUES (23, 5, '蝇', '2019-01-08 13:12:15', '2019-01-22 18:16:29');
INSERT INTO `st_sensitive` VALUES (25, 1, 'asdfsadf', '2019-01-25 11:50:43', '2019-01-25 11:50:43');
INSERT INTO `st_sensitive` VALUES (26, 1, 'string', '2019-01-25 11:51:07', '2019-01-25 11:51:07');
COMMIT;

-- ----------------------------
-- Table structure for st_sensitive_type
-- ----------------------------
DROP TABLE IF EXISTS `st_sensitive_type`;
CREATE TABLE `st_sensitive_type` (
  `typeid` int(11) NOT NULL AUTO_INCREMENT,
  `typename` varchar(25) COLLATE utf8_bin NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`typeid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='敏感词类型表';

-- ----------------------------
-- Records of st_sensitive_type
-- ----------------------------
BEGIN;
INSERT INTO `st_sensitive_type` VALUES (1, '未知', '2019-01-07 11:38:12', '2019-01-07 11:38:12');
INSERT INTO `st_sensitive_type` VALUES (2, '色情', '2019-01-07 11:38:25', '2019-01-07 11:38:25');
INSERT INTO `st_sensitive_type` VALUES (3, '政治', '2019-01-07 11:38:34', '2019-01-07 11:38:34');
INSERT INTO `st_sensitive_type` VALUES (4, '毒品', '2019-01-07 11:38:49', '2019-01-07 11:38:49');
INSERT INTO `st_sensitive_type` VALUES (5, '脏话', '2019-01-07 11:38:57', '2019-01-07 11:38:57');
COMMIT;

-- ----------------------------
-- Table structure for st_users
-- ----------------------------
DROP TABLE IF EXISTS `st_users`;
CREATE TABLE `st_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `username` varchar(60) COLLATE utf8_bin NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `password` varchar(255) COLLATE utf8_bin NOT NULL,
  `avatar` varchar(256) COLLATE utf8_bin DEFAULT 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4',
  `mobile` varchar(32) COLLATE utf8_bin DEFAULT NULL,
  `sex` int(11) DEFAULT '0',
  `state` varchar(2) COLLATE utf8_bin DEFAULT '2',
  `user_type` varchar(2) COLLATE utf8_bin DEFAULT '2',
  `last_login_ip` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `last_login_time` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='用户表';

-- ----------------------------
-- Records of st_users
-- ----------------------------
BEGIN;
INSERT INTO `st_users` VALUES (1, 'f588ad7b7dfd443c9f3ee41cf2bca07d', 'Benson', 'buadd@163.com', '', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', '13412345679', 1, '2', '2', '127.0.0.1', '2019-01-02 12:28:28', '2018-12-27 10:25:19', '2019-01-04 17:00:15', NULL);
INSERT INTO `st_users` VALUES (2, '7694cef24a4f47c28f73ade2c50b20b1', 'Benson', 'buad@163.com', '$2a$10$VeFRPprDXQ71l5S.Cbt8Oeezu9jDoC4U14rUduA526ih40rrRFEPe', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', '13412345679', 0, '2', '2', NULL, NULL, '2018-12-27 10:25:26', '2018-12-27 10:25:26', '2019-01-16 15:58:51');
INSERT INTO `st_users` VALUES (3, '0566d9d8c53249cb93ac9fe3bcfc2233', 'Benson', '12buad@163.com', '', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', '13412345679', 1, '2', '2', NULL, NULL, '2018-12-27 10:35:52', '2019-01-04 16:23:18', '2019-01-16 16:06:24');
INSERT INTO `st_users` VALUES (4, 'c141ee35dc4e481099124788d353685c', 'Benson', '12budad@163.com', '$2a$10$ZiF8uBQ8d0mMnvpK0LE0cOb27ijGMs8Ph/2V8BnuGqEMZ5HCYWYBS', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', '13412345679', 2, '2', '2', NULL, NULL, '2018-12-27 14:55:27', '2018-12-27 14:55:27', NULL);
INSERT INTO `st_users` VALUES (5, '6717a1f2edd04795b6356650f9ca7289', 'Benson', '1budad@163.com', '$2a$10$ZkdFL.KVoR2fUTB5jsTNFuquTcBFhnv/PL5yfmYSwdxBeQyO1l3x.', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', '13412345679', 0, '2', '2', NULL, NULL, '2018-12-27 14:55:58', '2018-12-27 14:55:58', '2019-01-16 15:40:48');
INSERT INTO `st_users` VALUES (6, 'a92f20b98b8c46bb808f1da349294028', 'Benson', '1udad@163.com', '$2a$10$TsPpmXnMPrEJNjrv2Iu3VujJHe4H/4w4mdbA4B9T8Yg4L7gjZ5eM2', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', '13412345679', 0, '1', '1', NULL, NULL, '2018-12-27 14:57:53', '2019-01-04 18:26:33', NULL);
INSERT INTO `st_users` VALUES (7, '6091b239c9aa4691a87fffbd83f22035', 'admin', 'admin@163.com', '$2a$10$N2pFr5D3C/7yslaJDvuU3OH4NMhLPtjQAZ.AJmxCd0o39r3jwqsqC', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', '13412345679', 0, '1', '1', '127.0.0.1', '2019-03-15 17:52:24', '2019-01-02 12:33:05', '2019-03-15 17:52:24', NULL);
INSERT INTO `st_users` VALUES (8, '8b7ea0c1d164484b90e9baeb3a6c37d1', 'SDF', '1923432@QQ.com', '$2a$10$ZjjDdjqA4RrUg6WQTqVQ8eqDLoW4HXOCsk7XEZM5CYmbFjNY5fI/a', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', NULL, 0, '2', '2', NULL, NULL, '2019-01-02 16:54:18', '2019-01-02 16:54:18', '2019-01-03 17:34:48');
INSERT INTO `st_users` VALUES (9, 'a7600f5e9f1e415b8ae5958992550612', 'SDF', '1923D432@QQ.com', '$2a$10$2hUK/gJ1vp/1eZnfFuVVpeqaTej99h3SCXCTuPkjzBLOP73YzN2xe', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', NULL, 0, '2', '2', NULL, NULL, '2019-01-02 16:57:56', '2019-01-02 16:57:56', '2019-01-24 17:44:56');
INSERT INTO `st_users` VALUES (10, '6bd9b0e7dcec46398bc29ff2788ded75', 'SDF', 'qw432@QQ.com', '$2a$10$rTuzWjqv5wNtWIsY61B/v.eRV/Qz.jnsCV90e84yyULOl.whFacTK', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', NULL, 0, '2', '2', NULL, NULL, '2019-01-02 17:15:46', '2019-01-02 17:15:46', '2019-01-04 18:14:29');
INSERT INTO `st_users` VALUES (11, '85cb7570f0cc4dbcb2a5419d7a32102f', 'SDF', '12432@QQ.com', '$2a$10$e53S/pmcP76xNg.cydSw/uJ1a6AByETrexcTp6yhhbYZnPukUM0kG', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', NULL, 0, '2', '2', NULL, NULL, '2019-01-02 17:17:04', '2019-01-02 17:17:04', '2019-01-04 16:23:02');
INSERT INTO `st_users` VALUES (12, '59ae834af76a43dc8219eb70728159ca', '继梁', '12121212@QQ.com', '$2a$10$DrLtTXJGpn8Z6mjtX023Ye4BJMoYuOJOOfOnyJGMavi5paoAVTmWa', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', NULL, 0, '2', '2', NULL, NULL, '2019-01-02 17:19:45', '2019-01-02 17:19:45', '2019-01-04 18:14:35');
INSERT INTO `st_users` VALUES (13, '4e52275cf8944a64a74b037eb1a3ddd5', 'Benson', 'Q332@QQ.com', '$2a$10$CVi3A4sKSBXAKRmhnot5uOjLlpl7p0aPUJUUXG8E4.u.VQwVbAxvu', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', NULL, 0, '2', '2', '127.0.0.1', '2019-01-03 10:38:44', '2019-01-02 17:21:38', '2019-01-03 10:38:44', NULL);
INSERT INTO `st_users` VALUES (14, '642156efcd2d4625a5e013ba2f1da111', '中国人', 'chadnfer@QQ.com', '', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', NULL, 2, '1', '2', NULL, NULL, '2019-01-02 17:59:04', '2019-01-04 16:05:51', '2019-01-04 18:12:28');
INSERT INTO `st_users` VALUES (15, 'e41f7647afde40a5b8ab4f2553122d23', 'SDFsd', 'sdfsdf@QQ.com', '$2a$10$QwTOZsMaN4lclh/4FCDFcefKLPRImU0uIWBw.QPRiJYZOI7pJg/0i', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', NULL, 0, '2', '2', NULL, NULL, '2019-01-02 18:00:26', '2019-01-02 18:00:26', '2019-01-04 15:57:14');
INSERT INTO `st_users` VALUES (16, 'b45961d441ce49ba97ec20b2970c4cce', 'sdf', 'sf@qq.com', '$2a$10$N2pFr5D3C/7yslaJDvuU3OH4NMhLPtjQAZ.AJmxCd0o39r3jwqsqC', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', '13412345678', 1, '1', '1', NULL, NULL, '2019-01-04 15:00:53', '2019-01-04 15:00:53', '2019-01-04 15:05:27');
INSERT INTO `st_users` VALUES (17, '66f03538c6af4e67833a6e5c3c2bbeae', '11111111sdf', 'GUYTTsf@qq.com', '$2a$10$sd.UTgXM7wMewSMOB8I1SegDtJ.sDy43m2KZg/G6ymI2vZoIEz/hW', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', '13412345690', 2, '0', '2', NULL, NULL, '2019-01-04 15:01:30', '2019-01-04 15:01:30', '2019-01-04 16:22:53');
INSERT INTO `st_users` VALUES (18, '5a726bd39b9741999ee0042a5baa59fc', 'sdfasfsa', 'sdfadsd@qq.com', '$2a$10$vpBZ/Xahx7TUB2lqLej1WORWk2lxI/JdLCo9501C.N5kVLrB46khC', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', '13520202043', 1, '2', '1', '127.0.0.1', '2019-01-18 18:31:42', '2019-01-04 15:04:29', '2019-01-18 18:31:42', '2019-01-22 10:29:05');
INSERT INTO `st_users` VALUES (19, '0ab728ee64dc4dddbd3937cf0249c565', 'TPASD', 'Q21345@QQ.COM', '', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', '13412345678', 1, '1', '2', NULL, NULL, '2019-01-04 15:33:04', '2019-01-04 17:41:07', '2019-01-04 18:12:04');
INSERT INTO `st_users` VALUES (20, 'a16a12acd84c4e60a3e4246097fc5127', 'SAFAF在', 'QWEQWE@QQ.COM', '$2a$10$sOyxZSDfsoXx87XTwi.Diuc6HBBm9UHIxLcJEdCpCKfi6gXgICDJO', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', '13434567899', 1, '1', '2', '127.0.0.1', '2019-01-04 16:57:43', '2019-01-04 16:56:56', '2019-01-16 14:40:36', NULL);
INSERT INTO `st_users` VALUES (21, 'fb8479cedf304f09919bb7fdeb665645', 'SDF', 'Q@QQ.COM', '$2a$10$7krgVnPYUgSpcNTit2JowO3eSOwBtWK8kXyr1Hpv/KLvK/GZGJFRK', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', '', 1, '1', '2', NULL, NULL, '2019-01-16 15:53:10', '2019-01-16 15:53:22', '2019-01-24 17:44:56');
INSERT INTO `st_users` VALUES (22, '1fa7cd3f18be46618200712f3d2cea4e', 'sadd', 'dd@qq.com', '$2a$10$m4YRfB6NEFK9t8vOPD/SI.Un6Z2ycU1FXjJ.LL1xERA1UpNleBn1G', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', '13412345678', 1, '1', '1', '127.0.0.1', '2019-01-22 10:02:57', '2019-01-22 10:02:25', '2019-01-22 10:02:57', NULL);
INSERT INTO `st_users` VALUES (23, '7b5b6e6791894d7694c4be25b4cc75d1', 'string', '952766532@qq.com', '$2a$10$YM3npoSo0HnWi1HALnHxaeDcioXsBNP.P6ffN0e3/thZ46ILJj2Vm', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', NULL, 0, '2', '2', NULL, NULL, '2019-01-24 12:09:26', '2019-01-24 12:09:26', '2019-01-24 17:25:08');
INSERT INTO `st_users` VALUES (24, '6fac2e3248324940925c88743833ea76', 'dfsadfsad', '19w51828835@qq.com', '$2a$10$9asoStCpJg9S/XWsdgxiouvqMopM8ESZtItjc.XFvW7VgtBa1M1jy', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', '13412345654', 0, '2', '1', '127.0.0.1', '2019-01-24 14:43:52', '2019-01-24 14:43:36', '2019-01-24 18:22:39', NULL);
INSERT INTO `st_users` VALUES (25, 'd95162cc9efa490fbcbaa8df8360f9bc', 'sadf', '1951828835@qq.com', '$2a$10$.AjwpiJ27esk/IeXC/lBKuZy7k5nuvq5q5jqk5xoozL7/2twr.T/.', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', '13412345678', 1, '1', '2', '127.0.0.1', '2019-01-28 10:59:28', '2019-01-24 16:16:28', '2019-01-28 10:59:28', NULL);
INSERT INTO `st_users` VALUES (26, '68c61d614dfb474ba743259b606ade96', 'sadf', '1951828DD35@qq.com', '$2a$10$2CxDhTDkTThjJeLfG7Ycn.MroYq9YY0SSmM9N2b7..6CRQFCTF2Cu', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', '13412345678', 0, '1', '2', NULL, NULL, '2019-01-24 16:16:54', '2019-01-24 17:39:27', NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
