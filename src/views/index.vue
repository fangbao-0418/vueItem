<template>
<div class="view">
  <div class="user">
    <div class="user-avatar">
      <img src="" />
    </div>
    <p class="user-nick">方宝</p>
    <div class="user-remind">
      <p>还有99999元体验金未领取 |</p>
      <span>去领取</span>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
export default {
  data () {
    return {
      msg: process.env.NODE_ENV,
      commentData: '222'
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
  methods: {
    sub () {
      console.log(this.$refs.profile.innerText)
      alert(this.$refs.profile.innerText)
    }
  }
}
</script>
<style lang="sass" scoped>
.user
  width: 100%
  height: 12rem
  .user-nick
    background-color: red
    font-size: 1.4rem
    height: 2rem
    line-height: 2rem
</style>
