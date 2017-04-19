<template>
<div class="view">

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
.wrap
  width: 100px
</style>
