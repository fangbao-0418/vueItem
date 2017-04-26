<template>
  <div class="post-item mt-20 bg-color-white" :class="{'mt':index == 0}">
    <div class="post-header">
      <span class="post-title" v-text="postItem.title"></span>
      <span class="post-content" v-text="postItem.content"></span>
    </div>
    <div class="post-foot">
      <p class="fl">
        <span class="post-hits">查看({{postItem.hits}})</span>
        <span class="post-comment-num">评论({{postItem.comment}})</span>
      </p>
      <div class="fr" v-text="postItem.time">2017-03-31 14:29</div>
    </div>
  </div>
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
    .post-title
      &::after
        content: ':'
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
