import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import bridge from './modules/bridge'
import profile from './modules/profile'
// import createLogger from '../plugins/logger'

Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  getters,
  modules: {
    bridge,
    profile
  }
})
