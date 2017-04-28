import * as types from '../mutation-types'
import { api, http } from '../../util'
const state = {
  // loginState: false
}

const actions = {
  fetchLoginStatus ({ commit }, cb) {
    http({
      url: api.api_account,
      method: 'loginStatus'
    }).then((res) => {
      if (res.data.result.status === 1) {
        commit(types.FETCH_LOGIN_STATUS, true)
      } else {
        commit(types.FETCH_LOGIN_STATUS, false)
      }
    })
    cb && cb()
  }
}

const mutations = {
  [types.FETCH_LOGIN_STATUS] (state, res) {
    state.loginStatus = res
  }
}

export default {
  state,
  actions,
  mutations
}
