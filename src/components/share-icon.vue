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
    mounted () {
      // console.log((this.options && this.options.content) || '1', 'content')
    },
    methods: {
      share () {
        var that = this
        wlb.ready({
          app: function (mixins) {
            mixins.touchShare({
              title: (that.options && that.options.title) || '',
              content: (that.options && that.options.content) || '',
              shareUrl: window.location.href || '',
              image: (that.options && that.options.image) || ''
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
