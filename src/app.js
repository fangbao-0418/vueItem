import Vue from 'vue'
import VueRouter from 'vue-router'

import routerConfig from './router' // 路由配置文件
import cookie from 'js-cookie'
import plugins from './plugins/install' // 全局插件
import store from './store'

import './util/common' // 执行全局方法
import { wlb } from './util'

Vue.use(plugins) // 安装插件
Vue.use(VueRouter) // 安装路由

const router = new VueRouter(routerConfig)
router.beforeEach((to, from, next) => {
  wlb.ready({
    app (mixins) {
      mixins.firstLoadWebView({ name: to.meta.name || 'wanglishequ' })
      mixins.sendUserInfo((result) => {
        const sessionid = result.sessionid
        const splitArray = sessionid.split(';')
        for (let key in splitArray) {
          let split = splitArray[key].split('=')
          cookie.set(split[0], split[1], { path: '/', domain: '.wanglibao.com' })
        }
        next()
      })
    },
    other () {
      next()
    }
  })
})
new Vue({
  router,
  store
}).$mount('#root')
