<template>
  <div class="wrap">
    <h1>
      {{msg}}
    </h1>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        msg: process.env.NODE_ENV
      }
    }
  }
</script>
<style lang="sass" scoped>
@import '../css/index.css';
  .wrap{
    h1{
      font-size: 10px;
    }
  }
</style>
