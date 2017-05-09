/* 茄子相关数据 */
import * as types from '../mutation-types'
import { http, api } from '../../util'
import { loading } from '../../plugins'
const state = {
  topicBoards: [],
  navbar_select_index: 0, // navbar 初始index
  initial_active: 'tab-container1',
  home_data: [],
  ThreadTopList: [],
  ThreadList: [],
  homeDataLoaded: []
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
    return arr
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
  fetchBbsHomeData ({ state, commit, dispatch }) {
    loading.show(true, 'full')
    dispatch('fetchLoginStatus') // 获取登录状态
    // 获取板块
    dispatch('fetchTopicBoards', () => {
      http([
        {
          url: api.api_list,
          method: 'getBbsThreadTopList',
          params: [{
            id: state.topicBoards[state.navbar_select_index]['id']
          }]
        },
        {
          url: api.api_list,
          method: 'getBbsThreadList',
          params: [{
            id: state.topicBoards[state.navbar_select_index]['id']
          }]
        },
        {
          url: api.api_list,
          method: 'getBbsUserInfo',
          params: [{}]
        }
      ]).then((res) => {
        var ThreadTopList = []
        var ThreadList = []
        if (res[0].data.result) {
          ThreadTopList[state.navbar_select_index] = res[0].data.result.data
        }
        if (res[1].data.result) {
          ThreadList[state.navbar_select_index] = res[1].data.result.data.list
        }
        var data = {
          ThreadTopList,
          ThreadList
        }
        if (res[2].data.result) {
          commit(types.FETCH_BBS_USER_INFO, res[2].data.result.data)
        }
        commit(types.FETCH_BBS_HOME_DATA, data)
        loading.show(false)
      })
    })
  },
  // 更新帖子列表数据
  updateTopicListData ({ state, commit }, id) {
    if (state.homeDataLoaded[state.navbar_select_index]) {
      console.log(state.ThreadList, 'ThreadList', [state.navbar_select_index])
      // return
    }
    loading.show(true)
    http([
      {
        url: api.api_list,
        method: 'getBbsThreadTopList',
        params: [{
          id: id || state.topicBoards[state.navbar_select_index]['id']
        }]
      },
      {
        url: api.api_list,
        method: 'getBbsThreadList',
        params: [{
          id: id || state.topicBoards[state.navbar_select_index]['id']
        }]
      }
    ]).then((res) => {
      var ThreadTopList = []
      var ThreadList = []
      if (res[0].data.result) {
        ThreadTopList[state.navbar_select_index] = res[0].data.result.data
      }
      if (res[1].data.result) {
        ThreadList[state.navbar_select_index] = res[1].data.result.data.list
      }
      var data = {
        ThreadTopList,
        ThreadList
      }
      commit(types.FETCH_BBS_HOME_DATA, data)
      commit(types.HOME_DATA_LOADED, true)
      loading.show(false)
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
  [types.FETCH_BBS_HOME_DATA] (state, data) {
    state.ThreadTopList = data['ThreadTopList']
    state.ThreadList = data['ThreadList']
  },
  [types.HOME_DATA_LOADED] (state, data) {
    state.homeDataLoaded[state.navbar_select_index] = true
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
