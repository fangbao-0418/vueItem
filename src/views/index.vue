<template>
<div class="container">
  <div class="wrap">
    <h1>
      {{msg}}
    </h1>
  </div>
  <div class="box">
    <img src="../imgs/ic_p6_hb.png" />
  </div>
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
  .wrap{

  }
</style>
