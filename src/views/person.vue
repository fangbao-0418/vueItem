<template>
  <div class="view">
    <wlb-header></wlb-header>
    <user-briefly-show></user-briefly-show>
    <person-section></person-section>
  </div>
</template>
<script>
import { UserBrieflyShow, WlbHeader, PersonSection } from '../components'
export default {
  data () {
    return {}
  },
  components: {
    WlbHeader,
    UserBrieflyShow,
    PersonSection
  }
}
</script>
<style lang="sass" scoped>

</style>
