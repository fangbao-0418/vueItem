/*! This file is created by fangbao */
webpackJsonp([5],{

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(264)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(258),
  /* template */
  __webpack_require__(271),
  /* scopeId */
  "data-v-0980a2fd",
  /* cssModules */
  null
)
Component.options.__file = "D:\\vueItem\\src\\views\\activityList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] activityList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0980a2fd", Component.options)
  } else {
    hotAPI.reload("data-v-0980a2fd", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__(10);



/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      data: [],
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
    this.$plugin.loading.show(true);
    this.loadData(() => {
      this.$plugin.loading.show(false);
    });
  },
  components: {
    WlbHeader: __WEBPACK_IMPORTED_MODULE_0__components__["c" /* WlbHeader */],
    Loadmore: __WEBPACK_IMPORTED_MODULE_0__components__["g" /* Loadmore */],
    NoMore: __WEBPACK_IMPORTED_MODULE_0__components__["h" /* NoMore */]
  },
  methods: {
    loadData(cb) {
      this.$http({
        url: this.$api.api_list,
        method: 'getBbsThreadTopList',
        params: [{
          id: this.$route.params.id,
          pageNum: this.$const.BBS_ACTIVITY_LIST_PAGE_NUM,
          page: this.page,
          lastPage: 1
        }]
      }).then(res => {
        if (res.data.result) {
          this.page += 1;
          this.lastPage = res.data.result.data['last_page'];
          if (res.data.result.data['last_page'] + 1 >= this.page) {
            if (this.page === 2) {
              this.data = res.data.result.data.data;
            } else {
              this.data = this.data.concat(res.data.result.data.data);
            }
          }
          if (res.data.result.data['last_page'] < this.page) {
            this.nomore = true;
          } else {
            this.nomore = false;
          }
          cb && cb();
        }
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

/***/ 264:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "view"
  }, [_c('wlb-header', {
    attrs: {
      "options": {
        title: '网利活动',
        rightConfigs: [{
          type: 'share'
        }]
      }
    }
  }), _vm._v(" "), (_vm.data && _vm.data.length) ? _c('div', {
    staticClass: "activities"
  }, [_c('loadmore', {
    ref: "loadmore",
    attrs: {
      "cb-load-top": _vm.loadTop,
      "cb-load-bottom": _vm.loadBottom,
      "all-loaded": _vm.allLoaded
    }
  }, [_vm._l((_vm.data), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "activity-item",
      attrs: {
        "tag": "div"
      }
    }, [(item.url) ? _c('a', {
      attrs: {
        "href": item.url
      }
    }, [_c('img', {
      directives: [{
        name: "lazyload",
        rawName: "v-lazyload",
        value: ({
          placeholder: __webpack_require__(69)
        }),
        expression: "{ placeholder: require('../imgs/banner_defult_sml.png') }"
      }],
      attrs: {
        "src": item.cover
      }
    })]) : _c('router-link', {
      attrs: {
        "to": {
          name: 'activityDetail',
          params: {
            id: item.id
          }
        }
      }
    }, [_c('img', {
      directives: [{
        name: "lazyload",
        rawName: "v-lazyload",
        value: ({
          placeholder: __webpack_require__(69)
        }),
        expression: "{ placeholder: require('../imgs/banner_defult_sml.png') }"
      }],
      attrs: {
        "src": item.cover
      }
    })])], 1)
  }), _vm._v(" "), _c('no-more', {
    attrs: {
      "visible": _vm.nomore
    }
  })], 2)], 1) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0980a2fd", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=5.6b55c25113de63bb6336.js.map