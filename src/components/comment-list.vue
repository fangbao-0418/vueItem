<template>
  <div>
    <div class="comment-area mt-20" v-if="data && data.length" >
      <div class="comment-sign bg-color-white">
        <span>评论列表 ({{total}})</span>
      </div>
      <loadmore :cb-load-top="loadTop" :cb-load-bottom="loadBottom" :all-loaded="allLoaded" ref="loadmore">
        <ul class="comment-items bg-color-white">
          <li v-for="(item, index) in data" v-if="item.users">
            <div class="comment-avatar">
              <img :src="item.users.head_img" v-lazyload="{ placeholder: require('../imgs/avatar_defult_big.png') }" />
            </div>
            <div class="comment-right">
              <div class="comment-head">
                <div class="comment-head-left">
                  <p class="comment-user">{{item.users.nickname}}</p>
                  <p class="comment-ago">{{item.updated_at | handleDate}}</p>
                </div>
                <div class="comment-head-right">
                  <span class="comment-floor">{{index+1}}#</span>
                </div>
              </div>
              <p class="comment-content mt-20">{{item.content}}</p>
            </div>
          </li>
        </ul>
        <no-more :visible="total === 0" content="～暂时没有评论～"></no-more>
        <no-more v-if="total > 0" :visible="nomore" content="～没有更多了～"></no-more>
      </loadmore>
    </div>
  </div>
</template>
<script>
  import Loadmore from './load-more'
  import NoMore from './no-more'
  export default {
    props: {
      id: {
        type: Number
      }
    },
    data () {
      return {
        data: [],
        page: 1,
        lastPage: 1,
        nomore: true,
        total: 0
      }
    },
    created () {
      this.$plugin.loading.show(true, 'full')
      this.loadData(() => {
        this.$plugin.loading.show(false)
      })
    },
    computed: {
      allLoaded () {
        return this.nomore
      }
    },
    methods: {
      loadData (cb) {
        this.$http({
          url: this.$api.api_list,
          method: 'getBbsCommentList',
          params: [{
            id: this.id,
            pageNum: 10,
            page: this.page
          }]
        }).then((res) => {
          this.total = res.data.result.data.total
          this.lastPage = res.data.result.data['last_page']
          this.page += 1
          if (res.data.result.data['last_page'] + 1 >= this.page) {
            if (this.page === 2) {
              this.data = res.data.result.data.data
            } else {
              this.data = this.data.concat(res.data.result.data.data)
            }
          }
          if (res.data.result.data['last_page'] < this.page) {
            this.nomore = true
          } else {
            this.nomore = false
          }
          cb && cb()
        })
      },
      loadTop () {
        this.page = 1
        this.$plugin.loading.show(true)
        this.loadData(() => {
          this.$plugin.loading.show(false)
          this.$refs.loadmore.$children[0].onTopLoaded()
        })
      },
      loadBottom () {
        if (this.lastPage <= this.page) {
          return ''
        }
        this.$plugin.loading.show(true)
        this.loadData(() => {
          this.$plugin.loading.show(false)
          this.$refs.loadmore.$children[0].onBottomLoaded()
        })
      }
    },
    components: {
      Loadmore,
      NoMore
    }
  }
</script>
<style lang="sass" scoped>
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
</style>
