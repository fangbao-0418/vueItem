<template>
  <div class="wrap">
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        msg: "首页"
      }
    }
  }
</script>
<style lang="sass" scoped>
.wrap{
  h1{
    font-size: 10px;
  }
}

</style>
