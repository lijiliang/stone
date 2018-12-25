## Model 模型使用

### 数据检索/查找器

#### find - 搜索数据库中的一个特定元素
```js
// 搜索已知的ids
Project.findById(123).then(project => {
  // project 将是 Project的一个实例，并具有在表中存为 id 123 条目的内容。
  // 如果没有定义这样的条目，你将获得null
})

// 搜索属性
Project.findOne({ where: {title: 'aProject'} }).then(project => {
  // project 将是 Projects 表中 title 为 'aProject'  的第一个条目 || null
})


Project.findOne({
  where: {title: 'aProject'},
  attributes: ['id', ['name', 'title']]
}).then(project => {
  // project 将是 Projects 表中 title 为 'aProject'  的第一个条目 || null
  // project.title 将包含 project 的 name
})
```

#### findOrCreate - 搜索特定元素或创建它（如果不可用）
```js
User
  .findOrCreate({where: {username: 'sdepold'}, defaults: {job: 'Technical Lead JavaScript'}})
  .spread((user, created) => {
    console.log(user.get({
      plain: true
    }))
    console.log(created)

    /*
    findOrCreate 返回一个包含已找到或创建的对象的数组，找到或创建的对象和一个布尔值，如果创建一个新对象将为true，否则为false，像这样:

    [ {
        username: 'sdepold',
        job: 'Technical Lead JavaScript',
        id: 1,
        createdAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET),
        updatedAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET)
      },
      true ]

在上面的例子中，".spread" 将数组分成2部分，并将它们作为参数传递给回调函数，在这种情况下将它们视为 "user" 和 "created" 。（所以“user”将是返回数组的索引0的对象，并且 "created" 将等于 "true"。）
    */
  })
```

#### findAndCountAll - 在数据库中搜索多个元素，返回数据和总计数

这是一个方便的方法，它结合了 findAll 和 count（见下文），当处理与分页相关的查询时，这是有用的，你想用 limit 和 offset 检索数据，但也需要知道总数与查询匹配的记录数：

处理程序成功将始终接收具有两个属性的对象：

- count - 一个整数，总数记录匹配where语句和关联的其它过滤器
- rows - 一个数组对象，记录在limit和offset范围内匹配where语句和关联的其它过滤器，

```js
Project
  .findAndCountAll({
     where: {
        title: {
          [Op.like]: 'foo%'
        }
     },
     offset: 10,
     limit: 2
  })
  .then(result => {
    console.log(result.count);
    console.log(result.rows);
  });
```

#### findAll - 搜索数据库中的多个元素
```js
// 找到多个条目
Project.findAll().then(projects => {
  // projects 将是所有 Project 实例的数组
})

// 也可以：
Project.all().then(projects => {
  // projects 将是所有 Project 实例的数组
})

// 搜索特定属性 - 使用哈希
Project.findAll({ where: { name: 'A Project' } }).then(projects => {
  // projects将是一个具有指定 name 的 Project 实例数组
})

// 在特定范围内进行搜索
Project.findAll({ where: { id: [1,2,3] } }).then(projects => {
  // projects将是一系列具有 id 1,2 或 3 的项目
  // 这实际上是在做一个 IN 查询
})

Project.findAll({
  where: {
    id: {
      [Op.and]: {a: 5},           // 且 (a = 5)
      [Op.or]: [{a: 5}, {a: 6}],  // (a = 5 或 a = 6)
      [Op.gt]: 6,                // id > 6
      [Op.gte]: 6,               // id >= 6
      [Op.lt]: 10,               // id < 10
      [Op.lte]: 10,              // id <= 10
      [Op.ne]: 20,               // id != 20
      [Op.between]: [6, 10],     // 在 6 和 10 之间
      [Op.notBetween]: [11, 15], // 不在 11 和 15 之间
      [Op.in]: [1, 2],           // 在 [1, 2] 之中
      [Op.notIn]: [1, 2],        // 不在 [1, 2] 之中
      [Op.like]: '%hat',         // 包含 '%hat'
      [Op.notLike]: '%hat',       // 不包含 '%hat'
      [Op.iLike]: '%hat',         // 包含 '%hat' (不区分大小写)  (仅限 PG)
      [Op.notILike]: '%hat',      // 不包含 '%hat'  (仅限 PG)
      [Op.overlap]: [1, 2],       // && [1, 2] (PG数组重叠运算符)
      [Op.contains]: [1, 2],      // @> [1, 2] (PG数组包含运算符)
      [Op.contained]: [1, 2],     // <@ [1, 2] (PG数组包含于运算符)
      [Op.any]: [2,3],            // 任何数组[2, 3]::INTEGER (仅限 PG)
    },
    status: {
      [Op.not]: false,           // status 不为 FALSE
    }
  }
})
```

#### 复合过滤 / OR / NOT 查询
你可以使用多层嵌套的 AND，OR 和 NOT 条件进行一个复合的 where 查询。 为了做到这一点，你可以使用 or ， and 或 not 运算符:
```js
Project.findOne({
  where: {
    name: 'a project',
    [Op.or]: [
      { id: [1,2,3] },
      { id: { [Op.gt]: 10 } }
    ]
  }
})

Project.findOne({
  where: {
    name: 'a project',
    id: {
      [Op.or]: [
        [1,2,3],
        { [Op.gt]: 10 }
      ]
    }
  }
})

// 这两段代码将生成以下内容：

SELECT *
FROM `Projects`
WHERE (
  `Projects`.`name` = 'a project'
   AND (`Projects`.`id` IN (1,2,3) OR `Projects`.`id` > 10)
)
LIMIT 1;
```

#### 用限制，偏移，顺序和分组操作数据集
```js
// 限制查询的结果
Project.findAll({ limit: 10 })

// 跳过前10个元素
Project.findAll({ offset: 10 })

// 跳过前10个元素，并获取2个
Project.findAll({ offset: 10, limit: 2 })
```

分组和排序的语法是相同的，所以下面只用一个单独的例子来解释分组，而其余的则是排序。 您下面看到的所有内容也可以对分组进行
```js
Project.findAll({order: 'title DESC'})
// 生成 ORDER BY title DESC

Project.findAll({group: 'name'})
// 生成 GROUP BY name
```

请注意，在上述两个示例中，提供的字符串逐字插入到查询中，所以不会转义列名称。 当你向 order / group 提供字符串时，将始终如此。 如果要转义列名，您应该提供一个参数数组，即使您只想通过单个列进行 order / group
```js
something.findOne({
  order: [
    // 将返回 `name`
    ['name'],
    // 将返回 `username` DESC
    ['username', 'DESC'],
    // 将返回 max(`age`)
    sequelize.fn('max', sequelize.col('age')),
    // 将返回 max(`age`) DESC
    [sequelize.fn('max', sequelize.col('age')), 'DESC'],
    // 将返回 otherfunction(`col1`, 12, 'lalala') DESC
    [sequelize.fn('otherfunction', sequelize.col('col1'), 12, 'lalala'), 'DESC'],
    // 将返回 otherfunction(awesomefunction(`col`)) DESC，这个嵌套是可以无限的！
    [sequelize.fn('otherfunction', sequelize.fn('awesomefunction', sequelize.col('col'))), 'DESC']
  ]
})
```

#### count - 计算数据库中元素的出现次数
还有一种数据库对象计数的方法：
```js
Project.count().then(c => {
  console.log("There are " + c + " projects!")
})

Project.count({ where: {'id': {[Op.gt]: 25}} }).then(c => {
  console.log("There are " + c + " projects with an id greater than 25.")
})
```