<template>
  <div class="view">
    <wlb-header>
      <span slot="title">我的消息</span>
      <span slot="right" class="rightBtnText" @click="allDel">全部删除</span>
    </wlb-header>
    <scroll-wrapper>
      <loadmore v-if="data.length" :cb-load-top="loadTop" :cb-load-bottom="loadBottom" :all-loaded="allLoaded" ref="loadmore">
        <news-item :item="item" v-for="(item, index) in data" :key="index"></news-item>
      </loadmore>
      <no-more v-if="data.length > 0" :visible="nomore"></no-more>
      <div v-if="data.length === 0" class="empty">
        <div>还没有消息哦</div>
      </div>
    </scroll-wrapper>  
  </div>
</template>
<script>
import { ScrollWrapper, WlbHeader, NewsItem, Loadmore, NoMore } from '../components'
export default {
  components: {
    ScrollWrapper,
    WlbHeader,
    NewsItem,
    Loadmore,
    NoMore
  },
  data () {
    return {
      data: [],
      page: 1,
      lastPage: 1,
      nomore: false
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
        method: 'getBbsUserPm',
        params: [{
          pageNum: this.$const.BBS_USER_PM_PAGE_NUM,
          page: this.page
        }]
      }).then((res) => {
        this.page += 1
        this.lastPage = res.data.result.data['last_page']
        if (this.lastPage + 1 >= this.page) {
          if (this.page === 2) {
            this.data = res.data.result.data.list
          } else {
            this.data = this.data.concat(res.data.result.data.list)
          }
        }
        if (this.lastPage < this.page) {
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
      if (this.page > this.lastPage) {
        return ''
      }
      this.$plugin.loading.show(true)
      this.loadData(() => {
        this.$plugin.loading.show(false)
        this.$refs.loadmore.$children[0].onBottomLoaded()
      })
    },
    allDel () {
      if (this.data.length === 0) {
        this.$rulemodal.show({ content: '没有可删除的消息', style: 'text-align: center' })
      } else {
        this.$http({
          url: this.$api.api_list,
          method: 'delBbsUserAllPm',
          params: [{}]
        }).then((res) => {
          this.data = []
          this.$rulemodal.show({ content: '已全部删除了消息', style: 'text-align: center' })
        })
      }
    }
  }
}
</script>
<style media="screen" lang="sass" scoped>
.rightBtnText
  font-family: PingFangSC-Regular
  font-size: .26rem
  line-height: .37rem
  color: #FFFFFF
  letter-spacing: 0
.empty
  position: absolute
  top: 50%
  margin-top: -1.5rem
  width: 100%
  height: 3rem
  text-align: center
  background: url('../imgs/message_defult.png') no-repeat center 0/ 3rem 3rem
  div
    padding-top: 2.7rem
    font-family: PingFangSC-Light
    font-size: .24rem
    color: #999
    letter-spacing: 0.01re
</style>
