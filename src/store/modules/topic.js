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
  homeDataLoaded: [],
  bbsHomeallLoadedInfo: [],
  bbsHomeCurrentPageInfo: []
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
  // 获取帖子板块数据
  fetchTopicBoards ({ commit }, callback) {
    http({
      url: api.api_list,
      method: 'getBbsThreadSectionList',
      params: [{}]
    }).then((res) => {
      if (res.data.result) {
        for (let i in res.data.result.data) {
          // 初始化社区首页数据allLoaded && 当前页数
          commit(types.SET_BBS_HOME_ALL_LOADED_INFO, { k: i, v: true })
          commit(types.SET_BBS_HOME_CURRENT_PAGE, { k: i, v: 1 })
        }
        commit(types.FETCH_TOPIC_BOARDS, res.data.result.data)
      }
      callback && callback()
    })
  },
  navbarSelect ({ commit }, id) {
    commit(types.NAVBAR_SELECT, id)
  },
  // 设置社区首页数据加载状态
  bbsHomePageSetLoaded ({ commit }, res) {
    commit(types.HOME_DATA_LOADED, res)
  },
  // 获取社区首页数据
  fetchBbsHomeData ({ state, commit, dispatch }) {
    if (state.homeDataLoaded[state.navbar_select_index]) {
      return
    }
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
          // 当前页数大于最大页数 设置allLoaded
          if (state.bbsHomeCurrentPageInfo[state.navbar_select_index] >= res[1].data.result.data.last_page) {
            commit(types.SET_BBS_HOME_ALL_LOADED_INFO, { k: state.navbar_select_index, v: true })
          } else {
            commit(types.SET_BBS_HOME_ALL_LOADED_INFO, { k: state.navbar_select_index, v: false })
          }
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
        commit(types.HOME_DATA_LOADED, true)
        loading.show(false)
      })
    })
  },
  // 更新帖子列表数据
  updateTopicListData ({ state, commit }, params = {}) {
    if (state.homeDataLoaded[state.navbar_select_index]) {
      return
    }
    loading.show(true)
    http([
      {
        url: api.api_list,
        method: 'getBbsThreadTopList',
        params: [{
          id: params.id || state.topicBoards[state.navbar_select_index]['id']
        }]
      },
      {
        url: api.api_list,
        method: 'getBbsThreadList',
        params: [{
          id: params.id || state.topicBoards[state.navbar_select_index]['id'],
          page: params.page || state.bbsHomeCurrentPageInfo[state.navbar_select_index]
        }]
      }
    ]).then((res) => {
      var ThreadTopList = []
      var ThreadList = []
      for (var i in state.topicBoards) {
        ThreadTopList[i] = state.ThreadTopList[i]
        ThreadList[i] = state.ThreadList[i]
      }
      if (res[0].data.result) {
        ThreadTopList[state.navbar_select_index] = res[0].data.result.data
      }
      if (res[1].data.result) {
        commit(types.SET_BBS_HOME_CURRENT_PAGE, { k: state.navbar_select_index, v: state.bbsHomeCurrentPageInfo[state.navbar_select_index] + 1 })
        // 当前页数大于最大页数 设置allLoaded
        console.log(state.bbsHomeCurrentPageInfo[state.navbar_select_index] >= res[1].data.result.data.last_page, '当前页数')
        if (state.bbsHomeCurrentPageInfo[state.navbar_select_index] >= res[1].data.result.data.last_page) {
          commit(types.SET_BBS_HOME_ALL_LOADED_INFO, { k: state.navbar_select_index, v: true })
        } else {
          console.log('loaded is false')
          commit(types.SET_BBS_HOME_ALL_LOADED_INFO, { k: state.navbar_select_index, v: false })
        }
        ThreadList[state.navbar_select_index] = res[1].data.result.data.list
      }
      var data = {
        ThreadTopList,
        ThreadList
      }
      commit(types.FETCH_BBS_HOME_DATA, data)
      commit(types.HOME_DATA_LOADED, true)
      loading.show(false)
      if (params.cb) {
        params.cb && params.cb()
      }
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
  [types.HOME_DATA_LOADED] (state, res) {
    state.homeDataLoaded[state.navbar_select_index] = res
  },
  [types.SET_BBS_HOME_CURRENT_PAGE] (state, res) {
    state.bbsHomeCurrentPageInfo[res.k] = res.v
  },
  [types.SET_BBS_HOME_ALL_LOADED_INFO] (state, res) {
    state.bbsHomeallLoadedInfo[res.k] = res.v
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
