import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './router' // 路由配置文件
import './sass/index'
import VueResource from 'vue-resource'
import store from './store'
Vue.use(VueResource)
Vue.use(VueRouter)
const router = new VueRouter(routerConfig)

new Vue({
  router,
  store
}).$mount('#root')
