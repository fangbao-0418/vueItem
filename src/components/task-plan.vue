<template>
  <button class="task-btn">
    <span class="text">{{rate}}</span>
    <span class="plan-bg" :style="{width: widthRate}"></span>
  </button>
</template>
<script>
  export default {
    props: {
      rate: {
        type: String
      }
    },
    computed: {
      widthRate () {
        var res = this.rate.split('/')
        return parseFloat((res[0] / res[1]) * 100) + '%'
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
</style>
