<template>
  <div class="online" @click="jumpToOnLineAirlinese">
    <span>在线客服</span>
  </div>
</template>
<script>
  import { wlb } from '../util'
  export default {
    methods: {
      jumpToOnLineAirlinese () {
        wlb.ready({
          app: function (mixins) {
            mixins.jumpToOnLineAirlines(function () {
              alert('jumpToOnLineAirlines callback')
            })
          }
        })
      }
    }
  }
</script>
<style lang="sass" scoped>
  .online
    width: 1rem
    height: 1rem
    border-radius: 50%
    background-color: #10A6E2
    position: fixed
    bottom: .5rem
    z-index: 99
    right: .4rem
    display: flex
    justify-content: center
    align-items: center
    span
      width: .6rem
      display: block
      color: #FFF
      text-align: center
</style>
