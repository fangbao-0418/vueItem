<template>
<transition name="fade">
  <div class="view" v-show="show" @click="cancel">
    <div class="comment-form" @click.stop="" ref="commentform">
      <div class="comment-form-head">
        <span class="comment-cancel fl" @click="cancel">取消</span>
        <span class="comment-sub fr">发表</span>
      </div>
      <textarea class="comment-text-content" v-model="content" placeholder="说点什么吧..."></textarea>
    </div>
  </div>
</transition>
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
    data () {
      return {
        content: ''
      }
    },
    mounted () {
      console.log(this.show)
    },
    watch: {
      show (val) {
        console.log($('body'))
        if (val) {
          $('body').css('overflow', 'hidden')
        } else {
          $('body').removeAttr('style')
        }
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
.fade-enter-active, .fade-leave-active
  transition: all .3s ease
.fade-enter
  opacity: 0
  .comment-form
    transform: translate(0, 1.5rem)
.fade-leave-active
  opacity: 0
  .comment-form
    transform: translate(0, 1.5rem)
.view
  width: 100%
  height: 100%
  background: rgba(0,0,0,0.40)
  position: fixed
  top: 0
  z-index: 1
  transition: all .3s ease
  .comment-form
    position: fixed
    bottom: 0
    background-color: #FFF
    width: 100%
    min-height: 4.4rem
    z-index: 2
    transition: all .3s ease
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
      padding: 0 .3rem
      width: 6.9rem
      border: 0
      margin: .1rem 0
      font-family: PingFangSC-Light
      font-size: .3rem
      color: #A1AFB4
      letter-spacing: 0
      height: 4rem
      overflow-y: scroll
</style>
