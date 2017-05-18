<template>
  <div class="slide-block bg-color-white mb-20">
    <div :class="['swiper-container', swiperClassName]">
      <div class="swiper-wrapper">

        <div class="swiper-slide" v-for="(item, index) in data">
          <a v-if="item.url" :href="item.url" class="banner">
            <img :src="item.cover" v-lazyload="{ placeholder: require('../imgs/banner_defult_sml.png') }" />
          </a>
          <router-link v-else :to="{ name:'activityDetail', params: { id: item.id } }" class="banner" tag="div">
            <img :src="item.cover" v-lazyload="{ placeholder: require('../imgs/banner_defult_sml.png') }" />
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import TopicTags from './topic-tags'
  export default {
    props: {
      data: {
        type: Array
      }
    },
    data () {
      return {
        swiperClassName: 'swiper-container' + this._uid
      }
    },
    mounted () {
      var swiper = Swiper('.swiper-container', {
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
    components: {
      TopicTags
    }
  }
</script>
<style lang="sass" scoped>
  .swiper-container
    width: 7.1rem
    height: 1.8rem
    padding: .35rem .2rem .44rem
    .swiper-slide
      overflow: auto
      text-align: center
      font-size: 18px
      background: #fff
      width: 4.5rem
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
      .banner
        width: 4.5rem
        height: 1.8rem
        position: relative
        overflow: hidden
        margin: auto .1rem
        .tags
          position: absolute
          left: -.08rem
          top: 0
          z-index: 1
        img
          width: 4.5rem
          height: 1.8rem
          display: inline-block
</style>
