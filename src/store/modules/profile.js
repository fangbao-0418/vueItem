import * as types from '../mutation-types'
import { api, http } from '../../util'
const state = {
  loginStatus: false
}

const actions = {
  fetchLoginStatus ({ commit }, cb) {
    http({
      url: api.api_account,
      method: 'loginStatus'
    }).then((res) => {
      console.log(res.data)
      if (res.data.result.status === 1) {
        commit(types.FETCH_LOGIN_STATUS, true)
      } else {
        // commit(types.FETCH_LOGIN_STATUS, false)
      }
    })
    cb && cb()
  }
}

const mutations = {
  [types.FETCH_LOGIN_STATUS] (state, res) {
    console.log(res)
    state.loginStatus = true
  }
}

export default {
  state,
  actions,
  mutations
}
