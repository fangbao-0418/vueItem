<template>
  <div class="title-bar bg-color-white">
    <span class="title-bar-title">{{options.title}}</span>
    <router-link class="title-bar-more" v-if="options.more" :to="options.targetUrl" tag="span">{{options.more}}</router-link>
  </div>
</template>
<script>
  export default {
    props: {
      options: {
        type: Object,
        required: true
      }
    }
  }
</script>
<style lang="sass" scoped>
.title-bar
  padding: 0 .3rem
  height: .6rem
  line-height: .6rem
  box-sizing: border-box
  border-bottom: 1px solid #E5E5E5
  span
    font-family: PingFangSC-Regular
    font-size: .24rem
    color: #A1AFB4
  .title-bar-title
    float: left
  .title-bar-more
    float: right
    &::after
      content: ''
      float: right
      width: 0
      height: 0
      border-right: solid transparent .08rem
      border-bottom: solid transparent .08rem
      border-left: solid #A1AFB4 .08rem
      transform: rotate(135deg)
      margin-top: .286rem
</style>
