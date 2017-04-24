<template>

  <div class="view">
    <transition name="fade">
      <div class="comment-form" v-show="show">
        <div class="comment-form-head">
          <span class="comment-cancel fl" @click="cancel">取消</span>
          <span class="comment-sub fr">发表</span>
        </div>
        <div class="comment-text-content" contenteditable="true">
          说点什么吧...
        </div>
      </div>
    </transition>
  </div>

</template>
<script>
  import bus from '../bus'
  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
      console.log(this.show)
    },
    watch: {
      show (val) {
        console.log(val)
      }
    },
    methods: {
      cancel () {
        bus.$emit('comment-cancel')
      }
    }
  }
</script>
<style lang="sass" scoped>
.fade-enter
  transform: translateY(4.4rem)
.fade-leave-active
  transform: translateY(4.4rem)
.fade-leave
  transform: translateY(0)
.fade-enter-active, .fade-leave-active
  transition: all .3s ease
.view
  // width: 100%
  // height: 100%
  // background: rgba(0,0,0,0.40)
  // position: fixed
  // top: 0
  .comment-form
    position: fixed
    bottom: 0
    background-color: #FFF
    width: 100%
    min-height: 4.4rem
    .comment-form-head
      overflow: hidden
      padding: 0 .28rem
      height: .6rem
      line-height: .6rem
      .comment-cancel
        font-family: PingFangSC-Light
        font-size: .3rem
        color: #A1AFB4
        letter-spacing: 0
      .comment-sub
        font-family: PingFangSC-Light
        font-size: .3rem
        color: #12A5E2
        letter-spacing: 0
    .comment-text-content
      padding: .1rem .3rem
      font-family: PingFangSC-Light
      font-size: .3rem
      color: #A1AFB4
      letter-spacing: 0
      height: 4rem
      overflow-y: scroll
</style>
