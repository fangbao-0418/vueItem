<template>
  <loadmore :top-loading-text="topLoadingText" :bottom-pull-text="bottomPullText" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
    <slot></slot>
  </loadmore>
</template>
<script>
  import { Loadmore } from 'mint-ui'
  export default {
    props: {
      cbLoadTop: {
        type: Function
      },
      cbLoadBottom: {
        type: Function
      },
      allLoaded: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        bottomPullText: '上拉加载',
        topLoadingText: '刷新中...'
      }
    },
    components: {
      Loadmore
    },
    methods: {
      loadTop () {
        this.cbLoadTop()
      },
      loadBottom () {
        this.cbLoadBottom()
      }
    }
  }
</script>
