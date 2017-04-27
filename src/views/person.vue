<template>
  <div class="view">
    <wlb-header>
      <span slot="title">个人中心</span>
      <router-link slot="right" class="person-info-eidt-icon" :to="{name: 'personInfoEdit'}"></router-link>
    </wlb-header>
    <user-briefly-show></user-briefly-show>
    <div class="section mt-20">
      <section-item v-for="item in items" :key="item.code" :to="item.to">
        <span slot="image" :class="['list-img', item.flag]"></span>
        <span class="list-des" v-text="item.title"></span>
      <span slot="right" class="list-right">
        <span class="right-icon"></span>
        <!--当是我的消息且有新消息显示点-->
        <span class="right-news" v-if="item.code == 'MY-NEWS' && isNew"></span>
      </span>
      </section-item>
    </div>
  </div>
</template>
<script>
import { UserBrieflyShow, WlbHeader, SectionItem } from '../components'
export default {
  data () {
    return {
      isNew: true,
      items: [{
        code: 'MY-NEWS',
        title: '我的消息',
        flag: 'my-message',
        to: {name: 'personNews'}
      }, {
        code: 'MY-POST',
        title: '我的帖子',
        flag: 'my-post',
        to: {name: 'personNews'}
      }, {
        code: 'MY-TASK',
        title: '我的任务',
        flag: 'my-task',
        to: {name: 'personNews'}
      }]
    }
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
  float: right
.section
  background: #fff
  .list-img
    float: left
    display: inline-block
    width: .44rem
    height: .44rem
  .list-des
    float: left
    padding-left: .33rem
    font-size: .3rem
    color: #666
    line-height: .44rem
  .list-right
    float: right
    height: .44rem
    line-height: .44rem
    .right-icon
      float: right
      display: inline-block
      margin-top: .09rem
      width: .26rem
      height: .26rem
      background: url('../imgs/arrow_right.png') no-repeat
      background-size: .26rem .26rem
    .right-news
      float: right
      display: inline-block
      margin-right: .25rem
      margin-top: .14rem
      width: .16rem
      height: .16rem
      background: url('../imgs/dot_remind.png') no-repeat
      background-size: .16rem .16rem
  .my-message
    background: url('../imgs/icon_message.png') no-repeat 0 0 / .44rem .44rem
  .my-post
    background: url('../imgs/icon_post.png') no-repeat 0 0 / .44rem .44rem
  .my-task
    background: url('../imgs/icon_task.png') no-repeat 0 0 / .44rem .44rem
</style>
