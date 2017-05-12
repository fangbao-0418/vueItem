/*! This file is created by fangbao */
webpackJsonp([2],{

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(269)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(261),
  /* template */
  __webpack_require__(276),
  /* scopeId */
  "data-v-b463ba10",
  /* cssModules */
  null
)
Component.options.__file = "D:\\vueItem\\src\\views\\personNews.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] personNews.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b463ba10", Component.options)
  } else {
    hotAPI.reload("data-v-b463ba10", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__(10);



/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      data: [],
      page: 1,
      lastPage: 1,
      nomore: false
    };
  },
  created() {
    this.$plugin.loading.show(true, 'full');
    this.loadData(() => {
      this.$plugin.loading.show(false);
    });
  },
  computed: {
    allLoaded() {
      return this.nomore;
    }
  },
  components: {
    WlbHeader: __WEBPACK_IMPORTED_MODULE_0__components__["c" /* WlbHeader */],
    NewsItem: __WEBPACK_IMPORTED_MODULE_0__components__["l" /* NewsItem */],
    Loadmore: __WEBPACK_IMPORTED_MODULE_0__components__["g" /* Loadmore */],
    NoMore: __WEBPACK_IMPORTED_MODULE_0__components__["h" /* NoMore */]
  },
  methods: {
    loadData(cb) {
      this.$http({
        url: this.$api.api_list,
        method: 'getBbsUserPm',
        params: [{
          pageNum: this.$const.BBS_USER_PM_PAGE_NUM,
          page: this.page
        }]
      }).then(res => {
        this.page += 1;
        this.lastPage = res.data.result.data['last_page'];
        if (this.lastPage + 1 >= this.page) {
          if (this.page === 2) {
            this.data = res.data.result.data.list;
          } else {
            this.data = this.data.concat(res.data.result.data.list);
          }
        }
        if (this.lastPage < this.page) {
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
      if (this.page > this.lastPage) {
        return '';
      }
      this.$plugin.loading.show(true);
      this.loadData(() => {
        this.$plugin.loading.show(false);
        this.$refs.loadmore.$children[0].onBottomLoaded();
      });
    }
  }
});

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "view"
  }, [_c('wlb-header', [_c('span', {
    slot: "title"
  }, [_vm._v("我的消息")])]), _vm._v(" "), (_vm.data.length) ? _c('loadmore', {
    ref: "loadmore",
    attrs: {
      "cb-load-top": _vm.loadTop,
      "cb-load-bottom": _vm.loadBottom,
      "all-loaded": _vm.allLoaded
    }
  }, _vm._l((_vm.data), function(item, index) {
    return _c('news-item', {
      key: item.name,
      attrs: {
        "item": item,
        "index": index
      }
    })
  })) : _vm._e(), _vm._v(" "), (_vm.data.length > 0) ? _c('no-more', {
    attrs: {
      "visible": _vm.nomore
    }
  }) : _vm._e(), _vm._v(" "), (_vm.data.length === 0) ? _c('div', {
    staticClass: "empty"
  }, [_c('div', [_vm._v("还没有消息哦")])]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b463ba10", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=2.1d43476d137ea11fc5d9.js.map