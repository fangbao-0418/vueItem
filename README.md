# 简介
基于vue+webpack+eslint+vuex+vue-resource框架

# 安装
npm install

# 启动
npm start

# 对src源码进行检查
npm run lint

# 打包
npm run build

#  目录结构说明
* .babelrc 里面配置es6转es5
* .gitignore 是忽略上传git的文件
* .package.json 项目依赖的npm包的列表
* src 里面就是项目的源文件目录
* dist 项目编译打包后文件目录
* webpack.config.js webpack配置文件
* .eslintrc.js ESLINT配置文件
* postcss.config.js postcss配置文件 配置自动补全css前缀

# 源码文件src详解
* components 组件存放目录
* directives 指令存放目录
* filters 过滤器存放目录
* imgs 图片存放目录
* plugins 插件存放目录
* router 路由配置文件
* sass sass文件存放目录
* store store文件存放目录
* util util文件存放目录
* views vue模板存放目录
* app.js vue入口文件
* bus.js 空的 Vue 实例作为中央事件总线
* index.html 入口html模板

# 相关文档参考
* [vue2.0 中文文档](https://cn.vuejs.org/v2/guide/)
* [vue-router 2 中文文档](https://router.vuejs.org/zh-cn/)
* [vuex2.0 中文文档](https://vuex.vuejs.org/zh-cn/)
* [axios github参考文档](https://github.com/mzabriskie/axios)
* [mint-ui 2 使用文档(中文)](http://mint-ui.github.io/docs/#/zh-cn2)

# 其他备注
<p>
因axios在safari存在兼容性暂用vue-resource代替
</p>
