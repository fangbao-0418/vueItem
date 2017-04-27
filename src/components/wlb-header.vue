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
        <div class="cancel" @click="cancel"></div>
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
    mounted () {
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
        this.$router.go(-1)
      },
      cancel () {
        this.$rulemodal.show({
          title: '活动规则',
          content: '新华社北京4月26日电 中共中央政治局4月25日下午就维护国家金融安全进行第四十次集体学习。中共中央总书记习近平在主持学习时强调，金融安全是国家安全的重要组成部分，是经济平稳健康发展的重要基础。维护金融安全，是关系我国经济社会发展全局的一件带有战略性、根本性的大事。金融活，经济活；金融稳，经济稳。必须充分认识金融在经济发展和社会生活中的重要地位和作用，切实把维护金融安全作为治国理政的一件大事，扎扎实实把金融工作做好。'
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
      .cancel
        background: url('../imgs/navbar_closed.png') no-repeat
        width: .4rem
        height: .4rem
        background-size: 100% 100%
        float: left
        margin-left: .4rem
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
