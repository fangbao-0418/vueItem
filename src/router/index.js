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
export default {
// mode: 'history',
  routes: [
    {path: '/', component: Index},
    {path: '/topic/add', name: 'topicAdd', component: TopicAdd},
    {path: '/topic/detail/:id', name: 'topicDetail', component: TopicDetail},
    {path: '/activities', name: 'activities', component: Activities},
    {path: '/person', name: 'person', component: Person},
    {path: '/person/news', name: 'personNews', component: PersonNews},
    {path: '/person/topics', name: 'personTopics', component: PersonTopics},
    {path: '/person/task', name: 'personTask', component: PersonTask},
    {path: '/person/infoedit', name: 'personInfoEdit', component: PersonInfoEdit}
  ]
}
