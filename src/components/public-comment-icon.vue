<template>
  <router-link :to="{name: 'topicAdd'}" class="public-comment-icon" tag="div"></router-link>
</template>
<script>

</script>
<style lang="sass" scoped>
  .public-comment-icon
    width: 1.06rem
    height: 1.06rem
    background: url('../imgs/edit.png') no-repeat
    background-size: 100% 100%
    position: fixed
    right: .3rem
    bottom: 3.02rem
    z-index: 10
</style>
