import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './router' // 路由配置文件
import './sass/app'
import 'mint-ui/lib/style'
import 'swiper/dist/css/swiper'
import './util/reset'
import plugins from './plugins/install'
import store from './store'
import filters from './filters'
Vue.use(plugins)
Vue.use(VueRouter)
const router = new VueRouter(routerConfig)

new Vue({
  router,
  store,
  filters
}).$mount('#root')
