<template>
  <div class="view">
    <wlb-header><span slot="title">个人中心</span></wlb-header>
    <div class="edit-section">
      <div class="item" @click="editAvatar()">
        <span class="photo-title">头像</span>
        <div class="photo-right fr">
          <span class="right fr"></span>
          <img :src="userInfo.head_img" class="photo fr">
        </div>
      </div>
      <div class="item">
        <span class="name-title fl">昵称</span>
        <input class="name-right fr" v-model="userInfo.nickname">
      </div>
    </div>
    <div class="edit-btn">
      <button :class="['btn', {changed}]" @click="save">保存</button>
    </div>
    <select-avatar :data="allHeadImgs"></select-avatar>
  </div>
</template>
<script>
import { WlbHeader, SelectAvatar } from '../components'
import { loading, ruleModal } from '../plugins'
import bus from '../bus'
export default {
  components: {
    WlbHeader,
    SelectAvatar
  },
  data () {
    return {
      userInfo: {},
      allHeadImgs: {},
      nickname: '',
      changed: false,
      index: 1
    }
  },
  computed: {
  },
  created () {
    loading.show(true, 'full')
    this.$http([
      {
        url: this.$api.api_list,
        method: 'getBbsUserInfo',
        params: [{}]
      },
      {
        url: this.$api.api_list,
        method: 'getBbsUserAllHeadImg',
        params: [{}]
      }
    ]).then((res) => {
      this.userInfo = res[0].data.result.data
      this.allHeadImgs = res[1].data.result.data
      setTimeout(() => {
        this.changed = false
      }, 0)
      loading.show(false)
    })
  },
  mounted () {
    bus.$on('select-avatar', (index) => {
      this.userInfo['head_img'] = this.allHeadImgs[index]
      this.index = index
    })
  },
  watch: {
    userInfo: {
      deep: true,
      handler (val) {
        this.changed = true
      }
    }
  },
  methods: {
    editAvatar () {
      bus.$emit('show-select-avatar-page')
    },
    save () {
      if (!this.changed) {
        return
      }
      this.changed = false
      loading.show(true)
      this.$http([
        {
          url: this.$api.api_list,
          method: 'updateBbsUserHeadimg',
          params: [{
            head_img: this.index
          }]
        },
        {
          url: this.$api.api_list,
          method: 'updateBbsUserNickname',
          params: [{
            nickname: this.userInfo['nickname']
          }]
        }
      ]).then((res) => {
        loading.show(false)
        ruleModal.show({
          content: '信息修改成功',
          style: 'text-align: center'
        })
      })
    }
  },
  destroyed () {
    bus.$off('show-select-avatar-page')
  }
}
</script>
<style media="screen" lang="sass" scoped>
.view
  width: 100%
  height: 100%
  background: #fff
  .edit-section
    .item
      border-bottom: 1px solid #e5e5e5
      padding: .3rem .3rem .3rem .4rem
      overflow: hidden
    .photo-title
      height: .8rem
      line-height: .8rem
      font-size: .3rem
      color: #666
    .photo-right
      .photo
        margin-right: .26rem
        width: .8rem
        height: .8rem
      .right
        margin-top: .27rem
        width: .26rem
        height: .26rem
        background: url('../imgs/arrow_right.png') no-repeat 0 0 / .26rem .26rem
    .name-title
      height: .42rem
      line-height: .42rem
      font-size: .3rem
      color: #666
    .name-right
      margin-right: .54rem
      height: .42rem
      line-height: .42rem
      font-size: .3rem
      color: #9b9b9b
      border: 0
      text-align: right
  .edit-btn
    padding-top: 1.74rem
    text-align: center
    background: #fff
    .btn
      border: none
      outline: none
      width: 5.86rem
      height: .9rem
      line-height: .9rem
      background: #ccc
      border-radius: 100px
      font-size: .3rem
      color: #fff
    .changed
      background: #5db5f2
</style>
