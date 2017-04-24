const Index = resolve => require(['../views/index'], resolve)
// import Index from '../views/index.vue'
console.log(Index)
const TopicDetail = resolve => require(['../views/topicDetail'], resolve)
console.log(TopicDetail)
const person = resolve => require(['../views/person'], resolve)
console.log(person)
export default {
// mode: 'history',
  routes: [
    {path: '/', component: Index},
    {path: '/topic/detail/:id', name: 'topicDetail', component: TopicDetail},
    {path: '/person/center', name: 'person', component: person}
  ]
}
