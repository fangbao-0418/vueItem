<template>
  <div class="news-content">
    <div class="news-box bg-color-white mt-20">
      <div class="item-title">
        {{item.name}}
        <span class="fixed-text">评论了你的帖子</span>
        {{item.title}}
      </div>
      <div class="item-content">
        网利宝交易额突破100亿网利宝交易额突破亿网利宝交易额突破100亿网利宝交易额突破100亿,网利宝交易额突破100亿网利宝交易额突破100亿
      </div>
      <div class="item-time fr">
        2017-03-31 14:29
      </div>
    </div>
    <div class="news-box bg-color-white mt-20">
      <div class="item-title">
        {{item.name}}
        <span class="fixed-text">评论了你的帖子</span>
        {{item.title}}
      </div>
      <div class="item-content">
        网利宝交易额突破100亿网利宝交易额突破亿网利宝交易额突破100亿网利宝交易额突破100亿,网利宝交易额突破100亿网利宝交易额突破100亿
      </div>
      <div class="item-time fr">
        2017-03-31 14:29
      </div>
    </div>
    <div class="news-delete news-box bg-color-white mt-20">
      <span>发表的评论</span>
      <span class="delete-title">{{item.title}}</span>
      <span>因政治敏感被管理员删除</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      item: {
        name: 'EMBA',
        title: '网利宝交易额突破100亿网利宝交易额突破100亿'
      }
    }
  }
}
</script>
<style media="screen" lang="sass" scoped>
.news-content
  .news-box
    padding: .3rem .3rem .2rem
    overflow: hidden
  .item-title
    width: 5.3rem
    height: .33rem
    line-height: .33rem
    font-size: .24rem
    color: #12a5e2
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    .fixed-text
      color: #2a2a2a
  .item-content
    padding-top: .18rem
    font-size: .3rem
    color: #666
    letter-spacing: .02rem
  .item-time
    padding-top: .07rem
    height: .33rem
    line-height: .33rem
    font-size: .24rem
    color: #a1afb4
  .news-delete
    font-size: .3rem
    color: #666
    span
      float: left
    .delete-title
      width: 3.5rem
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      color: #12a5e2
</style>
