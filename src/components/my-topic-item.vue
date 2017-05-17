<template>
  <router-link :to="{name: 'topicDetail', params: { id: postItem.id }}" class="post-item mt-20 bg-color-white" :class="{'mt':index === 0}" tag="div">
    <div class="post-header">
      <p class="post-content" v-text="postItem.content"></p>
    </div>
    <div class="post-foot">
      <p class="fl">
        <span class="post-hits">查看({{postItem.views}})</span>
        <span class="post-comment-num">评论({{postItem.comment_num}})</span>
      </p>
      <div class="fr" v-text="postItem.created_at">2017-03-31 14:29</div>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ['postItem', 'index']
}
</script>
<style media="screen" lang="sass" scoped>
.mt
  margin-top: 0
.post-item
  padding: .3rem
  .post-header
    font-size: .3rem
    color: #666
    .post-content
      line-height: .42rem
      word-wrap: break-word
  .post-foot
    padding-top: .3rem
    height: .33rem
    line-height: .33rem
    overflow: hidden;
    font-family: PingFangSC-Regular
    font-size: .24rem
    color: #A1AFB4
    .post-hits, .post-comment-num
      display: inline-block
    .post-hits
      margin: auto .54rem auto auto
      &::before
        content: ''
        float: left
        background: url('../imgs/icon_show.png') no-repeat
        width: .33rem
        height: .33rem
        background-size: .33rem .33rem
        margin-right: .1rem
    .post-comment-num
      &::after
        content: ''
        float: left
        background: url('../imgs/icon_commit.png') no-repeat
        width: .33rem
        height: .33rem
        background-size: .33rem .33rem
        margin-right: .1rem
</style>
