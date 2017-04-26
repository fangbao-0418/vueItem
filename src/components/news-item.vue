<template>
  <div class="news-content">
    <div v-if="item.type == 'normal'" class="news-box bg-color-white mt-20">
      <div class="item-title">
        {{item.name}}
        <span class="fixed-text">评论了你的帖子</span>
        {{item.title}}
      </div>
      <div class="item-content" v-text="item.content"></div>
      <div class="item-time fr" v-text="item.time"></div>
    </div>
    <div v-else class="news-delete news-box bg-color-white mt-20">
      <div class="delete-con">
        <span>发表的评论</span>
        <span class="delete-title">{{item.title}}</span>
        <span>因政治敏感被管理员删除</span>
      </div>
      <div class="item-time fr" v-text="item.time"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
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
    .delete-con
      overflow: hidden
    span
      float: left
    .delete-title
      width: 3.5rem
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      color: #12a5e2
</style>
