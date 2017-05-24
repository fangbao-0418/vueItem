<template>
  <div class="comment-block">
    <div class="comment-public-area">
      <div class="comment-btn" @click="publicComment">
        <span>说点什么吧~</span>
      </div>
    </div>
    <transition name="fade">
      <div class="view" v-show="show" @click="cancel">
        <div class="comment-form" @click.stop="" ref="commentform">
          <div class="comment-form-head">
            <span class="comment-cancel fl" @click="cancel">取消</span>
            <span :class="['comment-sub fr', {disable: !publicEnd || !content}]" @click="toPublic">{{publicEnd?'发表':'发表中...'}}</span>
          </div>
          <textarea class="comment-text-content" v-model="content" placeholder="说点什么吧..." ref="content"></textarea>
          <div class="comment-form-foot">
            <span>你还可以输入{{num}}字</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import bus from '../bus'
  import { Toast } from 'mint-ui'
  import { wlb, api } from '../util'
  export default {
    props: {
      id: {
        type: Number
      }
    },
    data () {
      return {
        show: false,
        content: '',
        num: 200,
        publicEnd: true
      }
    },
    mounted () {
    },
    watch: {
      show (val) {
        console.log($('body'))
        if (val) {
          setTimeout(() => {
            this.$refs.content.focus()
          }, 0)
          $('body').css('overflow', 'hidden')
        } else {
          $('body').removeAttr('style')
        }
      },
      content () {
        var len = this.content.length
        this.num = 200 - len > 0 ? 200 - len : 0
        this.content = this.content.substring(0, 200)
      }
    },
    methods: {
      publicComment () {
        this.show = true
      },
      cancel () {
        this.show = false
      },
      toPublic () {
        if (this.publicEnd === false || this.content === '') {
          return
        }
        this.publicEnd = false
        this.$http({
          url: this.$api.api_list,
          method: 'BbsPublishComment',
          params: [{
            id: this.id,
            content: this.content
          }]
        }).then((res) => {
          this.publicEnd = true
          this.content = ''
          if (res.data.result && res.data.result.code === 0) {
            if (res.data.result) {
              Toast({
                message: '评论提交成功，请等待后台审核',
                duration: 1500
              })
              // this.$rulemodal.show({ content: '评论提交成功，请等待后台审核', style: 'text-align: center' })
              // console.log(res.data.result.data, 'from-data')
              bus.$emit('comment-refresh-data', res.data.result.data)
            }
          } else if (res.data.error && res.data.error.code === 4004) {
            Toast({
              message: '用户未登录，请登陆后进行评论',
              duration: 1500
            })
            setTimeout(() => {
              wlb.ready({
                app: function (mixins) {
                  mixins.loginApp({ refresh: 1, url: `${window.loation.href}` })
                },
                other: function () {
                  window.location.href = api.host + '/wechat/verify?next' + window.location.href + '?source=app'
                }
              })
            }, 1000)
            // this.$rulemodal.show({ content: '用户未登录，请登陆后进行评论', style: 'text-align: center' })
          } else {
            var msg = res.data.error.message
            Toast({
              message: msg,
              duration: 1500
            })
            // this.$rulemodal.show({ content: msg, style: 'text-align: center' })
          }
          this.cancel()
        })
      }
    }
  }
</script>
<style lang="sass" scoped>
  .comment-block
    .comment-public-area
      &::after
        content: ''
        display: block
        clear: both
      .comment-btn
        position: absolute
        bottom: .25rem
        left: 0
        right: 0
        margin: 0 auto
        width: 6.9rem
        height: .9rem
        line-height: .9rem
        background: #FFFFFF
        border: 1px solid #A1AFB4
        z-index: 99
        span
          padding-left: .18rem
          font-size: .3rem
          color: #9B9B9B
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
      position: absolute
      top: 0
      z-index: 99
      transition: all .3s ease
      .comment-form
        position: absolute
        bottom: 0
        background-color: #FFF
        width: 100%
        min-height: 2.4rem
        z-index: 2
        transition: all .3s ease
        .comment-form-head
          overflow: hidden
          padding: .1rem .28rem 0
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
          .disable
            color: #ccc
        .comment-text-content
          resize: none
          padding: 0 .3rem
          width: 6.9rem
          border: 0
          margin: .1rem 0
          font-family: PingFangSC-Light
          font-size: .3rem
          color: #A1AFB4
          letter-spacing: 0
          height: 2rem
          overflow-y: scroll
        .comment-form-foot
          overflow: hidden
          span
            padding: 0 .3rem .3rem
            font-family: PingFangSC-Light
            font-size: .24rem
            color: #9B9B9B
            line-height: .33rem
            float: right
</style>
