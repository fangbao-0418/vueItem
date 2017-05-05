/**
 * [我的帖子]
 */
<template>
  <div class="view">
    <wlb-header>
      <span slot="title">我的帖子</span>
    </wlb-header>
    <loadmore v-if="postItems.length" :cb-load-top="loadTop" :cb-load-bottom="loadBottom" :all-loaded="allLoaded" ref="loadmore">
      <my-topic-item :post-item="postItem" :index="index" v-for="(postItem, index) in postItems" :key="postItem.title"></my-topic-item>
      <no-more :visible="nomore"></no-more>
    </loadmore>
    <div v-if="!postItems.length" class="empty">
      <div class="text">还没有发帖纪录哦</div>
      <router-link :to="{name: 'topicAdd'}" class="go-topic">去发帖</router-link>
    </div>
  </div>
</template>
<script>
  import { WlbHeader, MyTopicItem, Loadmore, NoMore } from '../components'
  export default {
    data () {
      return {
        postItems: [],
        page: 1,
        nomore: false
      }
    },
    computed: {
      allLoaded () {
        return this.nomore
      }
    },
    created () {
      this.$plugin.loading.show(true, 'full')
      this.loadData(() => {
        this.$plugin.loading.show(false)
      })
    },
    methods: {
      loadData (cb) {
        this.$http({
          url: this.$api.api_list,
          method: 'getBbsUserThread',
          params: [{
            pageNum: this.$const.BBS_USER_THREAD_PAGE_NUM,
            page: this.page
          }]
        }).then((res) => {
          if (res.data.result.data['last_page'] >= this.page) {
            this.page += 1
            if (this.page === 2) {
              this.postItems = res.data.result.data.list
            } else {
              this.postItems = this.postItems.concat(res.data.result.data.list)
            }
            console.log(this.postItems, this.postItems.length)
          }
          if (res.data.result.data['last_page'] === this.page) {
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
        this.$plugin.loading.show(true)
        this.loadData(() => {
          this.$plugin.loading.show(false)
          this.$refs.loadmore.$children[0].onBottomLoaded()
        })
      }
    },
    components: {
      WlbHeader,
      MyTopicItem,
      Loadmore,
      NoMore
    }
  }
</script>
<style media="screen" lang="sass" scoped>
.empty
  position: absolute
  top: 4.41rem
  width: 100%
  height: 3rem
  text-align: center
  background: url('../imgs/post_defult.png') no-repeat center top / 3rem 3rem
  .text
    padding-top: 2.7rem
    font-family: PingFangSC-Light
    font-size: .24rem
    color: #999
    letter-spacing: 0.01rem
  .go-topic
    display: block
    text-decoration: none
    margin-left: 2.15rem
    margin-top: .66rem
    width: 3.2rem
    height: .8rem;
    line-height: .8rem
    border: .02rem solid #12A5E2
    border-radius: .99rem
    text-align: center
    font-family: PingFangSC-Regular
    font-size: .3rem
    color: #12A5E2
    letter-spacing: 0
</style>
