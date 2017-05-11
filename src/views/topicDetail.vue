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
          <img :src="item.users.head_img" v-lazyload="{ placeholder: require('../imgs/avatar_defult_big.png') }" />
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
    <comment-list :id="id"></comment-list>
    <comment-form-modal :id="id"></comment-form-modal>
  </div>
</template>
<script>
  import { WlbHeader, CommentFormModal, ShareIcon, CommentList } from '../components'
  export default {
    data () {
      return {
        item: {},
        commentList: [],
        allLoaded: false,
        loaded: false,
        nomore: false
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
        if (this.commentList.length === 0) {
          this.nomore = true
        }
        this.$plugin.loading.show(false)
      })
    },
    methods: {
    },
    components: {
      WlbHeader,
      CommentFormModal,
      ShareIcon,
      CommentList
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
</style>
