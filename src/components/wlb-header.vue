/**
 * [头部]
 */
<template>
<div>
  <div class="box">
    <div class="header">
      <div class="header-button">
        <div class="goback" @click="goback"></div>
      </div>
      <div class="header-title">
        <slot name="title"></slot>
      </div>
      <div class="header-button">
        <share-icon v-if="type == 'share'"></share-icon>
      </div>
    </div>
  </div>
  <div class="float-block">
    <to-top-icon :show="toTopIconShowState"></to-top-icon>
  </div>
</div>
</template>
<script type="text/javascript">
  import ToTopIcon from './to-top-icon'
  import ShareIcon from './share-icon'
  export default {
    props: {
      type: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        toTopIconShowState: false
      }
    },
    mounted () {
      window.onscroll = () => {
        var fontSize = parseFloat(document.documentElement.style['font-size'])
        if (document.body.scrollTop > 2.4 * fontSize) {
          this.toTopIconShowState = true
        } else {
          this.toTopIconShowState = false
        }
      }
    },
    components: {
      ToTopIcon,
      ShareIcon
    },
    methods: {
      goback () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style media="screen" lang="sass" scoped>
.box
  height: .96rem
  .header
    position: fixed
    z-index: 999
    top: 0
    width: 6.9rem
    height: .96rem
    background-color: #10A6E2
    display: flex
    align-items: center
    padding: 0 .3rem
    .header-button
      flex: .5
      .goback
        background: url('../imgs/navbar_back.png') no-repeat
        width: .4rem
        height: .4rem
        background-size: 100% 100%      
    .header-title
      flex: 1
      font-family: PingFangSC-Regular
      font-size: .33rem
      color: #FFFFFF
      letter-spacing: 0.7px
      text-align: center
</style>
