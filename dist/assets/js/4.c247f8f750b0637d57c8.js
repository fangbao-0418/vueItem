/*! This file is created by fangbao */
webpackJsonp([4],{

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(292)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(284),
  /* template */
  __webpack_require__(299),
  /* scopeId */
  "data-v-60b05405",
  /* cssModules */
  null
)
Component.options.__file = "D:\\vueItem\\src\\views\\person.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] person.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60b05405", Component.options)
  } else {
    hotAPI.reload("data-v-60b05405", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(46);





/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      items: [{
        code: 'MY-NEWS',
        title: '我的消息',
        flag: 'my-message',
        to: { name: 'personNews' }
      }, {
        code: 'MY-POST',
        title: '我的帖子',
        flag: 'my-post',
        to: { name: 'personTopics' }
      }, {
        code: 'MY-TASK',
        title: '我的任务',
        flag: 'my-task',
        to: { name: 'personTask' }
      }]
    };
  },
  created() {
    this.$store.dispatch('fetchPersonPageData');
  },
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapState */])({
    unreadStatus(state) {
      return state.profile.unreadStatus;
    }
  })),
  components: {
    WlbHeader: __WEBPACK_IMPORTED_MODULE_1__components__["c" /* WlbHeader */],
    UserBrieflyShow: __WEBPACK_IMPORTED_MODULE_1__components__["n" /* UserBrieflyShow */],
    SectionItem: __WEBPACK_IMPORTED_MODULE_1__components__["o" /* SectionItem */]
  }
});

/***/ }),

/***/ 292:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "view"
  }, [_c('wlb-header', [_c('span', {
    slot: "title"
  }, [_vm._v("个人中心")]), _vm._v(" "), _c('router-link', {
    staticClass: "person-info-eidt-icon fr",
    attrs: {
      "to": {
        name: 'personInfoEdit'
      }
    },
    slot: "right"
  })], 1), _vm._v(" "), _c('user-briefly-show'), _vm._v(" "), _c('div', {
    staticClass: "section mt-20 bg-color-white"
  }, _vm._l((_vm.items), function(item) {
    return _c('section-item', {
      key: item.code,
      attrs: {
        "to": item.to
      }
    }, [_c('span', {
      staticClass: "fl",
      class: ['list-img mr-33', item.flag],
      slot: "image"
    }), _vm._v(" "), _c('span', {
      staticClass: "list-des fl",
      domProps: {
        "textContent": _vm._s(item.title)
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "list-right fr",
      slot: "right"
    }, [_c('span', {
      staticClass: "right-icon fr"
    }), _vm._v(" "), (item.code === 'MY-NEWS' && _vm.unreadStatus) ? _c('span', {
      staticClass: "right-news fr"
    }) : _vm._e()])])
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-60b05405", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=4.c247f8f750b0637d57c8.js.map