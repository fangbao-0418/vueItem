<template>
  <div :class="['news-content', { 'readed': item.isread }]" @click="go">
    <div v-if="item.type == 1" class="news-box bg-color-white mt-20">
      <p>
        <span class="color1">您 </span>
        <span>发布的帖子</span>
        <span class="color1"> {{item.threads.content | msubstring(0, 20)}} </span>
        <span>通过了管理员的审核</span>
      </p>
      <div class="item-time mt-27" v-text="item.created_at"></div>
    </div>
    <div v-if="item.type == 2" class="news-box bg-color-white mt-20">
      <p>
        <span class="color1">您 </span><span>发布的帖子 </span>
        <span class="color1">{{item.threads.content | msubstring(0, 20)}}</span>
        <span> 因{{item.del_reason}}被管理员删除</span>
      </p>
      <div class="item-time mt-27" v-text="item.created_at"></div>
    </div>
    <div v-if="item.type == 3" class="news-box bg-color-white mt-20">
      <p>
        <span class="color1">{{item.from_users.nickname}} </span><span>评论了您的帖子 </span>
        <span class="color1">{{item.threads.content | msubstring(0, 10)}}</span>
      </p>
      <p class="font-1 mt-18">{{item.content}}</p>
      <div class="item-time mt-27" v-text="item.created_at"></div>
    </div>
    <div v-if="item.type == 4" class="news-box bg-color-white mt-20">
      <p>
        <span class="color1">您 </span><span>发表的评论</span>
        <span class="color1">{{item.content | msubstring(0, 10)}}</span>
        <span> 因{{item.del_reason}}被管理员删除</span>
      </p>
      <div class="item-time mt-27" v-text="item.created_at"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['item'],
  data () {
    return {}
  },
  methods: {
    go () {
      this.$http({
        url: this.$api.api_list,
        method: 'getBbsThreadDetail',
        params: [{
          fromPm: this.item.id,
          id: this.item.tid
        }]
      })
      this.$router.push({
        name: 'topicDetail',
        params: {
          id: this.item.tid
        }
      })
    }
  }
}
</script>
<style media="screen" lang="sass" scoped>
.font-1
  font-family: PingFangSC-Regular
  font-size: .3rem
  color: #666666
  letter-spacing: 0
  line-height: .42rem
.readed
  p
    color: #9B9B9B !important
    span
      color: #9B9B9B !important
.news-content
  .mt
    margin: 0
  .news-box
    padding: .3rem .3rem .2rem
    overflow: hidden
    p
      word-wrap: break-word
      line-height: .38rem
      span
        font-family: PingFangSC-Regular
        font-size: .27rem
        letter-spacing: 0
        color: #2A2A2A
      .color1
        color: #12A5E2
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
    text-align: right
    padding-top: .07rem
    height: .33rem
    line-height: .33rem
    font-size: .24rem
    color: #a1afb4
</style>
