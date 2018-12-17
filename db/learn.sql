-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `userId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `avatarUrl` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `mobile` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `prefix` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `sex` varchar(1) DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime NOT NULL,
  `abstract` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES (3, 'cbd6eb6093e74c7290aad936e8a9a2cd', 'shawzhou', '466150516@qq.com', '111111', 'http://piyhxgz90.bkt.clouddn.com/1543653964188头像.jpg', NULL, '86', '男', '2018-12-01 08:45:12', '2018-12-01 08:46:09', '我是一个球员');
INSERT INTO `users` VALUES (4, 'e51c2d2e4366433fb35f017c69468149', 'woshishui', 'codingzx@gmail.com', '111111', 'http://piyhxgz90.bkt.clouddn.com/1543654269146风景.jpg', NULL, '86', '男', '2018-12-01 08:47:47', '2018-12-01 08:52:30', '风景专家');
INSERT INTO `users` VALUES (5, 'daabb0b0a90244a5b3204ac6779708dc', 'wuwan', 'wuwantian@gmail.com', '111111', 'http://piyhxgz90.bkt.clouddn.com/15436544923382531170_182711296228_2.jpg', NULL, '86', '女', '2018-12-01 08:52:49', '2018-12-01 08:54:58', NULL);
INSERT INTO `users` VALUES (7, 'asdfasdgyqwtjfdk;gjaslgjsdf234', 'benson', 'bli@11.com', '123456', 'http://piyhxgz90.bkt.clouddn.com/1543654269146风景.jpg', '13512345678', NULL, '男', NULL, '2018-11-21 09:10:39', '码农');
INSERT INTO `users` VALUES (8, 'asdfasdgyqwtjfdk;gjaslgjsdf', 'li.banern', 'liang-asdf@w163.com', '123456', 'http://piyhxgz90.bkt.clouddn.com/1543654269146风景.jpg', '13512345678', NULL, '男', NULL, '2018-12-17 16:42:37', 'egg.js,node.js,后端开发,前端开发');
INSERT INTO `users` VALUES (9, 'asdfasdgyqwtjfdk;gjaslgjsdfasdfs', 'li.banern', 'liang@w163.com', '123456', 'http://piyhxgz90.bkt.clouddn.com/1543654269146风景.jpg', '13512345678', NULL, '男', NULL, '2018-12-17 16:03:01', 'egg.js,node.js,后端开发,前端开发');
COMMIT;