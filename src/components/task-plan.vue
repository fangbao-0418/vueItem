<template>
  <div>
    <button class="task-btn" v-if="!iscompleted">
      <span class="text">{{this.data.current + '/' + this.data.finish}}</span>
      <span class="plan-bg" :style="{width: widthRate}"></span>
    </button>
    <button :class="['task-btn', { 'btn-bg': isAward === 0 }, { 'isaward': isAward }]" slot="right" v-if="iscompleted" @click="receive">{{isAward > 0 ? '已领取' : '领取'}}</button>
  </div>
</template>
<script>
  import bus from '../bus'
  export default {
    props: {
      data: {
        type: Object
      }
    },
    data () {
      return {
        isAward: this.data.isAward
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
        if (this.data.isAward > 0) {
          return ''
        }
        this.$plugin.loading.show(true)
        this.$http({
          url: this.$api.api_list,
          method: 'BbsUserSendAward',
          params: [{
            taskType: this.data.taskType
          }]
        }).then((res) => {
          if (res.data.result) {
            if (res.data.result.data && res.data.result.data.status) {
              this.isAward = 1
            }
            var message = res.data.result.message
            this.$rulemodal.show({ content: message, style: 'text-align: center' })
            bus.$emit('refresh-task-page')
          }
          if (res.data.error) {
            var errmessage = res.data.error.message
            this.$rulemodal.show({ content: errmessage, style: 'text-align: center' })
          }
          this.$plugin.loading.show(false)
        })
      }
    },
    destroyed () {
      bus.$off('refresh-task-page')
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
    width: auto
    background: transparent !important
    color: #A1AFB4
</style>
