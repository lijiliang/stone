## 常用api
- findAll() 查询多条数据
- findAndCount() 分页查询
- findAndCountAll() 查询
- findById() 通过id查询单条数据
- findOne() 通过条件查询单条数据
- create() 创建保存新实例
- bulkCreate() 创建多条记录
- count() 统计查询结果数
- destroy() 删除记录
- update() 更新记录

- max() 查询最大值
- min() 查询最小值
- sum() 求和
- build() 创建新实例
- findOrInitialize() 查询或初始化
- findOrCreate() 查询或创建
- findCreateFind() 查找或创建
- upsert() 创建或更新
- restore() 恢复记录
- describe() 查找表信息

## 模型(表)ppuj之间的关联关系
User.hasOne(Project)

User模型是source,Project模型(作为参数传递的模型)是target

## 模型(表)之间的关联关系-4种关联关系
- hasOne - 与目标模型建立1：1关联关系，关联关系（外键）存在于 `target` 模型中
- belongsTo - 与目标模型建立1：1关联关系，关联关系（外键）存在于 `source` 模型中
- hasMany - 与目标模型建立1：N关联关系，关联关系（外键）存在于 `target` 模型中
- belongsToMany - 与目标模型建立N：M关联关系，会通过`sourceid`和`targetid` 创建交叉表


关于Sequelize连接查询时inlude中model和association的区别详解
https://www.jb51.net/article/106782.htm