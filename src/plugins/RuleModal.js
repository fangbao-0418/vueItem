import Vue from 'vue'
import { RuleModal } from '../components'
var Vm = Vue.extend(RuleModal)

var Instance = new Vm({
  el: document.createElement('div')
})

Instance.show = function (options = {}) {
  this.visible = true
  this.title = options['title'] || '系统提示'
  this.content = options['content'] || '暂无任何信息!'
  this.style = options['style'] || ''
}
document.body.appendChild(Instance.$el)
export default Instance
