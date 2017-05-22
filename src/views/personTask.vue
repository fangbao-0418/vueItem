/**
 * [用户任务页]
 */
<template>
  <div class="view">
    <wlb-header>
      <span slot="title">我的任务</span>
    </wlb-header>
    <scroll-wrapper :scrollToTop="false">
      <div class="task-container bg-color-white" :key="index" v-for="(item, index) in data">
        <div class="task-title mt-30">
          <div :class="[{ 'day-task': item.task === 'day' }, { 'new-task': item.task !== 'day' }, 'title']">{{item.title}}</div>
          <span class="rule" @click="showRule(item.task)">任务规则</span>
        </div>
        <task-item :key="index2" v-for="(item2, index2) in item.list">
          <img :src="item2.icon" class="task-image" slot="image" />
          <span slot="task">{{item2.description}}</span>
          <span slot="award">{{item2.award}}</span>
          <task-plan :data="item2" slot="right"></task-plan>
        </task-item>
      </div>
    </scroll-wrapper>
  </div>
</template>
<script>
import { ScrollWrapper, WlbHeader, TaskItem, TaskPlan } from '../components'
export default {
  data () {
    return {
      data: {}
    }
  },
  components: {
    ScrollWrapper,
    WlbHeader,
    TaskItem,
    TaskPlan
  },
  created () {
    this.$plugin.loading.show(true, 'full')
    this.$http({
      url: this.$api.api_list,
      method: 'queryBbsUserTask',
      params: [{}]
    }).then((res) => {
      this.data = res.data.result.data
      this.$plugin.loading.show(false)
    })
  },
  methods: {
    showRule (task) {
      var option = {}
      switch (task) {
        case 'day':
          option = {
            title: '每日任务规则',
            content: `1.用户可通过完成指定的每日任务，获得体验金奖励。
2.体验金有效期7天。
3.每日任务所产生的奖励每天只可领取一次。`
          }
          break
        case 'achieve':
          option = {
            title: '成就任务规则',
            content: `1.用户可通过完成指定的成就任务，获得高额体验金奖励。
2.体验金有效期7天。
3.成就任务所产生的奖励只可领取一次。`
          }
          break
        default:
          break
      }
      this.$rulemodal.show(option)
    }
  }
}
</script>
<style media="screen" lang="sass" scoped>
.task-container
  .task-title
    position: relative
    padding: 0 .3rem
    height: 1.1rem
    border-bottom: 1px solid #e5e5e5
  .title
    width: 100%
    height: .58rem
    line-height: .48rem
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
    top: .12rem
    font-family: PingFangSC-Light
    font-size: .2rem
    color: #A1AFB4
    letter-spacing: 0
  .task-image
    float: left
    width: .44rem
    height: .44rem
  .task-btn
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
    position: relative
    overflow: hidden
  .btn-bg
    background: #12a5e2
    color: #fff
</style>
