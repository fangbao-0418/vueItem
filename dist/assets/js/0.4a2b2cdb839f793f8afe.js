/*! This file is created by fangbao */
webpackJsonp([0],{575:function(t,e,o){o(599);var a=o(5)(o(585),o(610),"data-v-70c715a8",null);a.options.__file="/Users/gaoyanru/Documents/wanglibao/BBS/src/views/index.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t}),a.options.functional,t.exports=a.exports},585:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(201),i=function(t){return t&&t.__esModule?t:{default:t}}(a),r=o(134),n=o(90),s=o(135);e.default={components:{ScrollWrapper:r.ScrollWrapper,WlbHeader:r.WlbHeader,UserBrieflyShow:r.UserBrieflyShow,WlbTabContainer:r.WlbTabContainer,TabContainerItem:n.TabContainerItem,PublicCommentIcon:r.PublicCommentIcon,TopicItem:r.TopicItem,TitleBarOne:r.TitleBarOne,SliderBlockOne:r.SliderBlockOne,Loadmore:r.Loadmore,NoMore:r.NoMore},computed:(0,i.default)({},(0,s.mapGetters)({initialNavBarOptions:"doneTopicBoards",initialActive:"initialActive"}),(0,s.mapState)({ThreadTopList:function(t){return t.topic.ThreadTopList},homeDataLoaded:function(t){return t.topic.homeDataLoaded},ThreadList:function(t){return t.topic.ThreadList}}),{loginStatus:function(){return this.$store.state.profile.loginStatus},currentIndex:function(){return this.$store.state.topic.navbar_select_index},allLoaded:function(){return this.$store.state.topic.bbsHomeallLoadedInfo}}),created:function(){this.$store.dispatch("fetchBbsHomeData")},mounted:function(){},methods:{tabId:function(t){return"tab-container"+(parseInt(t)+1)},loadTop:function(){var t=this;this.$refs["loadmore_"+this.currentIndex]&&(this.$store.dispatch("bbsHomePageSetLoaded",!1),this.$store.dispatch("updateTopicListData",{page:1,refresh:!0,cb:function(){t.$refs["loadmore_"+t.currentIndex][0].$children[0].onTopLoaded()}}))},loadBottom:function(){var t=this;this.$refs["loadmore_"+this.currentIndex]&&!1===t.allLoaded[t.currentIndex]&&(this.$store.dispatch("bbsHomePageSetLoaded",!1),this.$store.dispatch("updateTopicListData",{cb:function(){t.$refs["loadmore_"+t.currentIndex][0].$children[0].onBottomLoaded()}}))}}}},599:function(t,e){},602:function(t,e,o){t.exports=o.p+"imgs/no-topic-icon.a03080e.png"},610:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"view"},[a("wlb-header",{attrs:{options:{title:"网利社区",rightConfigs:[{type:"share",options:{title:"网利社区"}}]}}}),t._v(" "),a("scroll-wrapper",[a("user-briefly-show"),t._v(" "),a("div",{staticClass:"container mt-20"},[a("wlb-tab-container",{attrs:{"initial-nav-bar-options":t.initialNavBarOptions,"initial-active":t.initialActive}},t._l(t.initialNavBarOptions,function(e,i){return a("tab-container-item",{key:i,class:"tab-container"+parseInt(parseInt(i)+1),attrs:{id:t.tabId(i)}},[t.ThreadList.length>0&&t.ThreadList[i].length>0||t.ThreadTopList.length>0&&t.ThreadTopList[i].length>0?a("loadmore",{ref:"loadmore_"+i,refInFor:!0,attrs:{"cb-load-top":t.loadTop,"cb-load-bottom":t.loadBottom,"all-loaded":t.allLoaded[i]}},[t.ThreadTopList[i]&&t.ThreadTopList[i].length?a("div",[a("title-bar-one",{attrs:{options:{title:e.title,more:t.ThreadTopList[i].length>=2?"更多":null,targetUrl:{name:"activities",params:{id:e.id}}}}}),t._v(" "),a("slider-block-one",{attrs:{data:t.ThreadTopList[i]}})],1):t._e(),t._v(" "),t.ThreadList[i].length>0?a("topic-item",{attrs:{data:t.ThreadList[i]}}):t._e()],1):t._e(),t._v(" "),t.ThreadList.length>0&&t.ThreadList[i].length>0?a("no-more",{attrs:{visible:t.allLoaded[i]}}):t._e(),t._v(" "),t.ThreadList.length>0&&t.homeDataLoaded[i]&&0===t.ThreadTopList[i].length&&0===t.ThreadList[i].length?a("div",{staticClass:"no-topic"},[a("img",{attrs:{src:o(602),alt:""}}),t._v(" "),a("span",{staticClass:"mt-16"},[t._v("还没有内容哦")])]):t._e(),t._v(" "),a("div",{staticStyle:{height:".1rem"}})],1)}))],1)],1),t._v(" "),a("public-comment-icon")],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});