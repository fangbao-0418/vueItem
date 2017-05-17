<template>
  <div id="wrapper">
    <div class="scroll">
      <slot></slot>
    </div>
    <div class="float-block">
      <to-top-icon :show="toTopIconShowState"></to-top-icon>
    </div>
  </div>
</template>
<script type="text/javascript">
  import ToTopIcon from './to-top-icon'
  // import IScroll from 'iscroll'
  export default {
    components: {
      ToTopIcon
    },
    data () {
      return {
        toTopIconShowState: false
      }
    },
    mounted () {
      $('#wrapper').scroll(() => {
        var fontSize = parseFloat(document.documentElement.style['font-size'])
        if ($('#wrapper').scrollTop() > 2.4 * fontSize) {
          this.toTopIconShowState = true
        } else {
          this.toTopIconShowState = false
        }
      })
      // $(document).ready(function () {
      //   var iscroll = new IScroll('#wrapper', {
      //     mouseWheel: true,
      //     scrollbars: true,
      //     click: true,
      //     checkDOMChanges: true
      //   })
      //   console.log(iscroll)
      // })
      // document.addEventListener('touchmove', function (e) { e.preventDefault() }, false)
    }
  }
</script>
<style lang="sass" media="screen" scoped>
  #wrapper
    flex: 1
    position: absolute
    z-index: 1
    top: .96rem
    bottom: 0
    left: 0
    width: 100%
    overflow-x: hidden
    overflow-y: scroll
    -webkit-overflow-scrolling : touch
    &::-webkit-scrollbar
      display: none
</style>
