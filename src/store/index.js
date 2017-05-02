import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import bridge from './modules/bridge'
import profile from './modules/profile'
import topic from './modules/topic'
import createLogger from 'vuex/dist/logger'
const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  getters,
  modules: {
    bridge,
    profile,
    topic
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
