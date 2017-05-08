/**
 * [用户任务页]
 */
<template>
  <div class="view">
    <wlb-header>
      <span slot="title">我的任务</span>
    </wlb-header>
    <div class="task-container bg-color-white" :key="index" v-for="(item, index) in data">
      <div class="task-title mt-30">
        <div class="day-task title">{{index === 'day' ? '今日任务' : '成就任务'}}</div>
        <span class="rule" @click="showRule()">任务规则</span>
      </div>
      <task-item :key="index2" v-for="(item2, index2) in item">
        <span class="task-image-1" slot="image"></span>
        <span slot="task">{{item2.description}}</span>
        <span slot="award">{{item2.award}}</span>
        <task-plan :data="item2" slot="right"></task-plan>
      </task-item>
      <!-- <task-item>
        <span class="task-image-2" slot="image"></span>
        <span slot="task">收到3条评价</span>
        <span slot="award">奖励999元体验金</span>
        <task-plan :rate="current/finish" slot="right"></task-plan>
      </task-item> -->
    </div>
    <div class="task-container bg-color-white">
      <div class="task-title mt-30">
        <div class="new-task title">新手任务</div>
        <span class="rule" @click="showRule()">任务规则</span>
      </div>
      <task-item>
        <span class="task-image-1" slot="image"></span>
        <span slot="task">发帖子1篇</span>
        <span slot="award">奖励999元体验金</span>
      </task-item>
      <task-item>
        <span class="task-image-2" slot="image"></span>
        <span slot="task">收到3条评价</span>
        <span slot="award">奖励999元体验金</span>
        <button class="task-btn btn-bg" slot="right">领取</button>
      </task-item>
    </div>
  </div>
</template>
<script>
import { WlbHeader, TaskItem, TaskPlan } from '../components'
export default {
  data () {
    return {
      data: {}
    }
  },
  components: {
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
    showRule () {
      this.$rulemodal.show({
        title: '活动规则',
        content: '新华社北京4月26日电 中共中央政治局4月25日下午就维护国家金融安全进行第四十次集体学习。中共中央总书记习近平在主持学习时强调，金融安全是国家安全的重要组成部分，是经济平稳健康发展的重要基础。维护金融安全，是关系我国经济社会发展全局的一件带有战略性、根本性的大事。金融活，经济活；金融稳，经济稳。必须充分认识金融在经济发展和社会生活中的重要地位和作用，切实把维护金融安全作为治国理政的一件大事，扎扎实实把金融工作做好。'
      })
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
  .task-image-1
    float: left
    width: .44rem
    height: .44rem
    background: url('../imgs/icon_post.png') no-repeat 0 0 / .44rem .44rem
  .task-image-2
    float: left
    width: .44rem
    height: .44rem
    background: url('../imgs/icon_comment.png') no-repeat 0 0 / .44rem .44rem
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
