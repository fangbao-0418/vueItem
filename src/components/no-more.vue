<template>
<div class="not-more" v-if="visible">
  <span>{{content}}</span>
</div>
</template>
<script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      content: {
        type: String,
        default: '～没有更多了～'
      }
    }
  }
</script>
<style lang="sass" scoped>
  .not-more
    padding: .3rem 0
    text-align: center
    font-family: PingFangSC-Light
    font-size: .24rem
    color: #9B9B9B
    line-height: .33rem
</style>
