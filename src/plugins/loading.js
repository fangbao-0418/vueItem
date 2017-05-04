import Vue from 'vue'
import { loading } from '../components'
var Vm = Vue.extend(loading)

var Instance = new Vm({
  el: document.createElement('div')
})

// type == 'full' loading有背景 默认空 没有背景
Instance.show = function (res, type) {
  this.visible = res
  this.type = type
}
document.body.appendChild(Instance.$el)
export default Instance
