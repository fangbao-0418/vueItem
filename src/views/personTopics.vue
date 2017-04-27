<template>
  <div class="view">
    <wlb-header>
      <span slot="title">我的帖子</span>
    </wlb-header>
    <my-topic-item :post-item="postItem" :index="index" v-for="(postItem, index) in postItems" :key="postItem.title"></my-topic-item>
    <div v-if="! postItems.length" class="empty">
      <div class="text">还没有发帖纪录哦</div>
      <router-link :to="{name: 'topicAdd'}" class="go-topic">去发帖</router-link>
    </div>
  </div>
</template>
<script>
import { WlbHeader, MyTopicItem } from '../components'
export default {
  data () {
    return {
//      postItems: []
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
.empty
  position: absolute
  top: 50%
  margin-top: -1.5rem
  width: 100%
  height: 3rem
  text-align: center
  background: url('../imgs/post_defult.png') no-repeat center 0/ 3rem 3rem
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
