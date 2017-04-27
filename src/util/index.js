import Plugins from '../plugins'

function cOn (type, fn) {
  const el = this.$el
  if (el.attachEvent) {
    el.attacheEvent('on' + type, fn)
  } else {
    el.addEventListener(type, fn, false)
  }
}
export default {
  install (Vue, options) {
    Vue.prototype.c_on = cOn
    Vue.prototype.$rulemodal = Plugins['RuleModal']
  }
}
