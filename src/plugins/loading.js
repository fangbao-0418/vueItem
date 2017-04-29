import Vue from 'vue'
import { loading } from '../components'
var Vm = Vue.extend(loading)

var Instance = new Vm({
  el: document.createElement('div')
})

Instance.show = function (res) {
  this.visible = res
}
document.body.appendChild(Instance.$el)
export default Instance
