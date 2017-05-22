<template>
  <loadmore :top-loading-text="topLoadingText" :bottom-pull-text="bottomPullText" :top-method="cbLoadTop ? loadTop : null" :bottom-method="cbLoadBottom ? loadBottom: null" :bottom-all-loaded="allLoaded">
    <slot></slot>
  </loadmore>
</template>
<script>
  import { Loadmore } from 'mint-ui'
  export default {
    components: {
      Loadmore
    },
    props: {
      cbLoadTop: {
        type: Function,
        default: null
      },
      cbLoadBottom: {
        type: Function,
        default: null
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
    methods: {
      loadTop () {
        this.cbLoadTop && this.cbLoadTop()
      },
      loadBottom () {
        this.cbLoadBottom && this.cbLoadBottom()
      }
    }
  }
</script>
