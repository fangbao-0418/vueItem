const Index = resolve => require(['../views/index'], resolve)
// import Index from '../views/index.vue'
const TopicDetail = resolve => require(['../views/topicDetail'], resolve)
const TopicAdd = resolve => require(['../views/topicAdd'], resolve)
export default {
// mode: 'history',
  routes: [
    {path: '/', component: Index},
    {path: '/topic/add', name: 'topicAdd', component: TopicAdd},
    {path: '/topic/detail/:id', name: 'topicDetail', component: TopicDetail}
  ]
}
