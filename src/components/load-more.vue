<template>
  <loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
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
