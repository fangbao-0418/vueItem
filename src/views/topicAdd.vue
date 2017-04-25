<template>
  <div class="view">
    <wlb-header>
      <span slot="title">有问有答</span>
    </wlb-header>
    <div class="topic-text-content" contenteditable=true>
      写点什么吧
    </div>
    <p class="residue">你还可以输入500字</p>
    <div class="topic-edit-foot">
      <div class="topic-edit-type">
        <span class="topic-edit-type-chat active">闲聊</span>
        <span class="topic-edit-type-ask">问答</span>
      </div>
      <span class="topic-edit-sub">发表</span>
    </div>
  </div>
</template>
<script type="text/javascript">
  import { WlbHeader } from '../components'
  export default {
    components: {
      WlbHeader
    }
  }
</script>
<style lang="sass" scoped>
  .topic-text-content
    padding: .3rem
    font-family: PingFangSC-Light
    font-size: .3rem
    color: #9B9B9B
    line-height: .42rem
    min-height: 2.7rem
  .residue
    padding: 0 .3rem .3rem
    font-family: PingFangSC-Light
    font-size: .24rem
    color: #9B9B9B
    line-height: .33rem
    text-align: right
    &::after
      content: ''
      display: block
      margin-bottom: .8rem
  .topic-edit-foot
    width: 100%
    position: fixed
    bottom: 0
    background: #F5F9FC
    border: 1px solid #A1AFB4
    padding: 0 .3rem
    height: .8rem
    box-sizing: border-box
    &::before
      display: block
      content: ''
    .topic-edit-type
      width: 2.36rem
      height: .52rem
      border: 1px solid #D7D7D7
      border-radius: 100px
      overflow: hidden
      float: left
      margin-top: .14rem
      box-sizing: border-box
      span
        float: left
        width: 1.15rem
        text-align: center
        line-height: .50rem
        color: #12A5E2
        font-family: PingFangSC-Regular
        font-size: .24rem
      .active
        background-color: #12A5E2
        color: #FFFFFF
    .topic-edit-sub
      float: right
      line-height: .8rem
      font-family: PingFangSC-Regular;
      font-size: .3rem
      color: #12A5E2
      letter-spacing: 0
</style>
