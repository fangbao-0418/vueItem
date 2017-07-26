import Vue from 'vue'
import VueRouter from 'vue-router'

/* 懒加载路由 */
const Index = resolve => require(['../views/index'], resolve)

Vue.use(VueRouter) // 安装路由

// 权限验证
function requireAuth (to, from, next) {
}

const isPro = process.env.NODE_ENV.trim() === 'production'
const routerConfig = {
  mode: isPro ? 'history' : 'hash',
  base: '/',
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  },
  routes: [
    {path: '/', name: 'index', props: { name: 'name' }, component: Index},
  ]
}
export default new VueRouter(routerConfig)
