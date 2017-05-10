<template>
  <div>
    <div :key="index" class="topic-item bg-color-white mb-20" v-for="(item, index) in data">
      <div class="tags">
        <topic-tags :tags="{ ishot: item.ishot, isgreat: item.isgreat }"></topic-tags>
      </div>
      <div class="topic-avatar"><img :src="item.users.head_img" /></div>
      <div class="topic-main">
        <p class="topic-tit">{{item.users.nickname}}</p>
        <p class="topic-ago">{{item.updated_at | handleDate}}</p>
        <p class="topic-content">{{item.content | msubstring(0, 64)}}</p>
        <div class="topic-comment">
          <p class="topic-comment-item mt-20" v-if="item.comments" v-for="(comment, index2) in item.comments">
            <span v-if="comment.users">{{comment.users.nickname}}</span><em>:</em>
            {{comment.content}}
          </p>
        </div>
        <div class="topic-foot mt-30">
          <router-link :to="{name: 'topicDetail', params: {id: item.id}}" class="topic-show-more" tag="span">查看更多评论</router-link>
          <p class="fr">
            <span class="topic-hits">查看({{item.views}})</span>
            <span class="topic-comment-num">评论({{item.comment_num}})</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import TopicTags from './topic-tags'
  export default {
    props: {
      data: {
        type: Array
      }
    },
    components: {
      TopicTags
    }
  }
</script>
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
