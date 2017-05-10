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
            <share-icon v-if="item.type == 'share'"></share-icon>
            <router-link class="person-info-eidt-icon" :to="{name: 'personInfoEdit'}" v-if="item.type == 'personInfoEdit'" tag="div"></router-link>
          </div>
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </div>
  <div class="float-block">
    <to-top-icon :show="toTopIconShowState"></to-top-icon>
  </div>
</div>
</template>
<script type="text/javascript">
  import ToTopIcon from './to-top-icon'
  import ShareIcon from './share-icon'
  import { wlb } from '../util'
  export default {
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
    data () {
      return {
        toTopIconShowState: false
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
    },
    mounted () {
      var that = this
      $(document).ready(function () {
        that.$store.dispatch('fetchBridgeInfo')
        alert('document ready')
        alert(JSON.stringify(window.WebViewJavascriptBridge))
      })
      // this.$store.dispatch('fetchBridgeInfo')
      window.onscroll = () => {
        var fontSize = parseFloat(document.documentElement.style['font-size'])
        if (document.body.scrollTop > 2.4 * fontSize) {
          this.toTopIconShowState = true
        } else {
          this.toTopIconShowState = false
        }
      }
    },
    components: {
      ToTopIcon,
      ShareIcon
    },
    methods: {
      goback () {
        if (this.$route.name === 'index' && this.isApp) {
          this.cancel()
        } else {
          this.$router.go(-1)
        }
      },
      cancel () {
        wlb.ready({
          app: function (mixins) {
            mixins.touchClose()
          }
        })
      }
    }
  }
</script>
<style media="screen" lang="sass" scoped>
.box
  height: .96rem
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
