
<template>
  <div class="tab-container">
    <nav-bar></nav-bar>
    <tab-container v-model="active" :swipeable="true" class="mt-20 bg-color-white">
      <tab-container-item id="tab-container1">
        <topic-item></topic-item>
        <topic-item></topic-item>
        <topic-item></topic-item>
      </tab-container-item>
      <tab-container-item id="tab-container2">
        <topic-item></topic-item>
      </tab-container-item>
      <tab-container-item id="tab-container3">
        <topic-item></topic-item>
      </tab-container-item>
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
  data () {
    return {
      active: 'tab-container1'
    }
  },
  watch: {
    active (val) {
      console.log(val)
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
