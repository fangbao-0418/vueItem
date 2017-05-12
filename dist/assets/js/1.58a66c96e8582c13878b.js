/*! This file is created by fangbao */
webpackJsonp([1],{

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(270)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(266),
  /* template */
  __webpack_require__(277),
  /* scopeId */
  "data-v-3a3824aa",
  /* cssModules */
  null
)
Component.options.__file = "D:\\vueItem\\src\\views\\personTask.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] personTask.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a3824aa", Component.options)
  } else {
    hotAPI.reload("data-v-3a3824aa", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _components = __webpack_require__(11);

exports.default = {
  data: function data() {
    return {
      data: {}
    };
  },

  components: {
    WlbHeader: _components.WlbHeader,
    TaskItem: _components.TaskItem,
    TaskPlan: _components.TaskPlan
  },
  created: function created() {
    var _this = this;

    this.$plugin.loading.show(true, 'full');
    this.$http({
      url: this.$api.api_list,
      method: 'queryBbsUserTask',
      params: [{}]
    }).then(function (res) {
      _this.data = res.data.result.data;
      _this.$plugin.loading.show(false);
    });
  },

  methods: {
    showRule: function showRule() {
      this.$rulemodal.show({
        title: '活动规则',
        content: '新华社北京4月26日电 中共中央政治局4月25日下午就维护国家金融安全进行第四十次集体学习。中共中央总书记习近平在主持学习时强调，金融安全是国家安全的重要组成部分，是经济平稳健康发展的重要基础。维护金融安全，是关系我国经济社会发展全局的一件带有战略性、根本性的大事。金融活，经济活；金融稳，经济稳。必须充分认识金融在经济发展和社会生活中的重要地位和作用，切实把维护金融安全作为治国理政的一件大事，扎扎实实把金融工作做好。'
      });
    }
  }
};

/***/ }),

/***/ 270:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "view"
  }, [_c('wlb-header', [_c('span', {
    slot: "title"
  }, [_vm._v("我的任务")])]), _vm._v(" "), _vm._l((_vm.data), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "task-container bg-color-white"
    }, [_c('div', {
      staticClass: "task-title mt-30"
    }, [_c('div', {
      class: [{
        'day-task': item.task === 'day'
      }, {
        'new-task': item.task !== 'day'
      }, 'title']
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('span', {
      staticClass: "rule",
      on: {
        "click": function($event) {
          _vm.showRule()
        }
      }
    }, [_vm._v("任务规则")])]), _vm._v(" "), _vm._l((item.list), function(item2, index2) {
      return _c('task-item', {
        key: index2
      }, [_c('img', {
        staticClass: "task-image",
        attrs: {
          "src": item2.icon
        },
        slot: "image"
      }), _vm._v(" "), _c('span', {
        slot: "task"
      }, [_vm._v(_vm._s(item2.description))]), _vm._v(" "), _c('span', {
        slot: "award"
      }, [_vm._v(_vm._s(item2.award))]), _vm._v(" "), _c('task-plan', {
        attrs: {
          "data": item2
        },
        slot: "right"
      })], 1)
    })], 2)
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3a3824aa", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=1.58a66c96e8582c13878b.js.map