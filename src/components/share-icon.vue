<template>
	<span class="share-icon" @click="share"></span>
</template>
<script>
  import { wlb } from '../util'
  export default {
    methods: {
      share () {
        wlb.ready({
          app: function (mixins) {
            // mixins.firstLoadWebView({ name: 'wanglishequ' })
            mixins.touchShare({
              title: '网利社区',
              content: '网利宝',
              shareUrl: window.location.href,
              image: 'https://www.wanglibao.com/images/logo.png'
            })
          }
        })
      }
    }
  }
</script>
<style lang="sass" scoped>
	.share-icon
	  display: inline-block
	  width: .42rem
	  height: .42rem
	  background: url('../imgs/navbar_share.png') no-repeat
	  background-size: 100% 100%
	  float: right
</style>
