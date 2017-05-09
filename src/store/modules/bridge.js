import * as types from '../mutation-types'
import { wlb } from '../../util'
// initial state
const state = {
  isApp: false,
  isWeb: false,
  mixinList: {}
}

const getters = {
}

const actions = {
  fetchBridgeInfo ({ commit }, cb) {
    try {
      wlb.ready({
        app (mixins) {
          commit(types.FETCH_BRIDGE_INFO, { mixinList: mixins, isWeb: false, isApp: true })
          cb && cb()
        },
        other () {
          commit(types.FETCH_BRIDGE_INFO, { isWeb: true, isApp: false })
          cb && cb()
        }
      })
    } catch (e) {
      throw e
    } finally {
    }
  }
}

const mutations = {
  [types.FETCH_BRIDGE_INFO] (state, payload) {
    state.isWeb = payload['isWeb']
    state.isApp = payload['isApp']
    state.MixinList = payload['MixinList']
    // console.log(state)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
