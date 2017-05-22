<template>
  <div class="topic-tags">
    <!-- <span class="tag-top" v-if="tags.istop=== 1"></span> -->
    <span class="tag-great" v-if="tags.isgreat === 1"></span>
    <span class="tag-hot" v-if="tags.ishot=== 1"></span>
  </div>
</template>
<script>
  export default {
    props: {
      tags: {
        type: Object
      },
      type: {
        type: String,
        default: ''
      }
    },
    mounted () {
      console.log(this.istop === 1 && this.type === 'top', 'tags')
    }
  }
</script>
<style lang="sass" scoped>
  .topic-tags
    span
      margin-left: .18rem
      width: .4rem
      height: .46rem
      float: left
    .tag-great
      background: url('../imgs/tag_ssence.png') no-repeat
      background-size: 100% 100%
    .tag-hot
      background: url('../imgs/tag_hot.png') no-repeat
      background-size: 100% 100%
    .tag-top
      background: url('../imgs/tag_top.png') no-repeat
      background-size: 100% 100%
</style>
