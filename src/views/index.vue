<template>
<div class="view">
  <user-briefly-show></user-briefly-show>
</div>
</template>
<script>
import userBrieflyShow from '../components/user-briefly-show'
export default {
  data () {
    return {
      msg: process.env.NODE_ENV
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
    userBrieflyShow
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
