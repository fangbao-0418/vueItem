import * as types from '../mutation-types'
import { wlb } from '../../util'
import cookie from 'js-cookie'

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
          alert('old' + JSON.stringify(cookie.get()))
          mixins.sendUserInfo((result) => {
            const sessionid = result.sessionid
            const splitArray = sessionid.split(';')
            for (let key in splitArray) {
              let split = splitArray[key].split('=')
              cookie.set(split[0], split[1], { path: '/', domain: '.wanglibao.com' })
            }
          })
          alert('new' + JSON.stringify(cookie.get()))
          commit(types.FETCH_BRIDGE_INFO, { mixinList: mixins, isWeb: false, isApp: true })
          cb && cb()
        },
        other () {
          commit(types.FETCH_BRIDGE_INFO, { mixinList: {}, isWeb: true, isApp: false })
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
    state.mixinList = payload['mixinList']
    // console.log(state)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
