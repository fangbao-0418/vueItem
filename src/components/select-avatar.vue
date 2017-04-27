<template>
  <transition name="fade">
    <div class="avatar-select" v-if="show">
      <div class="avatar-select-head">
        <span class="title">选择头像</span>
        <span class="cancel" @click="cancel()">取消</span>
      </div>
      <div class="avatar-items">
        <div class="avatar-item" v-for="i in 9">
          <div :class="{selected: index(i)}" @click="selected(i)">
            <img src="../imgs/avatar_big.png" />
            <i></i>
          </div>
        </div>
      </div>
      <div class="affirm-btn">
        <span>就选它了</span>
      </div>
    </div>
  </transition>
</template>
<script>
import bus from '../bus'
export default {
  data () {
    return {
      myIndex: 1,
      show: false
    }
  },
  mounted () {
    bus.$on('select-avatar', () => {
      this.show = true
      console.log(this.show)
    })
  },
  methods: {
    index (i) {
      return i === this.myIndex
    },
    selected (index) {
      this.myIndex = index
    },
    cancel () {
      this.show = false
    }
  }
}
</script>
<style lang="sass" scoped>
  .avatar-select
    position: fixed
    z-index: 9999
    top: 0
    width: 100%
    height: 100%
    background: rgba(255, 255, 255, 0.96)
    .avatar-select-head
      height: 1.8rem
      position: relative
      .title
        font-weight: 700
        position: absolute
        left: 0
        right: 0
        margin: .4rem auto
        font-family: PingFangSC-Regular
        font-size: .33rem
        color: #666666
        letter-spacing: 0
        text-align: center
      .cancel
        position: absolute
        right: .3rem
        top: .66rem
        font-family: PingFangSC-Regular
        font-size: .3rem
        color: #666666
        letter-spacing: 0
    .avatar-items
      width: 100%
      display: table
      .avatar-item
        width: 33.3%
        float: left
        text-align: center
        padding: .3rem 0
        div
          width: 1.44rem
          height: 1.44rem
          display: inline-block
          position: relative
        .selected
          width: 1.44rem
          height: 1.44rem
          display: inline-block
          position: relative
          img
            border: solid #12A5E2 .02rem
            border-radius: 100%
            box-sizing: border-box
          i
            position: absolute
            bottom: .1rem
            right: .1rem
            width: .26rem
            height: .26rem
            display: inline-block
            background: url('../imgs/avatar_select.png') no-repeat
            background-size: 100% 100%
        img
          width: 1.4rem
          height: 1.4rem
          border: solid transparent .02rem
          border-radius: 100%
          box-sizing: border-box
    .affirm-btn
      width: 3.2rem
      height: .8rem
      box-sizing: border-box
      border: .04rem solid #12A5E2
      border-radius: .99rem
      text-align: center
      line-height: .72rem
      position: fixed
      bottom: 1.54rem
      left: 0
      right: 0
      margin: 0 auto
      span
        font-family: PingFangSC-Regular
        font-size: .3rem
        color: #12A5E2
        letter-spacing: 0
</style>
