<template>
  <div class="view">
    <wlb-header>
      <span slot="title">我的帖子</span>
    </wlb-header>
    <my-topic-item :post-item="postItem" :index="index" v-for="(postItem, index) in postItems" :key="postItem.title"></my-topic-item>
  </div>
</template>
<script>
import { WlbHeader, MyTopicItem } from '../components'
export default {
  data () {
    return {
      postItems: [{
        title: '中共中央发文',
        content: '党的工作机关不设正职领导助理',
        hits: '1800',
        comment: '500',
        time: '2017-03-31 14:56'
      }, {
        title: '中共中央发文',
        content: '做产品投资不影响相信封口 而应该找这个风',
        hits: '15',
        comment: '500',
        time: '2017-03-31 14:56'
      }, {
        title: '中共中央发文',
        content: '做产品投资不影响相信封口 而应该找这个风',
        hits: '15',
        comment: '500',
        time: '2017-03-31 14:56'
      }]
    }
  },
  components: {
    WlbHeader,
    MyTopicItem
  }
}
</script>
<style media="screen" lang="sass" scoped>

</style>
