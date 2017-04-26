const Index = resolve => require(['../views/index'], resolve)
// import Index from '../views/index.vue'
const TopicDetail = resolve => require(['../views/topicDetail'], resolve)
const TopicAdd = resolve => require(['../views/topicAdd'], resolve)
const Person = resolve => require(['../views/person'], resolve)
const PersonEdit = resolve => require(['../views/personEdit'], resolve)
const PersonNews = resolve => require(['../views/personNews'], resolve)
const PersonPost = resolve => require(['../views/personPost'], resolve)
export default {
// mode: 'history',
  routes: [
    {path: '/', component: Index},
    {path: '/topic/add', name: 'topicAdd', component: TopicAdd},
    {path: '/topic/detail/:id', name: 'topicDetail', component: TopicDetail},
    {path: '/person', name: 'person', component: Person},
    {path: '/person/edit', name: 'personEdit', component: PersonEdit},
    {path: '/person/news', name: 'personNews', component: PersonNews},
    {path: '/personPost', name: 'personPost', component: PersonPost}
  ]
}
