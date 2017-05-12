<template>
  <div class="view">
    <wlb-header>
      <span slot="title">个人中心</span>
      <router-link slot="right" class="person-info-eidt-icon fr" :to="{name: 'personInfoEdit'}"></router-link>
    </wlb-header>
    <user-briefly-show></user-briefly-show>
    <div class="section mt-20 bg-color-white">
      <section-item v-for="item in items" :key="item.code" :to="item.to">
        <span slot="image" class="fl" :class="['list-img mr-33', item.flag]"></span>
        <span class="list-des fl" v-text="item.title"></span>
      <span slot="right" class="list-right fr">
        <span class="right-icon fr"></span>
        <!--当是我的消息且有新消息显示点-->
        <span class="right-news fr" v-if="item.code === 'MY-NEWS' && unreadStatus"></span>
      </span>
      </section-item>
    </div>
  </div>
</template>
<script>
import { UserBrieflyShow, WlbHeader, SectionItem } from '../components'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      items: [{
        code: 'MY-NEWS',
        title: '我的消息',
        flag: 'my-message',
        to: {name: 'personNews'}
      }, {
        code: 'MY-POST',
        title: '我的帖子',
        flag: 'my-post',
        to: {name: 'personTopics'}
      }, {
        code: 'MY-TASK',
        title: '我的任务',
        flag: 'my-task',
        to: {name: 'personTask'}
      }]
    }
  },
  created () {
    this.$store.dispatch('fetchPersonPageData')
  },
  computed: {
    ...mapState({
      unreadStatus (state) {
        return state.profile.unreadStatus
      }
    })
  },
  components: {
    WlbHeader,
    UserBrieflyShow,
    SectionItem
  }
}
</script>
<style media="screen" lang="sass" scoped>
.person-info-eidt-icon
  background: url('../imgs/navbar_edit.png') no-repeat
  width: .42rem
  height: .42rem
  background-size: 100% 100%
.section
  .list-img
    width: .44rem
    height: .44rem
    display: inline-block
  .list-des
    font-size: .3rem
    color: #666
    line-height: .44rem
  .list-right
    height: .44rem
    line-height: .44rem
    .right-icon
      display: inline-block
      margin-top: .09rem
      width: .26rem
      height: .26rem
      background: url('../imgs/arrow_right.png') no-repeat
      background-size: .26rem .26rem
    .right-news
      display: inline-block
      margin-right: .25rem
      margin-top: .14rem
      width: .16rem
      height: .16rem
      background: url('../imgs/dot_remind.png') no-repeat
      background-size: .16rem .16rem
  .my-message
    width: .44rem
    height: .44rem
    background: url('../imgs/icon_message.png') no-repeat
    background-size: .44rem .44rem
  .my-post
    width: .44rem
    height: .44rem
    background: url('../imgs/icon_post.png') no-repeat
    background-size: .44rem .44rem
  .my-task
    width: .44rem
    height: .44rem
    background: url('../imgs/icon_task.png') no-repeat
    background-size: .44rem .44rem
</style>
