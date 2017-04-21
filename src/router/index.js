const Index = resolve => require(['../views/index'], resolve)
// import Index from '../views/index.vue'
console.log(Index)
const TopicDetail = resolve => require(['../views/topicDetail'], resolve)
console.log(TopicDetail)
export default {
// mode: 'history',
  routes: [
    {path: '/', component: Index},
    {path: '/topic/detail/:id', name: 'topicDetail', component: TopicDetail}
  ]
}
