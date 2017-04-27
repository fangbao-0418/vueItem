<template>
  <div class="view">
    <wlb-header>
      <span slot="title">我的任务</span>
    </wlb-header>
    <div class="task-container bg-color-white">
      <div class="task-title mt-30">
        <div class="day-task title">今日任务</div>
        <span class="rule">任务规则</span>
      </div>
      <task-item></task-item>
      <task-item :task="'DAY'"></task-item>
    </div>
    <div class="task-container bg-color-white">
      <div class="task-title mt-30">
        <div class="new-task title">新手任务</div>
        <span class="rule">任务规则</span>
      </div>
      <task-item></task-item>
      <task-item :task="'NEW'"></task-item>
    </div>
  </div>
</template>
<script>
import { WlbHeader, TaskItem } from '../components'
export default {
  data () {
    return {}
  },
  components: {
    WlbHeader,
    TaskItem
  }
}
</script>
<style media="screen" lang="sass" scoped>
.view .task-container
  .task-title
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
  .day-task
    background: url('../imgs/daytask.png') no-repeat center 0 / 1.8rem .58rem
  .new-task
    background: url('../imgs/newtask.png') no-repeat center 0 / 1.8rem .58rem
  .rule
    position: absolute
    right: .4rem
    top: .1rem
    font-family: PingFangSC-Light
    font-size: .18rem
    color: #A1AFB4
    letter-spacing: 0
</style>
