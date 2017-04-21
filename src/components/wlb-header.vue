/**
 * [头部]
 */
<template>
<div class="box">
  <div class="header">
    <div class="header-button">
      <div class="goback"></div>
    </div>
    <div class="header-title">网利社区</div>
    <div class="header-button"></div>
  </div>
</div>
</template>
<style media="screen" lang="sass" scoped>
.box
  margin-bottom: .96rem
  .header
    position: fixed
    z-index: 999
    top: 0
    width: 6.9rem
    height: .96rem
    background-color: #10A6E2
    display: flex
    align-items: center
    padding: 0 .3rem
    .header-button
      flex: .5
      .goback
        background: url('../imgs/navbar_back.png') no-repeat
        width: .4rem
        height: .4rem
        background-size: 100% 100%
    .header-title
      flex: 1
      font-family: PingFangSC-Regular
      font-size: .33rem
      color: #FFFFFF
      letter-spacing: 0.7px
      text-align: center
</style>
