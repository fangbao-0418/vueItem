<template>
	<span class="share-icon" @click="share" v-if="isApp"></span>
</template>
<script>
  import { wlb } from '../util'
  export default {
    props: {
      options: {
        type: Object
      }
    },
    computed: {
      isApp () {
        return this.$store.state.bridge['isApp']
      }
    },
    methods: {
      share () {
        wlb.ready({
          app: function (mixins) {
            // mixins.firstLoadWebView({ name: 'wanglishequ' })
            mixins.touchShare({
              title: '网利宝社区',
              content: this.options && this.options.content,
              shareUrl: window.location.href,
              image: this.options && this.options.image
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
