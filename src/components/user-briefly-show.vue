/**
 * 用户简要信息
 */
<template>
  <router-link :to="{name: 'person'}" class="user bg-color-white" tag="div">
    <div class="user-avatar">
      <img src="../imgs/avatar_big.png" />
    </div>
    <p class="user-nick">方宝</p>
    <div class="user-remind">
      <p>还有99999元体验金未领取 |</p><span> 去领取</span>
    </div>
  </router-link>
</templatE>
<style lang="sass" scoped>
.user
  width: 100%
  height: 2.4rem
  .user-avatar
    text-align: center
    &:before
      content: ''
      display: block
      height: .46rem
    img
      margin: 0 auto
      border-radius: 50%
      width: .8rem
      height: .8rem
  .user-nick
    text-align: center
    color: #666666
    font-size: .28rem
    height: .4rem
    line-height: .4rem
  .user-remind
    text-align: center
    p
      display: inline-block
      font-family: PingFangSC-Light
      font-size: .24rem
      color: #A1AFB4
      letter-spacing: 0
    span
      font-family: PingFangSC-Light
      font-size: .24rem
      color: #12A5E2
      letter-spacing: 0
      line-height: .33rem
</style>
