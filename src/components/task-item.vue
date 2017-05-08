<template>
  <div class="task-item border">
    <div class="task-image"><slot name="image" ></slot></div>
    <div class="task-content">
      <span class="task-des mb-10"><slot name="task"></slot></span>
      <span class="task-award"><slot name="award"></slot></span>
    </div>
    <div class="task-right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  props: ['task']
}
</script>
<style media="screen" lang="sass" scoped>
.border
  border-bottom: 1px solid #e5e5e5
.task-item
  padding: .3rem .4rem .3rem .3rem
  overflow: hidden
  .task-image
    float: left
    padding-right: .33rem
    width: .44rem
    height: .44rem
  .task-content
    float: left
    .task-des
      width: 100%
      float: left
      font-family: PingFangSC-Regular
      font-size: .3rem
      color: #666
      letter-spacing: 0
      line-height: .44rem
    .task-award
      width: 100%
      float: left
      line-height: .44rem
      font-family: PingFangSC-Regular
      font-size: .26rem
      color: #9B9B9B
      letter-spacing: 0
  .task-right
    float: right
</style>
