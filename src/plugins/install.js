import { ruleModal } from '../plugins'
import { api, http, consts } from '../util'
function on (type, fn) {
  const el = this.$el
  if (el.attachEvent) {
    el.attacheEvent('on' + type, fn)
  } else {
    el.addEventListener(type, fn, false)
  }
}
export default {
  install (Vue, options) {
    Vue.prototype.v_on = on
    Vue.prototype.$rulemodal = ruleModal
    Vue.prototype.$http = http
    Vue.prototype.$api = api
    Vue.prototype.$const = consts
  }
}
