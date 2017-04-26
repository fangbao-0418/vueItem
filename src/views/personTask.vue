<template>
  <div class="view">
    <wlb-header>
      <span slot="title">我的任务</span>
    </wlb-header>
    <div class="task-container">
      <task-item></task-item>
      <section-item></section-item>
    </div>
  </div>
</template>
<script>
import { WlbHeader, TaskItem, SectionItem } from '../components'
export default {
  data () {
    return {}
  },
  components: {
    WlbHeader,
    TaskItem,
    SectionItem
  }
}
</script>
