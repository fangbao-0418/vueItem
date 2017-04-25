<template>
<div class="view">
  <wlb-header>
    <span slot="title">网利社区</span>
  </wlb-header>
  <user-briefly-show></user-briefly-show>
  <div class="container mt-20">
    <wlb-tab-container :initial-nav-bar-options="initailNavBarOptions" initial-active="tab-container1">
      <tab-container-item id="tab-container1">
        <topic-item></topic-item>
        <topic-item></topic-item>
        <topic-item></topic-item>
      </tab-container-item>
      <tab-container-item id="tab-container2">
        <topic-item></topic-item>
      </tab-container-item>
      <tab-container-item id="tab-container3">
        <topic-item></topic-item>
      </tab-container-item>
    </wlb-tab-container>
  </div>
  <public-comment-icon></public-comment-icon>
</div>
</template>
<script>
import { UserBrieflyShow, WlbHeader, WlbTabContainer, TopicItem, PublicCommentIcon } from '../components'
import { TabContainerItem } from 'mint-ui'
export default {
  data () {
    return {
      initailNavBarOptions: [{title: '聊点闲话', checked: true}, {title: '有问有答', checked: false}, {title: '网利活动', checked: false}]
    }
  },
  created () {
    this.http([
      {
        url: this.api.api_account,
        method: 'loginStatus',
        params: []
      },
      {
        url: this.api.api_list,
        method: 'bannerList',
        params: [{
          position: 'annualreport'
        }]
      }
    ]).then((res1, res2) => {
      console.log(res1, res2)
    })
  },
  components: {
    WlbHeader,
    UserBrieflyShow,
    WlbTabContainer,
    TabContainerItem,
    PublicCommentIcon,
    TopicItem
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
