<template>
  <transition name="fade">
    <div class="to-top" v-show="show" @click="goTop()"></div>
  </transition>
</template>
<script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      goTop () {
        $('#wrapper').stop().animate({'scrollTop': 0}, 100)
      }
    }
  }
</script>
<style lang="sass" scope>
  .fade-enter, .fade-leave-active
    opacity: 0
  .fade-enter-active, .fade-leave-active
    transition: all 1s ease
  .to-top
    width: .86rem
    height: .86rem
    position: fixed
    right: .4rem
    bottom: 1.88rem
    background: url('../imgs/top.png') no-repeat
    background-size: 100% 100%
    z-index: 10
</style>
