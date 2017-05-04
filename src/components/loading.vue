<template>
<div class="loading-page" v-if="visible" :style="style">
  <div class="loading-box"></div>
</div>
</template>
<script>
  export default {
    data () {
      return {
        visible: false,
        type: ''
      }
    },
    computed: {
      style () {
        return this.type === 'full' ? 'background: #f5f5f5' : ''
      }
    },
    watch: {
      visible (val) {
        if (val) {
          $(document).on('touchmove', function (e) {
            e.preventDefault()
          })
        } else {
          $(document).off('touchmove')
        }
      }
    },
    created () {
    }
  }
</script>
<style lang="sass" scoped>
@keyframes animate
  17%
    border-bottom-right-radius: 3px
  25%
    transform: translateY(9px) rotate(22.5deg)
  50%
    transform: translateY(18px) scaleY(.9) rotate(45deg)
    border-bottom-right-radius: 40px
  75%
    transform: translateY(9px) rotate(67.5deg)
  100%
    transform: translateY(0) rotate(90deg)
@keyframes shadow
  0%, 100%
    transform: scale(1)
  50%
    transform: scaleX(1.2)
.loading-page
  width: 100%
  height: 100%
  position: fixed
  top: 0
  // background: #f5f5f5
  z-index: 9999
  .loading-box
    width: 1rem
    height: 1rem
    margin: auto
    position: absolute
    left: 0
    right: 0
    top: 0
    bottom: 0
    &::before
      content: ""
      width: 1rem
      height: 1rem
      position: absolute
      background: #1a6844
      border-radius: .03rem
      animation: animate .5s linear infinite
    &::after
      content: ""
      width: 1rem
      position: absolute
      bottom: -.3rem
      height: .1rem;
      border-radius: 50%
      background: #000
      opacity: .1
      animation: shadow .5s linear infinite
</style>
