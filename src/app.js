import Vue from 'vue'
import store from './store'
import router from './router'
import './util/common' // 执行全局方法

router.beforeEach((to, from, next) => {
  next()
})
new Vue({
  router,
  store
}).$mount('#root')
