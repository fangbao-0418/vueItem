/*! This file is created by fangbao */
webpackJsonp([5],{

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(268)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(262),
  /* template */
  __webpack_require__(275),
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

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _components = __webpack_require__(11);

exports.default = {
  data: function data() {
    return {
      data: [],
      page: 1,
      nomore: false
    };
  },

  computed: {
    allLoaded: function allLoaded() {
      return this.nomore;
    }
  },
  created: function created() {
    var _this = this;

    this.$plugin.loading.show(true);
    this.loadData(function () {
      _this.$plugin.loading.show(false);
    });
  },

  components: {
    WlbHeader: _components.WlbHeader,
    Loadmore: _components.Loadmore,
    NoMore: _components.NoMore
  },
  methods: {
    loadData: function loadData(cb) {
      var _this2 = this;

      this.$http({
        url: this.$api.api_list,
        method: 'getBbsThreadTopList',
        params: [{
          id: this.$route.params.id,
          pageNum: this.$const.BBS_ACTIVITY_LIST_PAGE_NUM,
          page: this.page,
          lastPage: 1
        }]
      }).then(function (res) {
        if (res.data.result) {
          _this2.page += 1;
          _this2.lastPage = res.data.result.data['last_page'];
          if (res.data.result.data['last_page'] + 1 >= _this2.page) {
            if (_this2.page === 2) {
              _this2.data = res.data.result.data.data;
            } else {
              _this2.data = _this2.data.concat(res.data.result.data.data);
            }
          }
          if (res.data.result.data['last_page'] < _this2.page) {
            _this2.nomore = true;
          } else {
            _this2.nomore = false;
          }
          cb && cb();
        }
      });
    },
    loadTop: function loadTop() {
      var _this3 = this;

      this.page = 1;
      this.$plugin.loading.show(true);
      this.loadData(function () {
        _this3.$plugin.loading.show(false);
        _this3.$refs.loadmore.$children[0].onTopLoaded();
      });
    },
    loadBottom: function loadBottom() {
      var _this4 = this;

      if (this.page > this.lastPage) {
        return '';
      }
      this.$plugin.loading.show(true);
      this.loadData(function () {
        _this4.$plugin.loading.show(false);
        _this4.$refs.loadmore.$children[0].onBottomLoaded();
      });
    }
  }
};

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
          placeholder: __webpack_require__(70)
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
          placeholder: __webpack_require__(70)
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
//# sourceMappingURL=5.4e7f8adf7bfb309934f2.js.map