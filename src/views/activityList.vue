<template>
	<div class="view">
		<wlb-header :options="{title:'网利活动',rightConfigs:[{type:'share'}]}"></wlb-header>
		<div class="activities" v-if="data && data.length" >
			<loadmore :cb-load-top="loadTop" :cb-load-bottom="loadBottom" :all-loaded="allLoaded" ref="loadmore">

				<div :key="index" class="activity-item" v-for="(item, index) in data" tag="div">
					<a v-if="item.url" :href="item.url" >
						<img :src="item.cover" v-lazyload="{ placeholder: require('../imgs/banner_defult_sml.png') }">
					</a>
					<router-link v-else :to="{ name: 'activityDetail', params: { id: item.id } }" >
						<img :src="item.cover" v-lazyload="{ placeholder: require('../imgs/banner_defult_sml.png') }">
					</router-link>
				</div>

				<no-more :visible="nomore"></no-more>
    	</loadmore>
		</div>
	</div>
</template>
<script>
import { WlbHeader, Loadmore, NoMore } from '../components'
export default {
  data () {
    return {
      data: [],
      page: 1,
      nomore: false
    }
  },
  computed: {
    allLoaded () {
      return this.nomore
    }
  },
  created () {
    this.$plugin.loading.show(true)
    this.loadData(() => {
      this.$plugin.loading.show(false)
    })
  },
  components: {
    WlbHeader,
    Loadmore,
    NoMore
  },
  methods: {
    loadData (cb) {
      this.$http({
        url: this.$api.api_list,
        method: 'getBbsThreadTopList',
        params: [{
          id: this.$route.params.id,
          pageNum: this.$const.BBS_ACTIVITY_LIST_PAGE_NUM,
          page: this.page,
          lastPage: 1
        }]
      }).then((res) => {
        if (res.data.result) {
          this.page += 1
          this.lastPage = res.data.result.data['last_page']
          if (res.data.result.data['last_page'] + 1 >= this.page) {
            if (this.page === 2) {
              this.data = res.data.result.data.data
            } else {
              this.data = this.data.concat(res.data.result.data.data)
            }
          }
          if (res.data.result.data['last_page'] < this.page) {
            this.nomore = true
          } else {
            this.nomore = false
          }
          cb && cb()
        }
      })
    },
    loadTop () {
      this.page = 1
      this.$plugin.loading.show(true)
      this.loadData(() => {
        this.$plugin.loading.show(false)
        this.$refs.loadmore.$children[0].onTopLoaded()
      })
    },
    loadBottom () {
      if (this.page > this.lastPage) {
        return ''
      }
      this.$plugin.loading.show(true)
      this.loadData(() => {
        this.$plugin.loading.show(false)
        this.$refs.loadmore.$children[0].onBottomLoaded()
      })
    }
  }
}
</script>
<style lang="sass" scoped>
	.activities
		.activity-item
			margin-bottom: .03rem
			a
				display: block
				height: 3rem
			img
				width: 100%
				height: 3rem
</style>
