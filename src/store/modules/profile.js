import * as types from '../mutation-types'
import { api, http } from '../../util'
// import { loading } from '../../plugins'

const state = {
  loginStatus: false
}

const actions = {
  fetchLoginStatus (context, cb) {
    const { commit } = context
    // loading.show(true)
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
      console.log('fetchLoginStatus')
      // loading.show(false)
    })
    cb && cb()
  }
}

const mutations = {
  [types.FETCH_LOGIN_STATUS] (state, res) {
    state.loginStatus = true
  }
}

export default {
  state,
  actions,
  mutations
}
