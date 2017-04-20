import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './router' // 路由配置文件
import './sass/app'
import './util/reset'
import Jsonrpc from './util/jsonrpc'
console.log(Jsonrpc)
Vue.use(Jsonrpc)
Vue.use(VueRouter)
const router = new VueRouter(routerConfig)
new Vue({
  router
}).$mount('#root')
