import * as types from '../mutation-types'
import { api, http } from '../../util'
import { loading } from '../../plugins'

const state = {
  loginStatus: false,
  unreadStatus: false, // 消息未读状态
  bbsUserInfo: {} // 社区用户信息
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
  },
  // 获取个人中心数据
  fetchPersonPageData ({ commit }) {
    loading.show(true, 'full')
    http([
      {
        url: api.api_account,
        method: 'loginStatus'
      },
      {
        url: api.api_list,
        method: 'getBbsUserCountPm',
        params: [{}]
      },
      {
        url: api.api_list,
        method: 'getBbsUserInfo',
        params: [{}]
      }
    ]).then((res) => {
      loading.show(false)
      console.log(res[2])
      commit(types.FETCH_LOGIN_STATUS, res[0].data.result.status === 1)
      commit(types.CHANGE_UNREAD_STATUS, res[1].data.result.data.num > 0)
      commit(types.FETCH_BBS_USER_INFO, res[2].data.result.data)
    })
  }
}

const mutations = {
  [types.FETCH_LOGIN_STATUS] (state, res) {
    state.loginStatus = true
  },
  [types.CHANGE_UNREAD_STATUS] (state, res) {
    state.unreadStatus = res
  },
  [types.FETCH_BBS_USER_INFO] (state, res) {
    state.bbsUserInfo = res
  }
}

export default {
  state,
  actions,
  mutations
}
