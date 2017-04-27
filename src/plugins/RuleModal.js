import Vue from 'vue'
import { RuleModal } from '../components'
var Vm = Vue.extend(RuleModal)

var Instance = new Vm({
  el: document.createElement('div')
})

Instance.show = function (options) {
  this.visible = true
  this.title = options['title']
  this.content = options['content']
}
document.body.appendChild(Instance.$el)
export default Instance
