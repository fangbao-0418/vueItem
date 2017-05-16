<template>
  <div id="wrapper">
    <div class="scroll">
      <slot></slot>
    </div>
  </div>
</template>
<script type="text/javascript">
  import IScroll from 'iscroll'
  export default {
    mounted () {
      $(document).ready(function () {
        var iscroll = new IScroll('#wrapper', {
          mouseWheel: true,
          scrollbars: true,
          click: true
        })
        console.log(iscroll)
      })
      // document.addEventListener('touchmove', function (e) { e.preventDefault() }, false)
    }
  }
</script>
<style lang="sass" media="screen" scoped>
  #wrapper
    position: absolute
    z-index: 1
    top: .96rem
    bottom: 0
    left: 0
    width: 100%
    overflow: hidden
    .scroll
</style>
