<template>
  <div class="view">
    <wlb-header>
      <span slot="title">我的消息</span>
    </wlb-header>
    <news-item :item="item" :index="index" v-for="(item, index) in news" :key="item.name"></news-item>
    <div v-if="! news.length" class="empty">
      <div>还没有消息哦</div>
    </div>
  </div>
</template>
<script>
import { WlbHeader, NewsItem } from '../components'
export default {
  data () {
    return {
//      news: []
      news: [{
        type: 'normal',
        name: 'EMAD',
        title: '网利宝交易突破100亿',
        content: '网利宝始终对金融风险怀着敬畏之心,恪守合法合规与风险控制两大底线，简直稳健发展，并以稳健被行业熟知',
        time: '2017-03-31 18:59'
      }, {
        type: 'normal',
        name: 'EMAD',
        title: '网利宝交易突破100亿',
        content: '网利宝始终对金融风险怀着敬畏之心,恪守合法合规与风险控制两大底线，简直稳健发展，并以稳健被行业熟知',
        time: '2017-03-31 18:59'
      }, {
        type: 'delete',
        title: '网利宝交易突破100亿',
        time: '2017-03-31 18:59'
      }]
    }
  },
  created () {
    this.$http({
      url: this.$api.api_list,
      method: 'getBbsUserPm',
      params: [{
        page: 1,
        pageNum: this.$const.BBS_USER_PM_PAGE_NUM
      }]
    }).then((res) => {
      console.log(res)
    })
  },
  components: {
    WlbHeader,
    NewsItem
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
