<template>
  <div class="view">
    <wlb-header>
      <span slot="title">我的消息</span>
    </wlb-header>
    <loadmore v-if="data.length" :cb-load-top="loadTop" :cb-load-bottom="loadBottom" :all-loaded="allLoaded" ref="loadmore">
      <news-item :item="item" :index="index" v-for="(item, index) in data" :key="item.name"></news-item>
    </loadmore>
    <no-more v-if="data.length > 0" :visible="nomore"></no-more>
    <div v-if="data.length === 0" class="empty">
      <div>还没有消息哦</div>
    </div>
  </div>
</template>
<script>
import { WlbHeader, NewsItem, Loadmore, NoMore } from '../components'
export default {
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
  components: {
    WlbHeader,
    NewsItem,
    Loadmore,
    NoMore
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
    }
  }
}
</script>
<style media="screen" lang="sass" scoped>
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
