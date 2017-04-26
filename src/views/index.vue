<template>
<div class="view">
  <wlb-header>
    <span slot="title">网利社区</span>
  </wlb-header>
  <user-briefly-show></user-briefly-show>
  <div class="container mt-20">
    <wlb-tab-container :initial-nav-bar-options="initailNavBarOptions" initial-active="tab-container1">
      <tab-container-item id="tab-container1">
        <title-bar-one :options="{title:'精选问答', more: '更多问答', targetUrl: {name: 'topicAdd'}}"></title-bar-one>
        <slider-block-one></slider-block-one>
        <topic-item></topic-item>
        <topic-item></topic-item>
        <topic-item></topic-item>
      </tab-container-item>
      <tab-container-item id="tab-container2">
        <title-bar-one :options="{title:'精选问答', more: '更多问答', targetUrl: {name: 'topicAdd'}}"></title-bar-one>
        <slider-block-one></slider-block-one>
        <topic-item></topic-item>
      </tab-container-item>
      <tab-container-item id="tab-container3">
        <title-bar-one :options="{title:'网利活动', more: '更多活动', targetUrl: {name: 'topicAdd'}}"></title-bar-one>
        <slider-block-one></slider-block-one>
        <topic-item></topic-item>
      </tab-container-item>
    </wlb-tab-container>
  </div>
  <public-comment-icon></public-comment-icon>
</div>
</template>
<script>
import { UserBrieflyShow, WlbHeader, WlbTabContainer, TopicItem, PublicCommentIcon, TitleBarOne, SliderBlockOne } from '../components'
import { TabContainerItem } from 'mint-ui'
export default {
  data () {
    return {
      initailNavBarOptions: [{title: '聊点闲话', checked: true}, {title: '有问有答', checked: false}, {title: '网利活动', checked: false}]
    }
  },
  created () {
    // this.http([
    //   {
    //     url: this.api.api_account,
    //     method: 'loginStatus',
    //     params: []
    //   },
    //   {
    //     url: this.api.api_list,
    //     method: 'bannerList',
    //     params: [{
    //       position: 'annualreport'
    //     }]
    //   }
    // ]).then((res1, res2) => {
    //   console.log(res1, res2)
    // })
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
    SliderBlockOne
  },
  methods: {
    sub () {
      console.log(this.$refs.profile.innerText)
      alert(this.$refs.profile.innerText)
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
