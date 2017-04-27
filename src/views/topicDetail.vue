/**
 * [帖子详情页面]
 */
<template>
  <div class="view" type="share">
    <wlb-header>
      <span slot="title">帖子详情</span>
    </wlb-header>
    <div class="container bg-color-white">
      <div class="topic-head">
        <div class="topic-avatar mr-20">
          <img src="../imgs/avatar_big.png" alt="">
        </div>
        <div class="topic-info">
          <p><span class="topic-author">Beforsee</span></p>
          <p><span class="topic-time">2017-05-02 15:30</span></p>
        </div>
      </div>
      <div class="topic-content mt-20">
        <p>
          在经济增长趋缓和去杠杆的大背景下，利润增速下滑实属正常，不必过度解读。” 中国社科院金融所银行研究室主任曾刚说，这几年，我国银行业已经走出高增长的“黄金时代”，步入平稳增长阶段。考虑到实体经济仍然处于调整期，这一趋势还将延续，但即便如此，银行的绝对盈利额还是很大的。
        </p>
      </div>
    </div>
    <div class="comment-area mt-20 bg-color-white">
      <div class="comment-sign">
        <span>评论列表 (6)</span>
      </div>
      <ul class="comment-items">
        <li>
          <div class="comment-avatar">
            <img src="../imgs/avatar_small.png" />
          </div>
          <div class="comment-right">
            <div class="comment-head">
              <div class="comment-head-left">
                <p class="comment-user">理财小子</p>
                <p class="comment-ago">12分钟前</p>
              </div>
              <div class="comment-head-right">
                <span class="comment-floor">1#</span>
              </div>
            </div>
            <p class="comment-content mt-20">
              在经济增长趋缓和去杠杆的大背景下，利润增速下滑实属正常，不必过度解读。
            </p>
          </div>
        </li>
        <li>
          <div class="comment-avatar">
            <img src="../imgs/avatar_small.png" />
          </div>
          <div class="comment-right">
            <div class="comment-head">
              <div class="comment-head-left">
                <p class="comment-user">理财小子</p>
                <p class="comment-ago">12分钟前</p>
              </div>
              <div class="comment-head-right">
                <span class="comment-floor">1#</span>
              </div>
            </div>
            <p class="comment-content mt-20">
              在经济增长趋缓和去杠杆的大背景下，利润增速下滑实属正常，不必过度解读。
            </p>
          </div>
        </li>
        <li>
          <div class="comment-avatar">
            <img src="../imgs/avatar_small.png" />
          </div>
          <div class="comment-right">
            <div class="comment-head">
              <div class="comment-head-left">
                <p class="comment-user">理财小子</p>
                <p class="comment-ago">12分钟前</p>
              </div>
              <div class="comment-head-right">
                <span class="comment-floor">1#</span>
              </div>
            </div>
            <p class="comment-content mt-20">
              在经济增长趋缓和去杠杆的大背景下，利润增速下滑实属正常，不必过度解读。
            </p>
          </div>
        </li>
        <li>
          <div class="comment-avatar">
            <img src="../imgs/avatar_small.png" />
          </div>
          <div class="comment-right">
            <div class="comment-head">
              <div class="comment-head-left">
                <p class="comment-user">理财小子</p>
                <p class="comment-ago">12分钟前</p>
              </div>
              <div class="comment-head-right">
                <span class="comment-floor">1#</span>
              </div>
            </div>
            <p class="comment-content mt-20">
              在经济增长趋缓和去杠杆的大背景下，利润增速下滑实属正常，不必过度解读。
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="comment-public-area">
      <div class="comment-btn" @click="publicComment">
        <span>说点什么吧~</span>
      </div>
    </div>
    <comment-form-modal :show="show"></comment-form-modal>
  </div>
</template>
<script>
  import bus from '../bus'
  import { WlbHeader, CommentFormModal } from '../components'
  export default {
    data () {
      return {
        show: false
      }
    },
    mounted () {
      bus.$on('comment-cancel', () => {
        this.show = false
      })
    },
    methods: {
      publicComment () {
        this.show = true
      }
    },
    components: {
      WlbHeader,
      CommentFormModal
    }
  }
</script>
<style lang="sass" scoped>
  .container
    padding: .2rem .3rem .3rem
    .topic-head
      &::after
        content: ''
        clear: both
        display: block
      .topic-avatar
        float: left
        img
          display: inline-block
          width: .8rem
          height: .8rem
      .topic-info
        float: left
        .topic-author
          font-family: PingFangSC-Regular
          font-size: .28rem
          height: .4rem
          line-height: .4rem
          color: #666666
          letter-spacing: 0
        .topic-time
          font-family: PingFangSC-Light
          font-size: .24rem
          height:
          color: #A1AFB4
          letter-spacing: 0
    .topic-content
      margin-left: .5rem
      p
        font-family: PingFangSC-Regular
        font-size: .3rem
        line-height: .42rem
        color: #666666
  .comment-area
    .comment-sign
      padding: 0 .3rem
      height: .6rem
      line-height: .6rem
      border-bottom: 1px solid #E5E5E5
      box-sizing: border-box
      span
        font-family: PingFangSC-Regular
        font-size: .24rem
        color: #A1AFB4
    .comment-items
      list-style: none
      overflow: hidden
      li
        float: left
        padding: .3rem
        border-bottom: 1px solid #E5E5E5
        .comment-avatar
          float: left
          width: .4rem
          img
            width: .4rem
            height: .4rem
            border-radius: 50%
        .comment-right
          margin-left: .1rem
          width: 6.4rem
          float: right
          .comment-head
            overflow: hidden
            .comment-head-left
              width: 80%
              float: left
              .comment-user
                font-family: PingFangSC-Regular
                font-size: .24rem
                color: #666666
                line-height: .33rem
              .comment-ago
                font-family: PingFangSC-Regular
                font-size: .2rem
                color: #9B9B9B
                line-height: .28rem
            .comment-head-right
              width: 20%
              float: right
              text-align: right
              line-height: .6rem
              .comment-floor
                font-family: PingFangSC-Light
                font-size: .3rem
                color: #013047
          .comment-content
            font-family: PingFangSC-Light
            font-size: .3rem
            color: #013047
            line-height: .42rem
  .comment-public-area
    &::before
      content: ''
      display: block
      margin-top: 1.75rem
    .comment-btn
      position: fixed
      bottom: .25rem
      left: 0
      right: 0
      margin: 0 auto
      width: 6.9rem
      height: .9rem
      line-height: .9rem
      background: #FFFFFF
      border: 1px solid #A1AFB4
      span
        padding-left: .18rem
        font-size: .3rem
        color: #9B9B9B
</style>
