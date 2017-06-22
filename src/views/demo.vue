<template id="">
  <div>
    <mt-header fixed title="固定在顶部"></mt-header>
    <div class="scroll-view">
      <input type="text" />
      <button type="button" class="mui-btn">默认</button>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
  import { Header } from 'mint-ui'
  export default {
    created () {
      this.$ajax({
        url: '../api/psp-web/psp/file/v1/getVCode',
        method: 'get',
        params: {
          w: '100',
          h: '35'
        }
      }).then((res) => {
        console.log(res)
      })
      console.log('vue created')
      console.log(window.mui)
      // window.mui.init({
      //   subpages: [{
      //     url: 'https://www.baidu.com', // 子页面HTML地址，支持本地地址和网络地址
      //     id: 1, // 子页面标志
      //     styles: {
      //       top: '0', // 子页面顶部位置
      //       bottom: '0', // 子页面底部位置
      //       width: '100%', // 子页面宽度，默认为100%
      //       height: '100%' // 子页面高度，默认为100%
      //     },
      //     extras: {} // 额外扩展参数
      //   }]
      // })
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
