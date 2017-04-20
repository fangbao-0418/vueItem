<template>
<div class="view">
  <wlb-header></wlb-header>
  <user-briefly-show></user-briefly-show>
  <div class="container mt-20">
    <wlb-tab-container></wlb-tab-container>
  </div>
</div>
</template>
<script>
import { UserBrieflyShow, WlbHeader, WlbTabContainer } from '../components'
import { TabContainer, TabContainerItem } from 'mint-ui'
export default {
  data () {
    return {
      msg: process.env.NODE_ENV,
      active: 'tab-container1'
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
    TabContainer,
    TabContainerItem
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
