<template>
  <div class="view">
    <wlb-header><span slot="title">个人中心</span></wlb-header>
    <div class="edit-section">
      <div class="item">
        <span class="photo-title">头像</span>
        <span class="photo-right">
          <span class="right"></span>
          <span class="photo"></span>
        </span>
      </div>
      <div class="item">
        <span class="name-title">昵称</span>
        <span class="name-right">迪丽热巴</span>
      </div>
    </div>
    <div class="edit-btn">
      <button class="btn">保存</button>
    </div>
  </div>
</template>
<script>
import { WlbHeader} from '../components'
export default {
  data () {
    return {}
  },
  components: {
    WlbHeader
  }
}
</script>
<style media="screen" lang="sass" scoped>
.view
  width: 100%
  height: 100%
  background: #fff
  .edit-section
    background: #fff
    .item
      border-bottom: 1px solid #e5e5e5
      padding: .3rem .3rem .3rem .4rem
      overflow: hidden
    .photo-title
      float: left
      height: .8rem
      line-height: .8rem
      font-size: .3rem
      color: #666
    .photo-right
      float: right
      .photo
        float: right
        margin-right: .26rem
        width: .8rem
        height: .8rem
        background: url('../imgs/avatar_big.png') no-repeat 0 0 / .8rem .8rem
      .right
        float: right
        margin-top: .27rem
        width: .26rem
        height: .26rem
        background: url('../imgs/arrow_right.png') no-repeat 0 0 / .26rem .26rem
    .name-title
      float: left
      height: .42rem
      line-height: .42rem
      font-size: .3rem
      color: #666
    .name-right
      float: right
      margin-right: .54rem
      height: .42rem
      line-height: .42rem
      font-size: .3rem
      color: #9b9b9b
  .edit-btn
    padding-top: 1.74rem
    text-align: center
    background: #fff
    .btn
      border: none
      width: 5.86rem
      height: .9rem
      line-height: .9rem
      background: #ccc
      border-radius: 100px
      font-size: .3rem
      color: #fff
</style>
