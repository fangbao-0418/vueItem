import store from '../store'
// import cookie from 'js-cookie'

const Index = resolve => require.ensure([], () => resolve(require('../views/index')), 'index')
// import Index from '../views/index.vue' // 普通路由加载
// const TopicDetail = resolve => require(['../views/topicDetail'], resolve) // AMD风格代码分块语法
const TopicDetail = resolve => require.ensure([], () => resolve(require('../views/topicDetail')), 'index')
// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
// require.ensure的第一个参数为所需依赖 第三个参数为chunk命名
const TopicAdd = resolve => require.ensure([], () => resolve(require('../views/TopicAdd')), 'index')
const Person = resolve => require(['../views/person'], resolve)
const PersonInfoEdit = resolve => require(['../views/personInfoEdit'], resolve)
const PersonNews = resolve => require(['../views/personNews'], resolve)
const PersonTopics = resolve => require(['../views/personTopics'], resolve)
const PersonTask = resolve => require(['../views/personTask'], resolve)
const Activities = resolve => require(['../views/activityList'], resolve)
const ActivityDetail = resolve => require(['../views/activityDetail'], resolve)
function requireAuth (to, from, next) {
  store.dispatch('fetchBridgeInfo', () => {
    const { mixinList, isApp } = store.state.bridge
    if (isApp) {
      mixinList.firstLoadWebView({ name: to.meta.name })
      store.dispatch('fetchLoginStatus', () => {
        const { loginStatus } = store.state.profile
        if (loginStatus) {
          return next()
        } else {
          return next({
            name: 'index'
          })
        }
      })
      return next()
    } else {
      store.dispatch('fetchLoginStatus', () => {
        const { loginStatus } = store.state.profile
        if (loginStatus) {
          return next()
        } else {
          return next({
            name: 'index'
          })
        }
      })
    }
  })
}
const isPro = process.env.NODE_ENV.trim() === 'production'
export default {
  mode: isPro ? 'history' : 'hash',
  base: '/bbs/',
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  },
  routes: [
    {path: '/', name: 'index', props: { name: 'name' }, component: Index},
    {path: '/topic/add', name: 'topicAdd', meta: { name: '新建帖子' }, component: TopicAdd, beforeEnter: requireAuth},
    {path: '/topic/detail/:id', name: 'topicDetail', component: TopicDetail},
    {path: '/activities/:id', name: 'activities', component: Activities},
    {path: '/activity/detail/:id', name: 'activityDetail', component: ActivityDetail},
    {path: '/person', name: 'person', component: Person, beforeEnter: requireAuth},
    {path: '/person/news', name: 'personNews', component: PersonNews, beforeEnter: requireAuth},
    {path: '/person/topics', name: 'personTopics', component: PersonTopics, beforeEnter: requireAuth},
    {path: '/person/task', name: 'personTask', component: PersonTask, beforeEnter: requireAuth},
    {path: '/person/infoedit', name: 'personInfoEdit', component: PersonInfoEdit, beforeEnter: requireAuth},
    {path: '*', redirect: { name: 'index' }}
  ]
}
