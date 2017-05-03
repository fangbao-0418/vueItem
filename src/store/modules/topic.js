/* 茄子相关数据 */
import * as types from '../mutation-types'
import { http, api } from '../../util'
const state = {
  topicBoards: [],
  navbar_select_index: 0, // navbar 初始index
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
      item['checked'] = parseInt(state.navbar_select_index) === parseInt(i)
      arr.push(item)
    }
    console.log(arr)
    return arr
    // return [{ title: '22', checked: true }]
  },
  initialActive (state) {
    return state.initial_active
  }
}
const actions = {
  fetchTopicBoards ({ commit }, callback) {
    http({
      url: api.api_list,
      method: 'getBbsThreadSectionList',
      params: [{}]
    }).then((res) => {
      commit(types.FETCH_TOPIC_BOARDS, res.data.result.data)
      callback && callback()
    })
  },
  navbarSelect ({ commit }, id) {
    commit(types.NAVBAR_SELECT, id)
  },
  // 获取社区首页数据
  fetchHomeData ({ state, commit, dispatch }) {
    dispatch('fetchTopicBoards', () => {
      http({
        url: api.api_list,
        method: 'getBbsThreadTopList',
        params: [{
          id: state.topicBoards[state.navbar_select_index]['id']
        }]
      }).then((res) => {
        console.log(res)
      })
    })
  },
  // 更新帖子列表数据
  updateTopicListData ({ state, commit }, id) {
    http({
      url: api.api_list,
      method: 'getBbsThreadTopList',
      params: [{
        id: id || state.topicBoards[state.navbar_select_index]['id']
      }]
    }).then((res) => {
      console.log(res)
    })
  }
}
const mutations = {
  [types.FETCH_TOPIC_BOARDS] (state, res) {
    state.topicBoards = res
  },
  [types.NAVBAR_SELECT] (state, index) {
    state.navbar_select_index = index
    state.initial_active = 'tab-container' + (parseInt(index) + 1)
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
