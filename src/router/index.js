import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/index'

Vue.use(VueRouter) // 安装路由

const isPro = process.env.NODE_ENV.trim() === 'production'
const routerConfig = {
  mode: isPro ? 'history' : 'hash',
  base: '/',
  routes: [
    { path: '/', component: Index }
  ]
}

export default new VueRouter(routerConfig)
