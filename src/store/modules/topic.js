/* 茄子相关数据 */
import * as types from '../mutation-types'
import { http, api } from '../../util'
const state = {
  topicBoards: [],
  navbar_select_id: 0,
  initial_active: 'tab-container1',
  home_data: []
}
const getters = {
  doneTopicBoards (state) {
    var arr = []
    for (var i in state.topicBoards) {
      var item = {}
      item['title'] = state.topicBoards[i]['name']
      item['id'] = state.topicBoards[i]['id']
      item['checked'] = state.navbar_select_id === state.topicBoards[i]['id']
      arr.push(item)
    }
    return arr
    // return [{ title: '22', checked: true }]
  },
  initialActive (state) {
    // for (var i in state.topicBoards) {
    //   if (state.navbar_select_id = state.topicBoards[i]['id']) {
    //     return state.initial_active
    //     // return 'tab-container' + (i + 1)
    //   }
    // }
    return state.initial_active
  }
}
const actions = {
  fetchTopicBoards ({ commit }, callback) {
    http({
      url: api.api_account,
      method: 'loginStatus'
    }).then((res) => {
      if (res.data.result.status === 1) {
        commit(types.FETCH_LOGIN_STATUS, true)
      } else {
        // commit(types.FETCH_LOGIN_STATUS, false)
      }
      callback && callback()
    })
    // http({
    //   url: api.api_list,
    //   method: 'getBbsThreadSectionList',
    //   params: [{}]
    // }).then((res) => {
    //   loading.show(false)
    //   commit(types.NAVBAR_SELECT, res.data.result.data[0]['id'])
    //   commit(types.FETCH_TOPIC_BOARDS, res.data.result.data)
    //   callback && callback()
    // })
  },
  navbarSelect ({ commit }, id) {
    commit(types.NAVBAR_SELECT, id)
  },
  fetchHomeData ({ state, commit, dispatch }) {
    dispatch('fetchTopicBoards', () => {
      console.log('fetchTopicBoards')
      http({
        url: api.api_list,
        method: 'getBbsThreadTopListarray',
        params: [{
          id: state.navbar_select_id
        }]
      }).then((res) => {
        console.log(res)
      })
    })
  }
}
const mutations = {
  [types.FETCH_TOPIC_BOARDS] (state, res) {
    state.topicBoards = res
  },
  [types.NAVBAR_SELECT] (state, id) {
    state.navbar_select_id = id
  },
  [types.FETCH_HOME_DATA] (state) {

  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
