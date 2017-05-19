<template>
  <div class="nav-bar bg-color-white">
    <ul class="swiper-wrapper">
      <li v-for="(item, index) in navBarOptions" :class="['swiper-slide', {active: item.checked}]" @click="checked(index)"><span>{{item.title}}</span><i class="line" v-if="index < navBarOptions.length - 1"></i></li>
    </ul>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  export default {
    props: {
      navBarOptions: {
        type: Array,
        required: true
      }
    },
    mounted () {
      var swiper = Swiper('.nav-bar', {
        slidesPerView: 'auto',
        grabCursor: true,
        // resistanceRatio: 0,
        observer: true, // 启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。默认false，不开启，可以使用update()方法更新。
        observeParents: true, // 将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
        spaceBetween: 0, // slide之间的距离（单位px）。
        freeMode: true, // 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动且不会贴合。
        freeModeMomentum: false, // free模式动量。free模式下，若设置为false则关闭动量，释放slide之后立即停止不会滑动。
        preloadImages: false // 默认为true，Swiper会强制加载所有图片。
      })
      console.log(swiper)
    },
    methods: {
      checked (index) {
        this.$store.dispatch('navbarSelect', index)
      }
    }
  }
</script>
<style media="screen" lang="sass" scope>
.nav-bar
  width: 100%
  font-size: .24rem
  color: #666666
  ul
    width: 100%
    // display: table
    .swiper-slide
      overflow: auto
      text-align: center
      background: #fff
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
    li
      width: auto
      text-align: center
      // display: table-cell
      &.active
        color: #12A5E2
        border-bottom: #10A6E2 solid .08rem
      span
        padding: 0 .37rem
        display: inline-block
        margin: .29rem 0 .21rem
        text-align: center
        box-sizing: border-box
        font-size: .24rem
        line-height: .32rem
        height: .32rem
      .line
        margin-top: .08rem
        height: .32rem
        width: .04rem
        border-right: .02rem solid #E5E5E5
        float: right
</style>
