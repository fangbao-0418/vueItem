
<template>
  <div class="tab-container">
    <nav-bar :navBarOptions="navBarOptions"></nav-bar>
    <tab-container v-model="active" :swipeable="swipeable" class="mt-20" ref="tab-container">
      <slot></slot>
    </tab-container>
  </div>
</template>
<script>
  import bus from '../bus'
  import NavBar from './nav-bar'
  import TopicItem from './topic-item'
  import { TabContainer, TabContainerItem } from 'mint-ui'
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
        swipeable: false,
        active: this.initialActive,
        startx: 0,
        endx: 0,
        starty: 0,
        endy: 0
      }
    },
    computed: {
      navBarOptions () {
        return this.initialNavBarOptions
      }
    },
    created () {
    },
    mounted () {
    },
    watch: {
      initialActive (val) {
        this.active = val
      },
      active (val) {
        var node = this.$refs['tab-container'].$children
        for (var i in node) {
          if (val === node[i]['id']) {
            this.$store.dispatch('navbarSelect', i)
            this.$store.dispatch('updateTopicListData', {refresh: true})
          }
        }
      }
    },
    methods: {
      changeSelected (index) {
        console.log(index)
        var nodes = this.$refs['tab-container'].$children
        this.active = nodes[index].id
      }
    },
    components: {
      NavBar,
      TopicItem,
      TabContainer,
      TabContainerItem
    },
    destroyed () {
      bus.$off('navbar-id-selected')
    }
  }
</script>
<style media="screen" lang="sass" scoped>
.tab-container
</style>
