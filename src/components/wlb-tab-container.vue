
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
        active: this.initialActive
      }
    },
    computed: {
      navBarOptions () {
        return this.initialNavBarOptions
      }
    },
    created () {
      bus.$on('navbar-id-selected', (id) => {
        this.changeSelected(id)
      })
    },
    mounted () {
    },
    watch: {
      active (val) {
        console.log(this.$refs['tab-container'], 'tab-container')
        var nodes = this.$refs['tab-container'].$children
        // console.log(nodes)
        for (let i in nodes) {
          this.navBarOptions[i]['checked'] = false
          if (nodes[i]['id'] === val) {
            this.navBarOptions[i]['checked'] = true
          }
        }
        console.log(val)
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
