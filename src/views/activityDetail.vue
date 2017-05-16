<template>
  <div class="view" v-if="item.user">
    <wlb-header>
      <span slot="title">活动详情</span>
      <share-icon slot="right"></share-icon>
    </wlb-header>
    <div class="detail-block bg-color-white">
      <h1 class="title">{{item.title}}</h1>
      <div class="topic-infos mt-10">
        <span class="author">{{item.user.nickname}}</span> | <span class="pubdate">{{item.updated_at}}</span>
      </div>
      <p class="content mt-45">{{item.content}}</p>
    </div>
    <comment-list :id="id"></comment-list>
    <comment-form-modal :id="id"></comment-form-modal>
  </div>
</template>
<script>
  import { WlbHeader, CommentFormModal, ShareIcon, CommentList } from '../components'
  export default {
    components: {
      WlbHeader,
      CommentFormModal,
      ShareIcon,
      CommentList
    },
    data () {
      return {
        item: {}
      }
    },
    computed: {
      id () {
        return parseInt(this.$route.params.id)
      }
    },
    created () {
      this.$plugin.loading.show(true, 'full')
      this.$http({
        url: this.$api.api_list,
        method: 'getBbsThreadDetail',
        params: [{
          id: this.id
        }]
      }).then((res) => {
        if (res.data.result.code === 0 && res.data.result.data) {
          this.item = res.data.result.data
          this.$plugin.loading.show(false)
        } else {
          this.$router.replace({ name: 'index' })
        }
      })
    }
  }
</script>
<style lang="sass" scoped>
  .view
    .detail-block
      padding: .35rem .3rem
      .title
        font-family: PingFangSC-Medium
        font-size: .35rem
        line-height: .49rem
        height: .49rem
        color: #4A4A4A
        text-align: center
      .topic-infos
        font-family: PingFangSC-Light
        font-size: .24rem
        color: #A1AFB4
        letter-spacing: 0
        height: .33rem
        text-align: center
      .content
        white-space: pre-wrap
        font-family: PingFangSC-Regular
        font-size: .3rem
        color: #666666
        letter-spacing: 0
        line-height: .42rem
</style>
