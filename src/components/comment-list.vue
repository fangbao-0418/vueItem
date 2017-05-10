<template>
  <div>
    <div class="comment-area mt-20 bg-color-white" v-if="commentList && commentList.length" >
      <div class="comment-sign">
        <span>评论列表 (6)</span>
      </div>
      <loadmore v-if="commentList && commentList.length" :cb-load-top="loadTop" :cb-load-bottom="loadBottom" :all-loaded="allLoaded" ref="loadmore">
        <ul class="comment-items">
          <li v-for="(item, index) in commentList">
            <div class="comment-avatar">
              <img :src="item.users.head_img" />
            </div>
            <div class="comment-right">
              <div class="comment-head">
                <div class="comment-head-left">
                  <p class="comment-user">{{item.users.nickname}}</p>
                  <p class="comment-ago">{{item.updated_at | handleDate}}</p>
                </div>
                <div class="comment-head-right">
                  <span class="comment-floor">{{index+1}}#</span>
                </div>
              </div>
              <p class="comment-content mt-20">{{item.content}}</p>
            </div>
          </li>
        </ul>
      </loadmore>
    </div>
    <no-more :visible="nomore" content="～暂时没有评论～"></no-more>
  </div>  
</template>
<script>
  import { Loadmore, NoMore } from '../components'
  export default {
    data () {
      return {
        commentList: [],
        allLoaded: false,
        nomore: true
      }
    },
    created () {
      this.$plugin.loading.show(true)
      this.$http({
        url: this.$api.api_list,
        method: 'getBbsCommentList',
        params: [{
          id: this.id
        }]
      }).then((res) => {
        if (res.data.result) {
          // this.commentList = res.data.result.data.thread_info
        } else {
          this.nomore = true
        }
        this.$plugin.loading.show(false)
      })
    },
    methods: {
      loadTop () {
      },
      loadBottom () {
      }
    },
    components: {
      Loadmore,
      NoMore
    }
  }
</script>
<style lang="sass" scoped>
</style>
