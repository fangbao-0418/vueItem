<template>
  <div class="view">
    <wlb-header>
      <span slot="title">我的消息</span>
    </wlb-header>
    <news-item :item="item" v-for="item in news" :key="item.name"></news-item>
  </div>
</template>
<script>
import { WlbHeader, NewsItem } from '../components'
export default {
  data () {
    return {
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
  components: {
    WlbHeader,
    NewsItem
  }
}
</script>
<style media="screen" lang="sass" scoped>

</style>
