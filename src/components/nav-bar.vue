<template>
  <div class="nav-bar bg-color-white">
    <ul>
      <li v-for="(item, index) in navBarOptions" :class="{active: item.checked}" @click="checked(item.id)"><span>{{item.title}}</span><i class="line" v-if="index < navBarOptions.length - 1"></i></li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      navBarOptions: {
        type: Array,
        required: true
      }
    },
    mounted () {
    },
    methods: {
      checked (index) {
        this.$store.dispatch('navbarSelect', index)
      }
    }
  }
</script>
<style media="screen" lang="sass" scope>
.nav-bar
  width: 100%
  font-size: .24rem
  color: #666666
  ul
    width: 100%
    display: table
    li
      text-align: center
      display: table-cell
      &.active
        color: #12A5E2
        border-bottom: #10A6E2 solid .08rem
      span
        display: inline-block
        margin: .29rem 0 .21rem
        text-align: center
        box-sizing: border-box
        line-height: .32rem
        height: .32rem
      .line
        margin-top: .29rem
        height: .32rem
        width: .04rem
        border-right: .02rem solid #E5E5E5
        float: right
</style>
