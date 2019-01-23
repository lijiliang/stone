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

 Date: 23/01/2019 18:01:24
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
COMMIT;

-- ----------------------------
-- Table structure for st_files
-- ----------------------------
DROP TABLE IF EXISTS `st_files`;
CREATE TABLE `st_files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `key` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `url` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `extname` varchar(10) COLLATE utf8_bin DEFAULT NULL,
  `state` varchar(2) COLLATE utf8_bin DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='文件管理管理表';

-- ----------------------------
-- Records of st_files
-- ----------------------------
BEGIN;
INSERT INTO `st_files` VALUES (3, 'stone/2749a16bb4304d9a92c5ffd9ef320f5e.png', 'http://img1.sucaiweb.com/stone/2749a16bb4304d9a92c5ffd9ef320f5e.png', '.png', '1', '2018-12-29 09:53:33', '2018-12-29 09:53:33');
INSERT INTO `st_files` VALUES (5, 'stone/93870b73ad824c6da6d41b2d64305db7.mp4', 'http://img1.sucaiweb.com/stone/93870b73ad824c6da6d41b2d64305db7.mp4', '.mp4', '1', '2018-12-29 15:09:45', '2018-12-29 15:09:45');
INSERT INTO `st_files` VALUES (7, 'stone/697e8944c9654f6f8384636e1fe4c5be.png', 'http://img1.sucaiweb.com/stone/697e8944c9654f6f8384636e1fe4c5be.png', '.png', '1', '2018-12-29 15:37:07', '2018-12-29 15:37:07');
INSERT INTO `st_files` VALUES (8, 'stone/254be7f0cc924f8a8dbfb70282ec2150.png', 'http://img1.sucaiweb.com/stone/254be7f0cc924f8a8dbfb70282ec2150.png', '.png', '1', '2018-12-29 15:37:07', '2018-12-29 15:37:07');
INSERT INTO `st_files` VALUES (10, 'stone/6935890d33a1494cb18396028fa23b7d.png', 'http://img1.sucaiweb.com/stone/6935890d33a1494cb18396028fa23b7d.png', '.png', '1', '2019-01-02 10:20:30', '2019-01-02 10:20:30');
INSERT INTO `st_files` VALUES (11, 'stone/9b5bcc6da08b4863876402a2eca75ce3.less', 'http://img1.sucaiweb.com/stone/9b5bcc6da08b4863876402a2eca75ce3.less', '.less', '1', '2019-01-02 10:20:30', '2019-01-02 10:20:30');
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
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='接口管理表';

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
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='用户日志管理表';

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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='权限资源表';

-- ----------------------------
-- Records of st_resource
-- ----------------------------
BEGIN;
INSERT INTO `st_resource` VALUES (1, 0, NULL, '/system', 'system', '系统管理', 'cogs', 'Layout', '/views/layout/Layout', 1, 1, 0, NULL, 1, 0, 'noredirect', '2019-01-16 18:01:57', '2019-01-22 16:42:38');
INSERT INTO `st_resource` VALUES (2, 13, NULL, 'admin', 'systemAdmin', '管理员列表', 'user', 'systemAdmin', '/views/system/admin', 2, 1, 0, NULL, 1, 1, NULL, '2019-01-16 18:16:59', '2019-01-22 14:15:55');
INSERT INTO `st_resource` VALUES (4, 13, NULL, 'role', 'systemRole', '角色管理', 'users', 'systemRole', '/views/system/role', 2, 2, 0, NULL, 1, 1, NULL, '2019-01-17 10:05:55', '2019-01-22 14:16:59');
INSERT INTO `st_resource` VALUES (9, 0, NULL, '/component', 'components', '组件管理', 'th', 'Layout', '/views/layout/Layout', 1, 1, 0, NULL, 1, 0, NULL, '2019-01-17 15:25:43', '2019-01-22 16:55:02');
INSERT INTO `st_resource` VALUES (10, 9, NULL, 'tinymce', 'tinymce', '富文本编辑', 'edit', 'TinymceDemo', '/views/components-demo/tinymce', 2, 2, 0, NULL, 1, 1, NULL, '2019-01-17 15:26:18', '2019-01-22 16:49:44');
INSERT INTO `st_resource` VALUES (11, 9, NULL, 'json-editor', 'markdown', 'json编辑器', 'jsfiddle', 'JsonEditorDemo', '/views/components-demo/jsonEditor', 2, 3, 0, NULL, 1, 1, NULL, '2019-01-17 15:27:00', '2019-01-22 16:49:55');
INSERT INTO `st_resource` VALUES (12, 13, NULL, 'resource', 'systemResource', '资源管理', 'th-list', 'systemResource', '/views/system/resource', 2, 3, 0, NULL, 1, 1, NULL, '2019-01-21 11:25:00', '2019-01-22 16:55:27');
INSERT INTO `st_resource` VALUES (13, 0, NULL, '/permissions', 'permissions', '权限管理', 'drivers-license-o', 'Layout', NULL, 1, 0, 0, NULL, 1, 0, '/permissions/admin', '2019-01-21 17:39:26', '2019-01-22 16:40:00');
INSERT INTO `st_resource` VALUES (14, 1, NULL, 'logs', 'systemLogs', '日志管理', 'tasks', 'systemLogs', NULL, 2, NULL, 0, NULL, 1, 1, NULL, '2019-01-21 17:42:46', '2019-01-22 14:25:56');
INSERT INTO `st_resource` VALUES (15, 13, NULL, 'interface', 'systemInterface', '接口管理', 'paper-plane', 'systemInterface', NULL, 2, 4, 0, NULL, 1, 1, NULL, '2019-01-21 18:21:07', '2019-01-22 16:48:03');
INSERT INTO `st_resource` VALUES (16, 1, NULL, 'icon', 'Icons', '自定义图标', 'fonticons', 'svgIcon', NULL, 2, NULL, 0, NULL, 1, 1, NULL, '2019-01-22 11:24:40', '2019-01-23 10:21:50');
INSERT INTO `st_resource` VALUES (17, 1, NULL, 'sensitive', 'systemSensitive', '敏感词管理', 'list-ol', 'systemSensitive', NULL, 2, NULL, 0, NULL, 1, 1, NULL, '2019-01-22 11:31:57', '2019-01-22 16:43:35');
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
INSERT INTO `st_role` VALUES (1, 'admin', 'R_ADMIN', '管理员', '1', '2019-01-10 17:21:04', '2019-01-11 12:16:29');
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
INSERT INTO `st_role_resource` VALUES (4, 1, '13,2,4,12,15,1,14,16,17,9,10,11', '2,4,12,15,14,16,17,10,11', '2019-01-18 10:43:14', '2019-01-22 17:58:08');
INSERT INTO `st_role_resource` VALUES (6, 2, '13,2,4,12,15', '2,4,12,15', '2019-01-18 11:19:05', '2019-01-22 11:17:00');
INSERT INTO `st_role_resource` VALUES (7, 3, '9,11', '11', '2019-01-18 11:19:11', '2019-01-23 16:13:41');
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
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='角色用户关联表';

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
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='敏感词管理表';

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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='敏感词类型表';

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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='用户表';

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
INSERT INTO `st_users` VALUES (7, '6091b239c9aa4691a87fffbd83f22035', 'admin', 'admin@163.com', '$2a$10$N2pFr5D3C/7yslaJDvuU3OH4NMhLPtjQAZ.AJmxCd0o39r3jwqsqC', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', '13412345679', 0, '1', '1', '127.0.0.1', '2019-01-23 10:06:01', '2019-01-02 12:33:05', '2019-01-23 10:06:01', NULL);
INSERT INTO `st_users` VALUES (8, '8b7ea0c1d164484b90e9baeb3a6c37d1', 'SDF', '1923432@QQ.com', '$2a$10$ZjjDdjqA4RrUg6WQTqVQ8eqDLoW4HXOCsk7XEZM5CYmbFjNY5fI/a', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', NULL, 0, '2', '2', NULL, NULL, '2019-01-02 16:54:18', '2019-01-02 16:54:18', '2019-01-03 17:34:48');
INSERT INTO `st_users` VALUES (9, 'a7600f5e9f1e415b8ae5958992550612', 'SDF', '1923D432@QQ.com', '$2a$10$2hUK/gJ1vp/1eZnfFuVVpeqaTej99h3SCXCTuPkjzBLOP73YzN2xe', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', NULL, 0, '2', '2', NULL, NULL, '2019-01-02 16:57:56', '2019-01-02 16:57:56', NULL);
INSERT INTO `st_users` VALUES (10, '6bd9b0e7dcec46398bc29ff2788ded75', 'SDF', 'qw432@QQ.com', '$2a$10$rTuzWjqv5wNtWIsY61B/v.eRV/Qz.jnsCV90e84yyULOl.whFacTK', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', NULL, 0, '2', '2', NULL, NULL, '2019-01-02 17:15:46', '2019-01-02 17:15:46', '2019-01-04 18:14:29');
INSERT INTO `st_users` VALUES (11, '85cb7570f0cc4dbcb2a5419d7a32102f', 'SDF', '12432@QQ.com', '$2a$10$e53S/pmcP76xNg.cydSw/uJ1a6AByETrexcTp6yhhbYZnPukUM0kG', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', NULL, 0, '2', '2', NULL, NULL, '2019-01-02 17:17:04', '2019-01-02 17:17:04', '2019-01-04 16:23:02');
INSERT INTO `st_users` VALUES (12, '59ae834af76a43dc8219eb70728159ca', 'benson---', '12121212@QQ.com', '$2a$10$DrLtTXJGpn8Z6mjtX023Ye4BJMoYuOJOOfOnyJGMavi5paoAVTmWa', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', NULL, 0, '2', '2', NULL, NULL, '2019-01-02 17:19:45', '2019-01-02 17:19:45', '2019-01-04 18:14:35');
INSERT INTO `st_users` VALUES (13, '4e52275cf8944a64a74b037eb1a3ddd5', 'Benson', 'Q332@QQ.com', '$2a$10$CVi3A4sKSBXAKRmhnot5uOjLlpl7p0aPUJUUXG8E4.u.VQwVbAxvu', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', NULL, 0, '2', '2', '127.0.0.1', '2019-01-03 10:38:44', '2019-01-02 17:21:38', '2019-01-03 10:38:44', NULL);
INSERT INTO `st_users` VALUES (14, '642156efcd2d4625a5e013ba2f1da111', '中国人', 'chadnfer@QQ.com', '', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', NULL, 2, '1', '2', NULL, NULL, '2019-01-02 17:59:04', '2019-01-04 16:05:51', '2019-01-04 18:12:28');
INSERT INTO `st_users` VALUES (15, 'e41f7647afde40a5b8ab4f2553122d23', 'SDFsd', 'sdfsdf@QQ.com', '$2a$10$QwTOZsMaN4lclh/4FCDFcefKLPRImU0uIWBw.QPRiJYZOI7pJg/0i', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', NULL, 0, '2', '2', NULL, NULL, '2019-01-02 18:00:26', '2019-01-02 18:00:26', '2019-01-04 15:57:14');
INSERT INTO `st_users` VALUES (16, 'b45961d441ce49ba97ec20b2970c4cce', 'sdf', 'sf@qq.com', '$2a$10$N2pFr5D3C/7yslaJDvuU3OH4NMhLPtjQAZ.AJmxCd0o39r3jwqsqC', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', '13412345678', 1, '1', '1', NULL, NULL, '2019-01-04 15:00:53', '2019-01-04 15:00:53', '2019-01-04 15:05:27');
INSERT INTO `st_users` VALUES (17, '66f03538c6af4e67833a6e5c3c2bbeae', '11111111sdf', 'GUYTTsf@qq.com', '$2a$10$sd.UTgXM7wMewSMOB8I1SegDtJ.sDy43m2KZg/G6ymI2vZoIEz/hW', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', '13412345690', 2, '0', '2', NULL, NULL, '2019-01-04 15:01:30', '2019-01-04 15:01:30', '2019-01-04 16:22:53');
INSERT INTO `st_users` VALUES (18, '5a726bd39b9741999ee0042a5baa59fc', 'sdfasfsa', 'sdfadsd@qq.com', '$2a$10$vpBZ/Xahx7TUB2lqLej1WORWk2lxI/JdLCo9501C.N5kVLrB46khC', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', '13520202043', 1, '2', '1', '127.0.0.1', '2019-01-18 18:31:42', '2019-01-04 15:04:29', '2019-01-18 18:31:42', '2019-01-22 10:29:05');
INSERT INTO `st_users` VALUES (19, '0ab728ee64dc4dddbd3937cf0249c565', 'TPASD', 'Q21345@QQ.COM', '', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', '13412345678', 1, '1', '2', NULL, NULL, '2019-01-04 15:33:04', '2019-01-04 17:41:07', '2019-01-04 18:12:04');
INSERT INTO `st_users` VALUES (20, 'a16a12acd84c4e60a3e4246097fc5127', 'SAFAF在', 'QWEQWE@QQ.COM', '$2a$10$sOyxZSDfsoXx87XTwi.Diuc6HBBm9UHIxLcJEdCpCKfi6gXgICDJO', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', '13434567899', 1, '1', '2', '127.0.0.1', '2019-01-04 16:57:43', '2019-01-04 16:56:56', '2019-01-16 14:40:36', NULL);
INSERT INTO `st_users` VALUES (21, 'fb8479cedf304f09919bb7fdeb665645', 'SDF', 'Q@QQ.COM', '$2a$10$7krgVnPYUgSpcNTit2JowO3eSOwBtWK8kXyr1Hpv/KLvK/GZGJFRK', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', '', 1, '1', '2', NULL, NULL, '2019-01-16 15:53:10', '2019-01-16 15:53:22', NULL);
INSERT INTO `st_users` VALUES (22, '1fa7cd3f18be46618200712f3d2cea4e', 'sadd', 'dd@qq.com', '$2a$10$m4YRfB6NEFK9t8vOPD/SI.Un6Z2ycU1FXjJ.LL1xERA1UpNleBn1G', 'https://avatars1.githubusercontent.com/u/11495223?s=460&v=4', '13412345678', 1, '1', '1', '127.0.0.1', '2019-01-22 10:02:57', '2019-01-22 10:02:25', '2019-01-22 10:02:57', NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
