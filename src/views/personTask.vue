<template>
  <div class="view">
    <wlb-header>
      <span slot="title">我的任务</span>
    </wlb-header>
    <div class="task-container bg-color-white">
      <div class="task-item mt-30">
        <div class="title">今日任务</div>
        <span class="rule">任务规则</span>
      </div>
      <section-item class="section">
        <span slot="image" class="task-image"></span>
        <span class="task-des">发帖子1篇</span>
        <span class="task-award">奖励999体验金</span>
        <button class="task-btn">
          1/5
          <span></span>
        </button>
      </section-item>
    </div>
    <div class="task-container bg-color-white">
      <div class="task-item mt-30">
        <div class="title">新手任务</div>
        <span class="rule">任务规则</span>
      </div>
      <section-item class="section">
        <span slot="image" class="task-image"></span>
        <span class="task-des">发帖子1篇</span>
        <span class="task-award">奖励999体验金</span>
        <button class="task-btn">
          1/5
          <span></span>
        </button>
      </section-item>
    </div>
  </div>
</template>
<script>
import { WlbHeader, SectionItem } from '../components'
export default {
  data () {
    return {}
  },
  components: {
    WlbHeader,
    SectionItem
  }
}
</script>
<style media="screen" lang="sass" scoped>
.view .task-container
  .task-item
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
  .section
    padding: .3rem .4rem .3rem .3rem
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
      border-radius: .08rem
      font-size: .2rem
      color: #9b9b9b
      height: .4rem
      width: .8rem
      margin-top: .02rem
      line-height: .4rem
      background: #eee
      span
        float: left;
        position: absolute
        right: .96rem
        background: #12a5e2
        width: .24rem
        height: .4rem
        border-radius: .08rem 0 0 .08rem
</style>
