import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './router' // 路由配置文件
import './sass/index'
import Jsonrpc from './util/jsonrpc.js'
console.log(Jsonrpc)
Vue.use(Jsonrpc)
Vue.use(VueRouter)
const router = new VueRouter(routerConfig)
new Vue({
  router
}).$mount('#root')
