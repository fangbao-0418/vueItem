<template>
  <div class="view">
    <wlb-header :options="{title:'有问有答',rightConfigs:[{type:'share'}]}"></wlb-header>
    <textarea class="topic-text-content" v-model="content" placeholder="说点什么吧..."></textarea>
    <p class="residue">你还可以输入{{num}}字</p>
    <div class="topic-edit-foot">
      <div class="topic-edit-type">
        <span :class="['topic-edit-type-chat', {active:active}]" @click="checkType(1)">闲聊</span>
        <span :class="['topic-edit-type-ask', {active:!active}]" @click="checkType(0)">问答</span>
      </div>
      <span class="topic-edit-sub" @click="toPublic">发表</span>
    </div>
  </div>
</template>
<script type="text/javascript">
  import { WlbHeader } from '../components'
  export default {
    data () {
      return {
        active: true,
        content: '',
        num: 500
      }
    },
    created () {
      this.$http({
        url: this.$api.api_list,
        method: 'getBbsThreadSectionList',
        params: [{}]
      }).then((res) => {
        console.log(res)
      })
    },
    methods: {
      checkType (type) {
        this.active = type
        console.log(this.active)
      },
      toPublic () {
        this.$http({
          url: this.$api.api_list,
          method: 'BbsPublishThread',
          params: [{
            type_id: 1,
            title: '网利社区',
            content: this.content
          }]
        }).then((res) => {
          console.log(res)
        })
      }
    },
    watch: {
      content () {
        var len = this.content.length
        this.num = 500 - len > 0 ? 500 - len : 0
        this.content = this.content.substring(0, 500)
      }
    },
    components: {
      WlbHeader
    }
  }
</script>
<style lang="sass" scoped>
  .view
    background: #fff
    width: 100%
    height: 100%
    .topic-text-content
      display: block
      width: 6.9rem
      border: 0
      padding: 0 .3rem
      margin: .3rem 0
      font-family: PingFangSC-Light
      font-size: .3rem
      color: #9B9B9B
      line-height: .42rem
      min-height: 2.7rem
      overflow-y: visible
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
        margin-top: .12rem
        span
          float: left
          width: 1.18rem
          text-align: center
          height: .52rem
          line-height: .52rem
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
