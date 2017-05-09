<template>
<div class="view">
  <wlb-header :options="{ title: '网利社区', rightConfigs: [{ type: 'share' }] }"></wlb-header>
  <user-briefly-show></user-briefly-show>
  <div class="container mt-20">
    <wlb-tab-container :initial-nav-bar-options="initialNavBarOptions" :initial-active="initialActive">
      <tab-container-item :key="index" :id="tabId(index)" :class="'tab-container'+parseInt(parseInt(index)+1)" v-for="(item, index) in initialNavBarOptions">
        <loadmore :top-method="loadTop" :bottom-method="loadBottom" ref="loadmore">
          <div v-if="ThreadTopList[index] && ThreadTopList[index].length">
            <title-bar-one :options="{title:item.title, more: '更多', targetUrl: {name: 'activities', params: { id: item.id}}}"></title-bar-one>
            <slider-block-one :data="ThreadTopList[index]"></slider-block-one>
          </div>
          <topic-item :data="ThreadList[index]"></topic-item>
        </loadmore>
      </tab-container-item>
    </wlb-tab-container>
  </div>
  <public-comment-icon v-if="loginStatus"></public-comment-icon>
</div>
</template>
<script>
import { UserBrieflyShow, WlbHeader, WlbTabContainer, TopicItem, PublicCommentIcon, TitleBarOne, SliderBlockOne } from '../components'
import { TabContainerItem, Loadmore } from 'mint-ui'
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      initialNavBarOptions: 'doneTopicBoards',
      initialActive: 'initialActive'
    }),
    ...mapState({
      ThreadTopList (state) {
        return state.topic['ThreadTopList']
      },
      ThreadList (state) {
        return state.topic['ThreadList']
      }
    }),
    loginStatus () {
      return this.$store.state.profile.loginStatus
    },
    currentIndex () {
      return this.$store.state.topic['navbar_select_index']
    }
  },
  created () {
    this.$store.dispatch('fetchBbsHomeData')
  },
  mounted () {
  },
  components: {
    WlbHeader,
    UserBrieflyShow,
    WlbTabContainer,
    TabContainerItem,
    PublicCommentIcon,
    TopicItem,
    TitleBarOne,
    SliderBlockOne,
    Loadmore
  },
  methods: {
    tabId (index) {
      return 'tab-container' + (parseInt(index) + 1)
    },
    loadTop () {
      // 加载更多数据
      if (this.$refs.loadmore) {
        console.log(this.$refs.loadmore)
        this.$refs.loadmore[this.currentIndex].onTopLoaded()
      }
    },
    loadBottom () {
      // 加载更多数据
      // this.allLoaded = true // 若数据已全部获取完毕
      // this.$refs.loadmore[this.currentIndex].onBottomLoaded()
    }
  }
}
</script>
<style lang="sass" scoped>
</style>
