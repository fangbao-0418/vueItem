const Index = resolve	=> require(	['../views/index.vue'], resolve)
//	import Index from '../views/index.vue'
console.log(Index)
export default {
	//	mode: 'history',
	routes: [{
    path: "/", component: Index
  }]
}
