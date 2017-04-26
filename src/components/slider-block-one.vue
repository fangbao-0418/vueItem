<template>
  <div class="slide-block bg-color-white mb-20">
    <div :class="['swiper-container', swiperClassName]">
      <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../imgs/banner1.png" /></div>
          <div class="swiper-slide"><img src="../imgs/banner1.png" /></div>
          <div class="swiper-slide"><img src="../imgs/banner1.png" /></div>
          <div class="swiper-slide"><img src="../imgs/banner1.png" /></div>
          <div class="swiper-slide"><img src="../imgs/banner1.png" /></div>
          <div class="swiper-slide"><img src="../imgs/banner1.png" /></div>
          <div class="swiper-slide"><img src="../imgs/banner1.png" /></div>
          <div class="swiper-slide"><img src="../imgs/banner1.png" /></div>
          <div class="swiper-slide"><img src="../imgs/banner1.png" /></div>
          <div class="swiper-slide"><img src="../imgs/banner1.png" /></div>
      </div>
    </div>
  </div>
</template>
<script>
  // import Swiper from 'swiper'
  export default {
    data () {
      return {
        swiperClassName: 'swiper-container' + this._uid
      }
    },
    mounted () {
      // var swiper = Swiper('.swiper-container' + this._uid)
      // console.log(swiper)
    }
  }
</script>
<style lang="sass" scoped>
  .swiper-container
    height: 1.8rem
    padding: .35rem .2rem .44rem
    .swiper-slide
      text-align: center
      font-size: 18px
      background: #fff
      width: 4.5rem
      margin: auto .1rem
      /* Center slide text vertically */
      display: -webkit-box
      display: -ms-flexbox
      display: -webkit-flex
      display: flex
      -webkit-box-pack: center
      -ms-flex-pack: center
      -webkit-justify-content: center
      justify-content: center
      -webkit-box-align: center
      -ms-flex-align: center
      -webkit-align-items: center
      align-items: center
</style>
