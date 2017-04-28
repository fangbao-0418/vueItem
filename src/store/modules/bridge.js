import * as types from '../mutation-types'
import wlb from '../../util/webview'
// initial state
const state = {
  isApp: false,
  isWeb: false,
  mixinList: []
}

const getters = {
}

const actions = {
  fetchBridgeInfo ({ commit }, payload) {
    commit(types.FETCH_BRIDGE_INFO, { isApp: true })
  }
}

const mutations = {
  [types.FETCH_BRIDGE_INFO] (state, payload) {
    console.log(state, payload)
    // state.isApp = payload['isApp']
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
