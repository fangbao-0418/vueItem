/*! This file is created by fangbao */
webpackJsonp([6],{

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(295)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(282),
  /* template */
  __webpack_require__(302),
  /* scopeId */
  "data-v-d15b3920",
  /* cssModules */
  null
)
Component.options.__file = "D:\\vueItem\\src\\views\\activityDetail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] activityDetail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d15b3920", Component.options)
  } else {
    hotAPI.reload("data-v-d15b3920", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__(16);



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    WlbHeader: __WEBPACK_IMPORTED_MODULE_0__components__["c" /* WlbHeader */],
    CommentFormModal: __WEBPACK_IMPORTED_MODULE_0__components__["d" /* CommentFormModal */],
    ShareIcon: __WEBPACK_IMPORTED_MODULE_0__components__["e" /* ShareIcon */],
    CommentList: __WEBPACK_IMPORTED_MODULE_0__components__["f" /* CommentList */]
  },
  data() {
    return {
      item: {}
    };
  },
  computed: {
    id() {
      return parseInt(this.$route.params.id);
    }
  },
  created() {
    this.$plugin.loading.show(true, 'full');
    this.$http({
      url: this.$api.api_list,
      method: 'getBbsThreadDetail',
      params: [{
        id: this.id
      }]
    }).then(res => {
      if (res.data.result.code === 0) {
        this.item = res.data.result.data.thread_info;
        this.$plugin.loading.show(false);
      } else {
        this.$router.replace({ name: 'index' });
      }
    });
  }
});

/***/ }),

/***/ 295:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.item.users) ? _c('div', {
    staticClass: "view"
  }, [_c('wlb-header', [_c('span', {
    slot: "title"
  }, [_vm._v("活动详情")]), _vm._v(" "), _c('share-icon', {
    slot: "right"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "detail-block bg-color-white"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.item.title))]), _vm._v(" "), _c('div', {
    staticClass: "topic-infos mt-10"
  }, [_c('span', {
    staticClass: "author"
  }, [_vm._v(_vm._s(_vm.item.users.nickname))]), _vm._v(" | "), _c('span', {
    staticClass: "pubdate"
  }, [_vm._v(_vm._s(_vm.item.updated_at))])]), _vm._v(" "), _c('p', {
    staticClass: "content mt-45"
  }, [_vm._v(_vm._s(_vm.item.content))])]), _vm._v(" "), _c('comment-list', {
    attrs: {
      "id": _vm.id
    }
  }), _vm._v(" "), _c('comment-form-modal', {
    attrs: {
      "id": _vm.id
    }
  })], 1) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d15b3920", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=6.ca70214e664e4e7b9243.js.map