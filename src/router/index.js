const Index = resolve => require(['../views/index'], resolve)
// import Index from '../views/index.vue'
console.log(Index)
const TopicDetail = resolve => require(['../views/topicDetail'], resolve)
console.log(TopicDetail)
const Person = resolve => require(['../views/person'], resolve)
console.log(Person)
const PersonEdit = resolve => require(['../views/personEdit'], resolve)
console.log(PersonEdit)
const PersonNews = resolve => require(['../views/personNews'], resolve)
console.log(PersonNews)
export default {
// mode: 'history',
  routes: [
    {path: '/', component: Index},
    {path: '/topic/detail/:id', name: 'topicDetail', component: TopicDetail},
    {path: '/person', name: 'person', component: Person},
    {path: '/person/edit', name: 'personEdit', component: PersonEdit},
    {path: '/person/news', name: 'personNews', component: PersonNews}
  ]
}
