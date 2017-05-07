
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
      // var that = this
      // $('body').on('touchstart', function (e) {
      //   var touch = e.changedTouches
      //   that.endx = touch[0].clientX
      //   that.endy = touch[0].clientY
      //   that.cons()
      //   // startx endx 的数据收集应该放在touchend事件后执行，而不是放在touchstart事件里执行，这样才能访问到touchstart和touchend这2个事件产生的startx和endx数据。另外startx和endx在_touch事件函数里是全局性的，所以在此函数中都可以访问得到，所以只需要注意事件执行的先后顺序即可。
      // })
      // $('body').on('touchend', function (e) {
      //   var touch = e.changedTouches
      //   that.startx = touch[0].clientX
      //   that.starty = touch[0].clientY
      // })
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
            this.$store.dispatch('updateTopicListData')
          }
        }
      }
    },
    methods: {
      changeSelected (index) {
        console.log(index)
        var nodes = this.$refs['tab-container'].$children
        this.active = nodes[index].id
      },
      cons () {
        var startx = this.startx
        var endx = this.endx
        var starty = this.starty
        var endy = this.endy
        var w = Math.abs(startx - endx)
        var h = Math.abs(starty - endy)
        if (w > h) {
          if (startx > endx) {
            console.log('left')
          } else {
            console.log('right')
          }
        } else {
          if (starty > endy) {
            console.log('bottom')
          } else {
            console.log(starty, endy)
            console.log('top')
          }
        }
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
