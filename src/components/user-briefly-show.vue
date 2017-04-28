/**
 * 用户简要信息
 */
<template>
  <div>
    <router-link :to="{name: 'person'}" class="user bg-color-white" tag="div" v-if="loginStatus">
      <div class="user-avatar">
        <img src="../imgs/avatar_big.png" />
      </div>
      <p class="user-nick">方宝</p>
      <div class="user-remind">
        <p>还有99999元体验金未领取 |</p><router-link :to="{name: 'personTask'}" tag="span"> 去领取</router-link>
      </div>
    </router-link>
    <div v-else class="user bg-color-white">
      <div class="login-btn"><span>登录</span></div>
      <p class="remind-msg">做任务的体验金</p>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        loginStatus: false
      }
    },
    mounted () {
      console.log(this.$store.state.profile)
      this.$store.dispatch('fetchLoginStatus', () => {
        setTimeout(() => {
          this.loginStatus = this.$store.state.profile.loginStatus
        }, 10)
      })
    }
  }
</script>
<style lang="sass" scoped>
.user
  width: 100%
  height: 2.4rem
  position: relative
  .user-avatar
    text-align: center
    &:before
      content: ''
      display: block
      height: .46rem
    img
      margin: 0 auto
      border-radius: 50%
      width: .8rem
      height: .8rem
  .user-nick
    text-align: center
    color: #666666
    font-size: .28rem
    height: .4rem
    line-height: .4rem
  .user-remind
    text-align: center
    p
      display: inline-block
      font-family: PingFangSC-Light
      font-size: .24rem
      color: #A1AFB4
      letter-spacing: 0
    span
      font-family: PingFangSC-Light
      font-size: .24rem
      color: #12A5E2
      letter-spacing: 0
      line-height: .33rem
  .login-btn
    position: absolute
    border: .02rem solid #03B0E8
    border-radius: .04rem
    width: 1.67rem
    height: .58rem
    line-height: .58rem
    text-align: center
    top: .8rem
    left: 0
    right: 0
    margin: 0 auto
    span
      font-family: PingFangSC-Regular
      font-size: .28rem
      color: #03B0E8
  .remind-msg
    position: absolute
    top: 1.62rem
    left: 0
    right: 0
    margin: 0 auto
    font-family: PingFangSC-Light
    font-size: .24rem
    line-height: .33rem
    color: #A1AFB4
    letter-spacing: 0
    text-align: center
</style>
