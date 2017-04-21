/**
 * [帖子详情页面]
 */
<template>
  <div class="view">
    <wlb-header>
      <span slot="title">帖子详情</span>
    </wlb-header>
    <div class="container mt-20">
      <div class="topic-head">
        <div class="topic-avatar mr-20">
          <img src="../imgs/avatar_big.png" alt="">
        </div>
        <div class="topic-info">
          <p><span class="topic-author">Beforsee</span></p>
          <p><span class="topic-time">2017-05-02 15:30</span></p>
        </div>
      </div>
      <div class="topic-content mt-20">
        <p>
          在经济增长趋缓和去杠杆的大背景下，利润增速下滑实属正常，不必过度解读。” 中国社科院金融所银行研究室主任曾刚说，这几年，我国银行业已经走出高增长的“黄金时代”，步入平稳增长阶段。考虑到实体经济仍然处于调整期，这一趋势还将延续，但即便如此，银行的绝对盈利额还是很大的。
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import { WlbHeader } from '../components'
  export default {
    components: {
      WlbHeader
    }
  }
</script>
<style lang="sass" scoped>
  .container
    padding: 0 .3rem
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
        font-family: PingFangSC-Regular
        font-size: .3rem
        line-height: .42rem
        color: #666666
</style>
