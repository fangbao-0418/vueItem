<template id="">
  <div>
    <mt-header fixed title="固定在顶部"></mt-header>
    <div class="scroll-view">
      <input type="text" />
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
  import { Header } from 'mint-ui'
  export default {
    created () {
      console.log('vue created')
    },
    components: {
      MtHeader: Header
    }
  }
</script>
<style lang="sass" scoped>
.header
  height: .96rem
  width: 100%
  background-color: #10A6E2
  position: absolute
.scroll-view
  position: absolute
  top: .96rem
  bottom: 0
  margin-top: .96rem
  width: 100%
  overflow-y: scroll
  overflow-x: hidden
.footer
  position: absolute
  bottom: 0
  background-color: red
  width: 100%
  height: .96rem
</style>
