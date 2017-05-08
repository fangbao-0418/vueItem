<template>
  <router-link :to="to" class="person-list" tag="div">
    <slot name="image"></slot>
    <slot></slot>
    <slot name="right"></slot>
  </router-link>
</template>
<script>
export default {
  props: {
    to: {
      required: true
    }
  }
}
</script>
<style media="screen" lang="sass" scoped>
.person-list
  border-bottom: 1px solid #e5e5e5
  padding: .3rem .3rem .3rem .4rem
  overflow: hidden
</style>
