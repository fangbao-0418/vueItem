
<template>
  <div class="tab-container">
    <nav-bar :navBarOptions="navBarOptions"></nav-bar>
    <tab-container v-model="active" :swipeable="true" class="mt-20 bg-color-white" ref="tab-container">
      <slot></slot>
    </tab-container>
  </div>
</template>
<script>
  import Index from '../components'
  import NavBar from './nav-bar'
  import TopicItem from './topic-item'
  import { TabContainer, TabContainerItem } from 'mint-ui'
  console.log(Index)
  export default {
    props: {
      initialActive: {
        type: String,
        required: true
      },
      initialNavBarOptions: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        active: this.initialActive,
        navBarOptions: this.initialNavBarOptions
      }
    },
    computed: {
    },
    mounted () {
      // console.log(this.active)
    },
    watch: {
      active (val) {
        var nodes = this.$refs['tab-container'].$children
        for (let i in nodes) {
          this.navBarOptions[i]['checked'] = false
          if (nodes[i]['id'] === val) {
            this.navBarOptions[i]['checked'] = true
          }
        }
        // console.log(val)
      }
    },
    components: {
      NavBar,
      TopicItem,
      TabContainer,
      TabContainerItem
    }
  }
</script>
<style media="screen" lang="sass" scoped>
.tab-container
</style>
