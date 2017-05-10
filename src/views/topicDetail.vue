/**
 * [帖子详情页面]
 */
<template>
  <div class="view" v-if="loaded">
    <wlb-header>
      <span slot="title">帖子详情</span>
      <share-icon slot="right"></share-icon>
    </wlb-header>
    <div class="container bg-color-white">
      <div class="topic-head">
        <div class="topic-avatar mr-20">
          <img :src="item.users.head_img"/>
        </div>
        <div class="topic-info">
          <p><span class="topic-author">{{item.users.nickname}}</span></p>
          <p><span class="topic-time">{{item.updated_at}}</span></p>
        </div>
      </div>
      <div class="topic-content mt-20">
        <p>{{item.content}}</p>
      </div>
    </div>
    <div class="comment-area mt-20 bg-color-white">
      <div class="comment-sign">
        <span>评论列表 (6)</span>
      </div>
      <loadmore v-if="commentList && commentList.length" :cb-load-top="loadTop" :cb-load-bottom="loadBottom" :all-loaded="allLoaded" ref="loadmore">
        <ul class="comment-items">
          <li v-for="item in commentList">
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
              <p class="comment-content mt-20">{{item.content}}</p>
            </div>
          </li>
        </ul>
      </loadmore>
    </div>
    <div class="comment-public-area">
      <div class="comment-btn" @click="publicComment">
        <span>说点什么吧~</span>
      </div>
    </div>
    <comment-form-modal :show="show" :id="id"></comment-form-modal>
  </div>
</template>
<script>
  import bus from '../bus'
  import { WlbHeader, CommentFormModal, ShareIcon, Loadmore } from '../components'
  export default {
    data () {
      return {
        show: false,
        item: {},
        commentList: [],
        allLoaded: false,
        loaded: false
      }
    },
    computed: {
      id () {
        return parseInt(this.$route.params.id)
      }
    },
    created () {
      this.$plugin.loading.show(true, 'full')
      this.$http({
        url: this.$api.api_list,
        method: 'getBbsThreadDetail',
        params: [{
          id: this.id
        }]
      }).then((res) => {
        this.loaded = true
        this.item = res.data.result.data.thread_info
        this.commentList = res.data.result.data.comment_list
        this.$plugin.loading.show(false)
      })
    },
    mounted () {
      bus.$on('comment-cancel', () => {
        this.show = false
      })
    },
    methods: {
      publicComment () {
        this.show = true
      },
      loadTop () {

      },
      loadBottom () {

      }
    },
    components: {
      WlbHeader,
      CommentFormModal,
      ShareIcon,
      Loadmore
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
        white-space: pre-wrap
        word-wrap: break-word
        overflow: hidden
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
      height: 1.75rem
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
