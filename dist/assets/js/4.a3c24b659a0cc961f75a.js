/*! This file is created by fangbao */
webpackJsonp([4],{

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(271)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(263),
  /* template */
  __webpack_require__(278),
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

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(71);

var _extends3 = _interopRequireDefault(_extends2);

var _components = __webpack_require__(11);

var _vuex = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
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
  created: function created() {
    this.$store.dispatch('fetchPersonPageData');
  },

  computed: (0, _extends3.default)({}, (0, _vuex.mapState)({
    unreadStatus: function unreadStatus(state) {
      return state.profile.unreadStatus;
    }
  })),
  components: {
    WlbHeader: _components.WlbHeader,
    UserBrieflyShow: _components.UserBrieflyShow,
    SectionItem: _components.SectionItem
  }
};

/***/ }),

/***/ 271:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 278:
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
//# sourceMappingURL=4.a3c24b659a0cc961f75a.js.map