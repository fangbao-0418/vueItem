<template>
  <div class="topic-item bg-color-white">
    <div class="tags">
      <span class="tag-essence"></span>
      <span class="tag-stick"></span>
    </div>
    <div class="topic-avatar"><img src="../imgs/avatar_small.png" /></div>
    <div class="topic-main">
      <p class="topic-tit">理财小子</p>
      <p class="topic-ago">12分钟前</p>
      <p class="topic-content">在经济增长趋缓和去杠杆的大背景下，利润增速下滑实属正常，不必过度解读。” 中国社科院金融所银行研究室主任曾刚说，这几年，我国银行业已经走出高增长的“黄金时代”，步入平稳增长阶段。考虑到实体经济仍然处于调整期，这一趋势还将延续，但即便如此，银行的绝对盈利额还是很大的。</p>
      <div class="topic-comment">
        <p class="topic-comment-item mt-20">
          <span>人民日报</span><em>:</em>
          是经济下行压力加大，企业的有效信贷需求是经济下行压力加大，企业的有效信贷需求
        </p>
        <p class="topic-comment-item mt-20">
          <span>不二之选</span><em>:</em>
          是经济下行压力加大，企业的有效信贷需求是经济下行压力加大，企业的有效信贷需求
        </p>
      </div>
      <div class="topic-foot mt-30">
        <router-link :to="{name: 'topicDetail', params: {id: 1}}" class="topic-show-more" tag="span">查看更多评论</router-link>
        <p class="fr">
          <span class="topic-hits">查看(18)</span>
          <span class="topic-comment-num">评论(28)</span>
        </p>
      </div>
    </div>
  </div>
</template>
<style media="screen" lang="sass" scoped>
.topic-item
  padding: .3rem
  display: table
  position: relative
  width: 6.9rem
  .tags
    position: absolute
    top: 0
    right: 0.3rem
    span
      margin-left: .18rem
      width: .4rem
      height: .46rem
      float: left
    .tag-essence
      background: url('../imgs/tag_ssence.png') no-repeat
      background-size: 100% 100%
    .tag-stick
      background: url('../imgs/tag_top.png') no-repeat
      background-size: 100% 100%
  .topic-avatar
    float: left
    img
      width: .4rem
      height: .4rem
  .topic-main
    float: right
    padding-left: .1rem
    width: 6.3rem
    .topic-tit
      font-family: PingFangSC-Regular
      font-size: .24rem
      height: .33rem
      line-height: .33rem
      color: #666666
    .topic-ago
      height: .28rem
      line-height: .28rem
      font-family: PingFangSC-Regular
      font-size: .20rem
      color: #9B9B9B
    .topic-content
      margin-top: .11rem
      font-family: PingFangSC-Regular
      font-size: .3rem
      line-heightL: .42rem
      color: #666666
    .topic-comment
      .topic-comment-item
        font-family: PingFangSC-Light
        font-size: .26rem
        color: #010000
        line-height: .37rem
        span
          color: #12A5E2
        em
          font-size: .26rem
          color: #2A2A2A
    .topic-foot
      height: .33rem
      line-height: .33rem
      .topic-show-more
        font-family: PingFangSC-Regular
        font-size: .24rem
        color: #12A5E2
      .topic-hits, .topic-comment-num
        font-family: PingFangSC-Regular
        font-size: .24rem
        color: #A1AFB4
        display: inline-block
      .topic-hits
        margin: auto .54rem auto auto
        &::before
          content: ''
          float: left
          background: url('../imgs/icon_show.png') no-repeat
          width: .33rem
          height: .33rem
          background-size: .33rem .33rem
          margin-right: .1rem
      .topic-comment-num
        &::after
          content: ''
          float: left
          background: url('../imgs/icon_commit.png') no-repeat
          width: .33rem
          height: .33rem
          background-size: .33rem .33rem
          margin-right: .1rem
</style>
