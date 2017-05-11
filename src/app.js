import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './router' // 路由配置文件
import { wlb } from './util'
import cookie from 'js-cookie'
import './sass/app' // sass入口
import 'mint-ui/lib/style'
import 'swiper/dist/css/swiper'

import './util/common' // 执行全局方法
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
        // alert('app beforeEnter' + JSON.stringify(cookie.get()))
        next()
      })
    },
    other () {
      // alert('other beforeEnter' + JSON.stringify(cookie.get()))
      next()
    }
  })
})
new Vue({
  router,
  store
}).$mount('#root')
