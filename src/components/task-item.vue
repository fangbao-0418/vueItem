<template>
  <div class="task-item">
    <span slot="image" class="task-image"></span>
    <span class="task-des">发帖子1篇</span>
    <span class="task-award">奖励999体验金</span>
    <button class="task-btn" v-if="task == 'DAY'">
      1/5
      <span></span>
    </button>
    <button class="task-btn btn-bg" v-if="task == 'NEW'">领取</button>
  </div>
</template>
<script>
export default {
  props: ['task']
}
</script>
<style media="screen" lang="sass" scoped>
.task-item
  padding: .3rem .4rem .3rem .3rem
  overflow: hidden
  .task-image
    float: left
    padding-right: .33rem
    width: .44rem
    height: .44rem
    background: url('../imgs/icon_post.png') no-repeat 0 0 / .44rem .44rem
  .task-des
    float: left
    font-family: PingFangSC-Regular
    font-size: .3rem
    color: #666
    letter-spacing: 0
    line-height: .44rem
  .task-award
    position: absolute
    left: 3.27rem
    line-height: .44rem
    font-family: PingFangSC-Regular
    font-size: .26rem
    color: #9B9B9B
    letter-spacing: 0
  .task-btn
    float: right
    padding: 0
    border: none
    outline: none
    border-radius: .08rem
    font-size: .2rem
    color: #9b9b9b
    height: .4rem
    width: .8rem
    margin-top: .02rem
    line-height: .4rem
    background: #eee
    span
      float: left
      position: absolute
      right: .96rem
      background: #12a5e2
      width: .24rem
      height: .4rem
      border-radius: .08rem 0 0 .08rem
  .btn-bg
    background: #12a5e2
    color: #fff
</style>
