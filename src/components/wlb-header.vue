/**
 * [头部]
 * 用法1： <wlb-header :options="{title:'个人中心',rightConfigs:[{type:'personInfoEdit'}]}"></wlb-header>
 * 用法2： <wlb-header><span slot="titile">个人中心</span></wlb-header>
 */
<template>
<div>
  <div class="box">
    <div class="header">
      <div class="header-button">
        <div class="goback" @click="goback"></div>
        <div class="cancel" @click="cancel" v-if="isAndroid && isApp"></div>
      </div>
      <div class="header-title">
        <span>{{options.title}}</span>
        <slot name="title"></slot>
      </div>
      <div class="header-button">
        <div class="fr">
          <div class="header-right-icon" v-for="(item, index) in options.rightConfigs">
            <share-icon v-if="item.type == 'share'" :options="item.options"></share-icon>
            <router-link class="person-info-eidt-icon" :to="{name: 'personInfoEdit'}" v-if="item.type == 'personInfoEdit'" tag="div"></router-link>
          </div>
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </div>
  <div class="box-stance"></div>
</div>
</template>
<script type="text/javascript">
  import ShareIcon from './share-icon'
  import { wlb } from '../util'
  export default {
    components: {
      ShareIcon
    },
    props: {
      options: {
        type: Object,
        default: function () {
          return {
            title: '',
            rightOptions: []
          }
        }
      }
    },
    computed: {
      isAndroid () {
        var u = navigator.userAgent
        return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
      },
      isIndex () {
        return this.$route.name === 'index'
      },
      isApp () {
        return this.$store.state.bridge['isApp']
      }
    },
    created () {
      this.$store.dispatch('fetchBridgeInfo')
    },
    mounted () {
    },
    methods: {
      goback () {
        // alert(this.$route.name + this.isApp)
        if (this.$route.name === 'index' && this.isApp) {
          this.cancel()
        } else {
          this.$router.go(-1)
        }
      },
      cancel () {
        // alert('app exit')
        wlb.ready({
          app: function (mixins) {
            mixins.touchClose()
          }
        })
      }
    },
    destroyed () {
    }
  }
</script>
<style media="screen" lang="sass" scoped>
.box-stance
  width: 100%
  height: .96rem
.box
  width: 100%
  height: .96rem
  background: -webkit-linear-gradient(top, #005ccc, #0083ff)
  overflow: hidden
  position: absolute
  z-index: 999
  top: 0
  .header
    width: 6.9rem
    height: .96rem
    display: flex
    align-items: center
    margin: 0 .3rem
    .header-button
      flex: .5
      .goback
        background: url('../imgs/navbar_back.png') no-repeat
        width: .4rem
        height: .4rem
        background-size: 100% 100%
        float: left
        margin-right: .4rem
      .cancel
        background: url('../imgs/navbar_closed.png') no-repeat
        width: .4rem
        height: .4rem
        background-size: 100% 100%
        float: left
        margin-right: .4rem
      .header-right-icon
        float: left
        margin-left: .1rem
        .person-info-eidt-icon
          background: url('../imgs/navbar_edit.png') no-repeat
          width: .42rem
          height: .42rem
          background-size: 100% 100%
          float: right
    .header-title
      flex: 1
      font-family: PingFangSC-Regular
      font-size: .33rem
      color: #FFFFFF
      letter-spacing: 0.7px
      text-align: center
</style>
