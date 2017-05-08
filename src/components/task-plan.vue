<template>
  <div>
    <button class="task-btn" v-if="!iscompleted">
      <span class="text">{{this.data.current + '/' + this.data.finish}}</span>
      <span class="plan-bg" :style="{width: widthRate}"></span>
    </button>
    <button :class="['task-btn', { 'btn-bg': data.isAward === 0 }, { 'isaward': data.isAward }]" slot="right" v-if="iscompleted" @click="receive">{{data.isAward === 1 ? '已领取' : '领取'}}</button>
  </div>
</template>
<script>
  export default {
    props: {
      data: {
        type: Object
      }
    },
    computed: {
      widthRate () {
        return parseFloat((this.data.current / this.data.finish) * 100) + '%'
      },
      iscompleted () {
        return parseInt(this.data.current) >= parseInt(this.data.finish)
      }
    },
    methods: {
      receive () {
        this.$http({
          url: this.$api.api_list,
          method: 'BbsUserSendAward',
          params: [{
            taskType: this.data.taskType
          }]
        }).then((res) => {
          if (res.data.result) {
            var message = res.data.result.message
            this.$rulemodal.show({ content: message, style: 'text-align: center' })
          }
        })
      }
    }
  }
</script>
<style lang="sass" scoped>
  .task-btn
    padding: 0
    border: none
    outline: none
    border-radius: .08rem
    font-size: .2rem
    height: .4rem
    width: .8rem
    margin-top: .02rem
    line-height: .4rem
    background: #eee
    position: relative
    overflow: hidden
    span
      float: left
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
    .text
      color: #033C54
      z-index: 1
    .plan-bg
      background: #12a5e2
      height: .4rem
      border-radius: .08rem 0 0 .08rem
  .btn-bg
    background: #12a5e2
    color: #fff
  .isaward
    color: #033C54
</style>
