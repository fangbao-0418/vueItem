import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './router' // 路由配置文件
import './sass/app'
import 'mint-ui/lib/style'
import 'swiper/dist/css/swiper'
import './util/reset'
import util from './util'
import Jsonrpc from './util/jsonrpc'
import store from './store'
Vue.use(util)
Vue.use(Jsonrpc)
Vue.use(VueRouter)
const router = new VueRouter(routerConfig)
new Vue({
  router,
  store
}).$mount('#root')
