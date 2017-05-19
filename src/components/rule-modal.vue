<template>
  <transition name="fade">
    <div class="view" v-if="visible" @click="close()">
      <div class="container" @click.stop="">
        <div class="title">{{title}}</div>
        <div class="content" :style="style">{{content}}</div>
        <div v-if="footType === 1" class="footer" @click="close()">
          <span>知道了</span>
        </div>
        <div v-if="footType === 2" class="footer">
          <span class="cancel" @click="close()">{{cancelOptions && cancelOptions.title ? cancelOptions.title: '取消'}}</span>
          <div class="line"></div>
          <span class="affirm" @click="ok()">{{okOptions && okOptions.title ? okOptions.title: '确定'}}</span>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    data () {
      return {
        visible: false,
        title: '',
        content: '',
        style: '',
        okOptions: {},
        cancelOptions: {}
      }
    },
    computed: {
      footType () {
        return (this.okOptions && (this.okOptions.title || this.okOptions.callback)) ? 2 : 1
      }
    },
    watch: {
      visible (val) {
        if (val) {
          $('body').on('touchmove', function (e) {
            console.log(e)
            e.preventDefault()
          })
        } else {
          $('body').off('touchmove')
        }
      }
    },
    methods: {
      ok () {
        this.okOptions.callback && this.okOptions.callback()
      },
      close () {
        this.visible = false
      }
    }
  }
</script>
<style lang="sass" scoped>
  @keyframes elasticity-in
    0%
      transform: translateY(-50%) scale(1.2)
    100%
      transform: translateY(-50%) scale(1)
  @keyframes elasticity-out
    0%
      transform: translateY(-50%) scale(1)
    100%
      transform: translateY(-50%) scale(1.2)
  .fade-enter-active
    .container
      animation: elasticity-in .3s ease-out
  .fade-leave-active
    .container
      animation: elasticity-out .3s ease-out
  .view
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 999999
    transition: all .3s ease
    background: rgba(0,0,0,.4)
    .container
      width: 5.4rem
      background: #fff
      border-radius: .24rem
      position: absolute
      margin: auto auto
      left: 0
      right: 0
      top: 50%
      transform: translateY(-50%)
      .title
        font-family: PingFangSC-Medium
        font-size: .38rem
        color: #666666
        letter-spacing: 0
        line-height: .53rem
        margin: .4rem auto .52rem
        text-align: center
      .content
        white-space: pre-wrap
        font-family: PingFangSC-Light
        font-size: .3rem
        color: #666666
        letter-spacing: 0
        line-height: .42rem
        padding: 0 .3rem .8rem
      .footer
        height: .9rem
        border-top: solid #D8D8D8 1px
        text-align: center
        line-height: .9rem
        display: flex
        span
          display: block
          text-align: center
          font-family: PingFangSC-Light
          font-size: .3rem
          color: #666666
          letter-spacing: 0
          flex: 1
        .affirm
          flex: 1
        .line
          width: 1px
          background-color: #D8D8D8
        .cancel
          flex: 1
</style>
