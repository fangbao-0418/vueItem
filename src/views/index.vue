<template>
<div class="view">
  <div class="user">
    <div class="user-avatar">
      <img src="../imgs/avatar@80x80.png" />
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
  .user-avatar
    text-align: center
    &:before
      content: ''
      display: block
      margin-top: .46rem
    img
      margin: 0 auto
      border-radius: 50%
      width: .8rem
      height: .8rem
  .user-nick
    background-color: red
    font-size: .28rem
    height: .4rem
    line-height: .4rem
</style>
