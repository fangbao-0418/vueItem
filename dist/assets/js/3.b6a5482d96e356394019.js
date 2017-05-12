/*! This file is created by fangbao */
webpackJsonp([3],{

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(269)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(264),
  /* template */
  __webpack_require__(276),
  /* scopeId */
  "data-v-10ae7efd",
  /* cssModules */
  null
)
Component.options.__file = "D:\\vueItem\\src\\views\\personInfoEdit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] personInfoEdit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10ae7efd", Component.options)
  } else {
    hotAPI.reload("data-v-10ae7efd", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _components = __webpack_require__(11);

var _plugins = __webpack_require__(15);

var _bus = __webpack_require__(34);

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    WlbHeader: _components.WlbHeader,
    SelectAvatar: _components.SelectAvatar
  },
  data: function data() {
    return {
      userInfo: {},
      allHeadImgs: {},
      nickname: '',
      changed: false,
      index: 1
    };
  },

  computed: {},
  created: function created() {
    var _this = this;

    _plugins.loading.show(true, 'full');
    this.$http([{
      url: this.$api.api_list,
      method: 'getBbsUserInfo',
      params: [{}]
    }, {
      url: this.$api.api_list,
      method: 'getBbsUserAllHeadImg',
      params: [{}]
    }]).then(function (res) {
      _this.userInfo = res[0].data.result.data;
      _this.allHeadImgs = res[1].data.result.data;
      setTimeout(function () {
        _this.changed = false;
      }, 0);
      _plugins.loading.show(false);
    });
  },
  mounted: function mounted() {
    var _this2 = this;

    _bus2.default.$on('select-avatar', function (index) {
      _this2.userInfo['head_img'] = _this2.allHeadImgs[index];
      _this2.index = index;
    });
  },

  watch: {
    userInfo: {
      deep: true,
      handler: function handler(val) {
        this.changed = true;
      }
    }
  },
  methods: {
    editAvatar: function editAvatar() {
      _bus2.default.$emit('show-select-avatar-page');
    },
    save: function save() {
      if (!this.changed) {
        return;
      }
      this.changed = false;
      _plugins.loading.show(true);
      this.$http([{
        url: this.$api.api_list,
        method: 'updateBbsUserHeadimg',
        params: [{
          head_img: this.index
        }]
      }, {
        url: this.$api.api_list,
        method: 'updateBbsUserNickname',
        params: [{
          nickname: this.userInfo['nickname']
        }]
      }]).then(function (res) {
        _plugins.loading.show(false);
        if (res[1].data.result) {
          var code = res[1].data.result.code;
          var msg = res[1].data.result.data;
          if (code === 0) {
            _plugins.ruleModal.show({
              content: '信息修改成功',
              style: 'text-align: center'
            });
          } else {
            _plugins.ruleModal.show({
              content: msg,
              style: 'text-align: center'
            });
          }
        }
      });
    }
  },
  destroyed: function destroyed() {
    _bus2.default.$off('show-select-avatar-page');
  }
};

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
  }, [_vm._v("个人中心")])]), _vm._v(" "), _c('div', {
    staticClass: "edit-section"
  }, [_c('div', {
    staticClass: "item",
    on: {
      "click": function($event) {
        _vm.editAvatar()
      }
    }
  }, [_c('span', {
    staticClass: "photo-title"
  }, [_vm._v("头像")]), _vm._v(" "), _c('div', {
    staticClass: "photo-right fr"
  }, [_c('span', {
    staticClass: "right fr"
  }), _vm._v(" "), _c('img', {
    directives: [{
      name: "lazyload",
      rawName: "v-lazyload",
      value: ({
        placeholder: __webpack_require__(12)
      }),
      expression: "{ placeholder: require('../imgs/avatar_defult_big.png') }"
    }],
    staticClass: "photo fr",
    attrs: {
      "src": _vm.userInfo.head_img
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('span', {
    staticClass: "name-title fl"
  }, [_vm._v("昵称")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userInfo.nickname),
      expression: "userInfo.nickname"
    }],
    staticClass: "name-right fr",
    domProps: {
      "value": (_vm.userInfo.nickname)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userInfo.nickname = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "edit-btn"
  }, [_c('button', {
    class: ['btn', {
      changed: _vm.changed
    }],
    on: {
      "click": _vm.save
    }
  }, [_vm._v("保存")])]), _vm._v(" "), _c('select-avatar', {
    attrs: {
      "data": _vm.allHeadImgs
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-10ae7efd", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=3.b6a5482d96e356394019.js.map