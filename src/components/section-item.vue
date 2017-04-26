<template>
  <div class="person-list">
    <slot name="image"></slot>
    <slot></slot>
    <slot name="right"></slot>
  </div>
</template>
<style media="screen" lang="sass" scoped>
.person-list
  border-bottom: 1px solid #e5e5e5
  padding: .3rem .3rem .3rem .4rem
  overflow: hidden
</style>
