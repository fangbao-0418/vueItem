/*! This file is created by fangbao */
webpackJsonp([0],{

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(268)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(263),
  /* template */
  __webpack_require__(275),
  /* scopeId */
  "data-v-61365189",
  /* cssModules */
  null
)
Component.options.__file = "D:\\vueItem\\src\\views\\personTopics.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] personTopics.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61365189", Component.options)
  } else {
    hotAPI.reload("data-v-61365189", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__(10);



/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      postItems: [],
      page: 1,
      nomore: false
    };
  },
  computed: {
    allLoaded() {
      return this.nomore;
    }
  },
  created() {
    this.$plugin.loading.show(true, 'full');
    this.loadData(() => {
      this.$plugin.loading.show(false);
    });
  },
  methods: {
    loadData(cb) {
      this.$http({
        url: this.$api.api_list,
        method: 'getBbsUserThread',
        params: [{
          pageNum: this.$const.BBS_USER_THREAD_PAGE_NUM,
          page: this.page
        }]
      }).then(res => {
        this.page += 1;
        if (res.data.result.data['last_page'] + 1 >= this.page) {
          if (this.page === 2) {
            this.postItems = res.data.result.data.list;
          } else {
            this.postItems = this.postItems.concat(res.data.result.data.list);
          }
        }
        if (res.data.result.data['last_page'] < this.page) {
          this.nomore = true;
        } else {
          this.nomore = false;
        }
        cb && cb();
      });
    },
    loadTop() {
      this.page = 1;
      this.$plugin.loading.show(true);
      this.loadData(() => {
        this.$plugin.loading.show(false);
        this.$refs.loadmore.$children[0].onTopLoaded();
      });
    },
    loadBottom() {
      this.$plugin.loading.show(true);
      this.loadData(() => {
        this.$plugin.loading.show(false);
        this.$refs.loadmore.$children[0].onBottomLoaded();
      });
    }
  },
  components: {
    WlbHeader: __WEBPACK_IMPORTED_MODULE_0__components__["c" /* WlbHeader */],
    MyTopicItem: __WEBPACK_IMPORTED_MODULE_0__components__["k" /* MyTopicItem */],
    Loadmore: __WEBPACK_IMPORTED_MODULE_0__components__["g" /* Loadmore */],
    NoMore: __WEBPACK_IMPORTED_MODULE_0__components__["h" /* NoMore */]
  }
});

/***/ }),

/***/ 268:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "view"
  }, [_c('wlb-header', [_c('span', {
    slot: "title"
  }, [_vm._v("我的帖子")])]), _vm._v(" "), (_vm.postItems.length) ? _c('loadmore', {
    ref: "loadmore",
    attrs: {
      "cb-load-top": _vm.loadTop,
      "cb-load-bottom": _vm.loadBottom,
      "all-loaded": _vm.allLoaded
    }
  }, [_vm._l((_vm.postItems), function(postItem, index) {
    return _c('my-topic-item', {
      key: postItem.title,
      attrs: {
        "post-item": postItem,
        "index": index
      }
    })
  }), _vm._v(" "), _c('no-more', {
    attrs: {
      "visible": _vm.nomore
    }
  })], 2) : _vm._e(), _vm._v(" "), (!_vm.postItems.length) ? _c('div', {
    staticClass: "empty"
  }, [_c('div', {
    staticClass: "text"
  }, [_vm._v("还没有发帖纪录哦")])]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-61365189", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=0.755f670066881b0e2206.js.map