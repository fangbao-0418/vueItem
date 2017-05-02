<template>
<div class="view">
  <wlb-header :options="{title:'网利社区',rightConfigs:[{type:'share'}]}"></wlb-header>
  <user-briefly-show></user-briefly-show>
  <div class="container mt-20">
    <wlb-tab-container :initial-nav-bar-options="initailNavBarOptions" :initial-active="initialActive">
      <tab-container-item :id="'tab-container'+(index+1)" v-for="(item, index) in initailNavBarOptions">
        <loadmore :top-method="loadTop" :bottom-method="loadBottom" ref="loadmore">
          <title-bar-one :options="{title:item.title, more: '更多', targetUrl: {name: 'topicAdd'}}"></title-bar-one>
          <slider-block-one></slider-block-one>
          <topic-item></topic-item>
          <topic-item></topic-item>
          <topic-item></topic-item>
        </loadmore>
      </tab-container-item>
      <!-- <tab-container-item id="tab-container2">
        <title-bar-one :options="{title:'精选问答', more: '更多问答', targetUrl: {name: 'topicAdd'}}"></title-bar-one>
        <slider-block-one></slider-block-one>
        <topic-item></topic-item>
      </tab-container-item>
      <tab-container-item id="tab-container3">
        <title-bar-one :options="{title:'网利活动', more: '更多活动', targetUrl: {name: 'activities'}}"></title-bar-one>
        <slider-block-one></slider-block-one>
        <topic-item></topic-item>
      </tab-container-item> -->
    </wlb-tab-container>
  </div>
  <public-comment-icon></public-comment-icon>
</div>
</template>
<script>
import { UserBrieflyShow, WlbHeader, WlbTabContainer, TopicItem, PublicCommentIcon, TitleBarOne, SliderBlockOne } from '../components'
import { TabContainerItem, Loadmore } from 'mint-ui'
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters({
    initailNavBarOptions: 'doneTopicBoards',
    initialActive: 'initialActive'
  }),
  created () {
    this.$store.dispatch('fetchHomeData')
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
    sub () {
      console.log(this.$refs.profile.innerText)
      alert(this.$refs.profile.innerText)
    },
    loadTop () {
      // 加载更多数据
      this.$refs.loadmore.onTopLoaded()
    },
    loadBottom () {
      // 加载更多数据
      // this.allLoaded = true // 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded()
    }
  }
}
</script>
<style lang="sass" scoped>
</style>
