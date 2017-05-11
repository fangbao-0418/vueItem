import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './router' // 路由配置文件
import { wlb } from './util'
import cookie from 'js-cookie'
import './sass/app'
import 'mint-ui/lib/style'
import 'swiper/dist/css/swiper'

import './util/reset'
import plugins from './plugins/install'
import store from './store'
Vue.use(plugins)
Vue.use(VueRouter)
const router = new VueRouter(routerConfig)
router.beforeEach((to, from, next) => {
  wlb.ready({
    app (mixins) {
      mixins.sendUserInfo((result) => {
        const sessionid = result.sessionid
        const splitArray = sessionid.split(';')
        for (let key in splitArray) {
          let split = splitArray[key].split('=')
          cookie.set(split[0], split[1], { path: '/', domain: '.wanglibao.com' })
        }
        alert('new' + JSON.stringify(cookie.get()))
        next()
      })
    },
    other () {
      alert('new' + JSON.stringify(cookie.get()))
      next()
    }
  })
  next()
})
new Vue({
  router,
  store
}).$mount('#root')
