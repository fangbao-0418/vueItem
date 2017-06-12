<template>
<div class="view">
  <wlb-header :options="{ title: '网利社区', rightConfigs: [{ type: 'share', options: { title: '网利社区' } }] }"></wlb-header>
  <scroll-wrapper>
    <user-briefly-show></user-briefly-show>
    <div class="container mt-20">
      <wlb-tab-container :initial-nav-bar-options="initialNavBarOptions" :initial-active="initialActive">
        <tab-container-item :key="index" :id="tabId(index)" :class="'tab-container'+parseInt(parseInt(index)+1)" v-for="(item, index) in initialNavBarOptions">
          <loadmore v-if="(ThreadList.length > 0 && ThreadList[index].length > 0) || (ThreadTopList.length > 0 && ThreadTopList[index].length > 0)" :cb-load-top="loadTop" :cb-load-bottom="loadBottom" :all-loaded="allLoaded[index]" :ref="'loadmore_'+index">
            <div v-if="ThreadTopList[index] && ThreadTopList[index].length">
              <title-bar-one :options="{title:item.title, more: ThreadTopList[index].length >= 2 ? '更多' : null, targetUrl: {name: 'activities', params: { id: item.id}}}"></title-bar-one>
              <slider-block-one :data="ThreadTopList[index]"></slider-block-one>
            </div>
            <topic-item v-if="ThreadList[index].length > 0" :data="ThreadList[index]"></topic-item>
          </loadmore>
          <no-more v-if="ThreadList.length > 0 && ThreadList[index].length > 0" :visible="allLoaded[index]"></no-more>
          <div class="no-topic" v-if="ThreadList.length > 0 && homeDataLoaded[index] && ThreadTopList[index].length === 0 && ThreadList[index].length === 0">
            <img src="../imgs/no-topic-icon.png" alt="">
            <span class="mt-16">还没有内容哦</span>
          </div>
          <div style="height: .1rem;"></div>
        </tab-container-item>
      </wlb-tab-container>
    </div>
  </scroll-wrapper>
  <public-comment-icon></public-comment-icon>
  <online-airlines></online-airlines>
</div>
</template>
<script>
import { ScrollWrapper, UserBrieflyShow, WlbHeader, WlbTabContainer, TopicItem, PublicCommentIcon, TitleBarOne, SliderBlockOne, Loadmore, NoMore, OnlineAirlines } from '../components'
import { TabContainerItem } from 'mint-ui'
import { mapState, mapGetters } from 'vuex'
export default {
  components: {
    ScrollWrapper,
    WlbHeader,
    UserBrieflyShow,
    WlbTabContainer,
    TabContainerItem,
    PublicCommentIcon,
    TopicItem,
    TitleBarOne,
    SliderBlockOne,
    Loadmore,
    NoMore,
    OnlineAirlines
  },
  computed: {
    ...mapGetters({
      initialNavBarOptions: 'doneTopicBoards',
      initialActive: 'initialActive'
    }),
    ...mapState({
      ThreadTopList (state) {
        console.log(state.topic['ThreadTopList'])
        return state.topic['ThreadTopList']
      },
      homeDataLoaded (state) {
        return state.topic['homeDataLoaded']
      },
      ThreadList (state) {
        console.log(state.topic['ThreadList'], 'ThreadList--index')
        return state.topic['ThreadList']
      }
    }),
    loginStatus () {
      return this.$store.state.profile.loginStatus
    },
    currentIndex () {
      return this.$store.state.topic['navbar_select_index']
    },
    allLoaded () {
      return this.$store.state.topic['bbsHomeallLoadedInfo']
    }
  },
  created () {
    console.log('fetchBbsHomeData start')
    this.$store.dispatch('fetchBbsHomeData')
  },
  mounted () {
  },
  methods: {
    tabId (index) {
      return 'tab-container' + (parseInt(index) + 1)
    },
    loadTop () {
      // 加载更多数据
      var that = this
      if (this.$refs['loadmore_' + this.currentIndex]) {
        this.$store.dispatch('bbsHomePageSetLoaded', false)
        this.$store.dispatch('updateTopicListData', {
          page: 1,
          refresh: true,
          cb: function () {
            that.$refs['loadmore_' + that.currentIndex][0].$children[0].onTopLoaded()
          }
        })
      }
    },
    loadBottom () {
      var that = this
      console.log('loadBottom', this.currentIndex, that.allLoaded[that.currentIndex])
      if (this.$refs['loadmore_' + this.currentIndex]) {
        if (that.allLoaded[that.currentIndex] === false) {
          this.$store.dispatch('bbsHomePageSetLoaded', false)
          this.$store.dispatch('updateTopicListData', { cb: function () {
            that.$refs['loadmore_' + that.currentIndex][0].$children[0].onBottomLoaded()
          }})
        }
      }
    }
  }
}
</script>
<style lang="sass" scoped>
  .no-topic
    text-align: center
    margin-top: 2.5rem
    img
      display: block
      width: 1.9rem
      height: 2.32rem
      margin: 0 auto
    span
      display: block
      text-align: center
      font-family: PingFangSC-Light
      font-size: .24rem
      color: #999999
      letter-spacing: 0.51px
      line-height: .33rem
</style>
