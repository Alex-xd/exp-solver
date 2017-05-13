# there-are-lots-of-people-in-Baiyun-airport

# 项目已重构  忽略这份readme里的内容！

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## 开发任务

### 0.所需素材

- 图标 [戳这里](https://material.io/icons/#ic_pause_circle_outline)

- 样式和组件模板 [戳这里](http://fezvrasta.github.io/bootstrap-material-design/bootstrap-elements.html)

- echarts模板 [戳这里](http://echarts.baidu.com/examples.html)

### 1.时间线进度条

要求：

1. 默认自动播放（为了展示效果，每2.5秒更新一次数据，对应现实中的10分钟）
2. 可拖动，跳致相应时间点，同时暂停播放
3. 要区分时间段：`已过去的时间 ~ 当前点`，`当前点 ~ 未来1小时`，`未来1小时 ~ 正无穷`

备注：现在有18个时间点的数据，每个间隔10分钟，也就是3个小时的数据。 我们系统假设能预测未来1小时的数据，那么时间条可拖动的范围就是`已过去的时间 ~ 未来1小时`，另外因为数据有限，做不到正无穷，所以数据到头就回到初始，制造一种有实时数据更新的假象。

### 2.报警系统👮

要求：

1. 每次数据更新时需收集每个区域（共8个区域）的人数总和，实时更新到左边的`监控面板`中
2. 当某区域的人数超过设定的阈值时，改变显示状态，分两级（warning和danger），danger时标题需标红
3. 在warning和danger状态下的区块可以点击采取相应措施，如![1](./screenShots/Screen Shot 2017-03-17 at 00.50.26.png)，点击后弹窗提示成功。
4. warning状态下有一个`提升警戒等级`操作需实现
5. 点击面板上的某区块，就将视口移动到地图对应区块中央

### 3.图表数据统计📈

要求

1. 点击navbar上的`数据统计`，就显示一个面板，面板上有各种图表，实时显示当前机场的各项数据指标（每个区域的人流分布情况、历史人数变化曲线、各个区域的人数占比。。。等等）
1. 使用echarts，每次数据更新时同步更新图表


### 4.地图交互

要求

1. 点击地图上的某区块，弹出一个小面板，上面有一个简单的图表，x轴是时间（过去的时间 ~ 未来1小时），y轴是该区域人流量
2. 样式和组件模板[戳这里](http://fezvrasta.github.io/bootstrap-material-design/bootstrap-elements.html)
3. echarts模板[戳这里](http://echarts.baidu.com/examples.html)






## 项目结构
```
.
├── LICENSE
├── README.md
├── build   // webpack构建基本配置
├── config  // webpack构建自定义配置
├── distribute.sh   // 一件打包发布至服务器脚本
├── favicon.ico
├── index.html
├── package.json
├── screenShots
├── src
│   ├── App.vue     // 根组件
│   ├── api         // 数据ORM
│   │   ├── apiList.js  // API清单
│   │   ├── index.js
│   │   └── mock        // 模拟数据
│   │       └── index.js
│   ├── assets          // 静态资源（被打包的）
│   ├── components      // 通用组件
│   │   ├── dialog // 弹窗组件
│   │   │   └── index.vue
│   │   └── mainPage // 页面通用模板
│   │       └── index.vue
│   ├── config      // 分别配置开发环境和发布环境变量
│   ├── main.js     // 入口文件
│   ├── pages       // 页面划分
│   │   ├── login   // 登录页
│   │   │   ├── index.vue
│   │   │   ├── signIn.vue
│   │   │   └── signUp.vue
│   │   └── main    // 主页
│   │       ├── carousel    // 轮播组件
│   │       │   └── index.vue
│   │       ├── index.vue   // 主页入口组件
│   │       ├── sharePlatform   // 共享平台
│   │       │   ├── rentIn.vue
│   │       │   ├── rentOut.vue
│   │       │   ├── searchCar.vue
│   │       │   ├── searchGoods.vue
│   │       │   ├── shareCar.vue
│   │       │   └── shareDepot.vue
│   │       ├── transportation  // 运输
│   │       │   ├── cBusiness.vue
│   │       │   ├── cBusinessDetail
│   │       │   │   └── index.vue
│   │       │   ├── recommendPath.vue
│   │       │   ├── transportDetail
│   │       │   │   └── index.vue
│   │       │   └── transportRecord.vue
│   │       └── wareHouse   // 仓储
│   │           ├── constructionPlan.vue
│   │           ├── goodsDetail
│   │           │   └── index.vue
│   │           └── goodsRecord.vue
│   ├── router  // 路由
│   ├── store   // vuex状态管理
│   │   ├── actions.js
│   │   ├── getters.js
│   │   ├── index.js
│   │   ├── mutation-types.js
│   │   └── mutations.js
│   ├── styles  // 通用样式（在App.vue根组件里面导入的）
│   │   ├── global.scss
│   │   ├── index.scss
│   │   ├── media-queries.scss
│   │   ├── reset.scss
│   │   └── vars.scss // 全局css变量
│   └── utils   // 处理特定业务模块js
│       ├── auth.js
│       ├── constants.js
│       ├── dialog.js
│       ├── formateDate.js
│       └── globalConfig.js // 导入全局配置
├── static // 静态资源（不被打包的）
├── test // 测试
│   ├── api // 接口测试
│   ├── e2e
│   └── unit
└── yarn.lock

37 directories, 112 files

```

## 开发

### 开发前准备

`git clone git@github.com:Alex-xd/there-are-lots-of-people-in-Baiyun-airport.git`

`npm install` 或 `yarn install`

`npm run init`

### 本地开发

`npm run dev`

### 提交更改

使用[commitizen](http://commitizen.github.io/cz-cli/)提交更改

提交代码时执行`git add .` & `npm run commit` & `git push`

### 打包发布

`npm run build`


## LICENSE

Apache 2.0
