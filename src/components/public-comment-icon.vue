<template>
  <div>
    <transition name="fade">
      <div class="topic-boards" v-if="visible">
        <div class="topic-boards-main">
          <router-link :key="index" :to="{ name:'topicAdd', params: { id: item.id, name: item.name } }" class="topic-type" v-for="(item, index) in data" tag="div">
            <span>{{item.name}}</span>
          </router-link>
        </div>
      </div>
    </transition>
    <div class="public-topic-icon" v-if="!visible" @click="toPublic"></div>
    <div class="public-topic-icon-close" v-if="visible" @click="toPublic"></div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        visible: false
      }
    },
    computed: {
      data () {
        console.log(this.$store.state.topic.topicBoards, 'topicBoards')
        return this.$store.state.topic.topicBoards
      }
    },
    methods: {
      toPublic () {
        this.visible = !this.visible
      }
    }
  }
</script>
<style lang="sass" scoped>
  @keyframes toShow
    0%
      bottom: -4rem
    100%
  @keyframes toHidden
    0%
      bottom: 0rem
    100%
      bottom: -4rem
  .fade-enter-active
    .topic-boards-main
      animation: toShow .3s ease
  .fade-leave-active
    .topic-boards-main
      animation: toHidden .3s ease
  .topic-boards
    width: 1rem
    position: fixed
    right: .3rem
    bottom: 4.3rem
    z-index: 10
    overflow: hidden
    height: 999rem
    transition: all .3s
    .topic-boards-main
      transition: all .3s
      position: absolute
      bottom: 0
      .topic-type
        margin-top: .28rem
        display: flex
        align-items: center
        width: 1rem
        height: 1rem
        border-radius: 50%
        text-align: center
        background: rgba(16,55,103,0.80)
        position: relative
        bottom: 0
        span
          width: .48rem
          font-family: PingFangSC-Regular
          display: inline-block
          font-size: .24rem
          line-height: .33rem
          color: #FFFFFF
          letter-spacing: 0
          margin: auto;
  .public-topic-icon
    width: 1.06rem
    height: 1.06rem
    background: url('../imgs/edit.png') no-repeat
    background-size: 100% 100%
    position: fixed
    right: .3rem
    bottom: 3.02rem
    z-index: 10
  .public-topic-icon-close
    width: 1.06rem
    height: 1.06rem
    background: url('../imgs/closed.png') no-repeat
    background-size: 100% 100%
    position: fixed
    right: .3rem
    bottom: 3.02rem
    z-index: 10
</style>
