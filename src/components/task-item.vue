<template>
  <div class="task-item mt-30">
    <div class="title">今日任务</div>
    <span class="rule">任务规则</span>
  </div>
</template>
<style media="screen" lang="sass" scoped>
.task-item;
  position: relative
  padding: 0 .3rem
  height: 1.1rem
  border-bottom: 1px solid #e5e5e5
  .title
    width: 100%
    height: .58rem
    line-height: .58rem
    font-size: .24rem
    color: #FFF
    text-align: center
    background: url('../imgs/daytask.png') no-repeat center 0 / 1.8rem .58rem
  .rule
    position: absolute
    right: .4rem
    top: .1rem
    font-family: PingFangSC-Light
    font-size: .18rem
    color: #A1AFB4
    letter-spacing: 0
</style>
