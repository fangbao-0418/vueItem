import Vue from 'vue'

import cookie from 'js-cookie' // cookie

import router from './router' // 路由配置文件
import store from './store'
import plugins from './plugins/install' // 全局插件

import './util/common' // 执行全局方法

router.beforeEach((to, from, next) => {
  // 路由进入的时候
})
router.afterEach(route => {
  // 路由离开的是
})
new Vue({
  router,
  store
}).$mount('#root')
