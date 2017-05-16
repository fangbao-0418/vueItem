<template>
  <div class="avatar-select" v-if="show">
    <div class="avatar-select-head">
      <span class="title">选择头像</span>
      <span class="cancel" @click="cancel()">取消</span>
    </div>
    <div class="avatar-items">
      <div class="avatar-item" v-for="(item, i) in data">
        <div :class="{selected: index(i)}" @click="selected(i)">
          <img :src="item" v-lazyload="{ placeholder: require('../imgs/avatar_defult_big.png') }" />
          <i></i>
        </div>
      </div>
    </div>
    <div class="affirm-btn" @click="ok">
      <span>就选它了</span>
    </div>
  </div>
</template>
<script>
import bus from '../bus'
export default {
  props: {
    data: {
      type: Object
    }
  },
  data () {
    return {
      myIndex: 1,
      show: false
    }
  },
  mounted () {
    bus.$on('show-select-avatar-page', () => {
      this.show = true
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
    },
    ok () {
      bus.$emit('select-avatar', this.myIndex)
      this.show = false
    }
  },
  destroyed () {
    bus.$off('select-avatar')
  }
}
</script>
<style lang="sass" scoped>
  .avatar-select
    overflow-y: scroll
    position: absolute
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
            border: solid #12A5E2 1px
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
      bottom: 1.54rem
      margin: 1rem auto 0
      &::after
        content: ''
        display: block
        height: 1rem
      span
        font-family: PingFangSC-Regular
        font-size: .3rem
        color: #12A5E2
        letter-spacing: 0
</style>
