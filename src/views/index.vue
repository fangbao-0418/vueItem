<template>
<div class="container">
    <!--
  <div class="wrap">
    <h1>
      {{msg}}
    </h1>
  </div>
  <div class="box">
    <img src="../imgs/ic_p6_hb.png" />
  </div>
  -->
    <div class="message" contentEditable="true" ref="profile">
    </div>
    {{count}}{{myCount}}
    <div class="btn" @click="sub">提交</div>
</div>
</template>
<script>
// import axios from 'axios'
export default {
  data () {
    return {
      msg: process.env.NODE_ENV,
      commentData: '222',
      count: 0
    }
  },
  computed: {
    myCount () {
      return this.$store.state.count
    }
  },
  created () {
    // alert(axios)
    this.$http({
      method: 'get',
      url: 'http://www.ey99.com/api/mobile/recommend.php?page=1'
    }).then(function (res) {
      this.count = 2
      // this.count = res.data.count
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
