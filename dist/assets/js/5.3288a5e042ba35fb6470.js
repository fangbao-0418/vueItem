/*! This file is created by fangbao */
webpackJsonp([5],{179:function(t,e,s){s(194);var n=s(0)(s(186),s(201),"data-v-60b05405",null);n.options.__file="D:\\vueItem\\src\\views\\person.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t}),n.options.functional,t.exports=n.exports},186:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},o=s(5),r=s(13);e.default={data:function(){return{items:[{code:"MY-NEWS",title:"我的消息",flag:"my-message",to:{name:"personNews"}},{code:"MY-POST",title:"我的帖子",flag:"my-post",to:{name:"personTopics"}},{code:"MY-TASK",title:"我的任务",flag:"my-task",to:{name:"personTask"}}]}},created:function(){this.$store.dispatch("fetchPersonPageData")},computed:n({},(0,r.mapState)({unreadStatus:function(t){return t.profile.unreadStatus}})),components:{WlbHeader:o.WlbHeader,UserBrieflyShow:o.UserBrieflyShow,SectionItem:o.SectionItem}}},194:function(t,e){},201:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"view"},[s("wlb-header",[s("span",{slot:"title"},[t._v("个人中心")]),t._v(" "),s("router-link",{staticClass:"person-info-eidt-icon fr",attrs:{to:{name:"personInfoEdit"}},slot:"right"})],1),t._v(" "),s("user-briefly-show"),t._v(" "),s("div",{staticClass:"section mt-20 bg-color-white"},t._l(t.items,function(e){return s("section-item",{key:e.code,attrs:{to:e.to}},[s("span",{staticClass:"fl",class:["list-img mr-33",e.flag],slot:"image"}),t._v(" "),s("span",{staticClass:"list-des fl",domProps:{textContent:t._s(e.title)}}),t._v(" "),s("span",{staticClass:"list-right fr",slot:"right"},[s("span",{staticClass:"right-icon fr"}),t._v(" "),"MY-NEWS"===e.code&&t.unreadStatus?s("span",{staticClass:"right-news fr"}):t._e()])])}))],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});