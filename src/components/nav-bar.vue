<template>
  <div class="nav-bar bg-color-white">
    <ul>
      <li class="active"><span>聊点闲话</span><i class="line"></i></li>
      <li class=""><span>又问有答</span><i class="line"></i></li>
      <li><span>网利活动</span></li>
    </ul>
  </div>
</template>
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
