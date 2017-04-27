<template>
	<span class="share-icon" @click="share"></span>
</template>
<script>
export default {
  methods: {
    share () {
      alert('分享成功')
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
