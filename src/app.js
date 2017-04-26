import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './router' // 路由配置文件
import './sass/app'
import 'mint-ui/lib/style'
import 'swiper/dist/css/swiper'
import './util/reset'
import util from './util'
import Jsonrpc from './util/jsonrpc'
Vue.use(util)
console.log(Jsonrpc)
Vue.use(Jsonrpc)
Vue.use(VueRouter)
const router = new VueRouter(routerConfig)
new Vue({
  router
}).$mount('#root')
