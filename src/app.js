import Vue from 'vue'
import VueRouter from 'vue-router'

import routerConfig from './router' // 路由配置文件
Vue.use(VueRouter)
const router = new VueRouter(routerConfig)
var app = new Vue({
  router
}).$mount('#root')
console.log(app)
