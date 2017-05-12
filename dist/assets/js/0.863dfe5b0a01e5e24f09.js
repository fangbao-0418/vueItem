/*! This file is created by fangbao */
webpackJsonp([0],{

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(272)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(267),
  /* template */
  __webpack_require__(279),
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

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _components = __webpack_require__(11);

exports.default = {
  data: function data() {
    return {
      postItems: [],
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

    this.$plugin.loading.show(true, 'full');
    this.loadData(function () {
      _this.$plugin.loading.show(false);
    });
  },

  methods: {
    loadData: function loadData(cb) {
      var _this2 = this;

      this.$http({
        url: this.$api.api_list,
        method: 'getBbsUserThread',
        params: [{
          pageNum: this.$const.BBS_USER_THREAD_PAGE_NUM,
          page: this.page
        }]
      }).then(function (res) {
        _this2.page += 1;
        if (res.data.result.data['last_page'] + 1 >= _this2.page) {
          if (_this2.page === 2) {
            _this2.postItems = res.data.result.data.list;
          } else {
            _this2.postItems = _this2.postItems.concat(res.data.result.data.list);
          }
        }
        if (res.data.result.data['last_page'] < _this2.page) {
          _this2.nomore = true;
        } else {
          _this2.nomore = false;
        }
        cb && cb();
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

      this.$plugin.loading.show(true);
      this.loadData(function () {
        _this4.$plugin.loading.show(false);
        _this4.$refs.loadmore.$children[0].onBottomLoaded();
      });
    }
  },
  components: {
    WlbHeader: _components.WlbHeader,
    MyTopicItem: _components.MyTopicItem,
    Loadmore: _components.Loadmore,
    NoMore: _components.NoMore
  }
};

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 279:
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
//# sourceMappingURL=0.863dfe5b0a01e5e24f09.js.map