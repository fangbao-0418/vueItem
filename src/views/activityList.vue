<template>
	<div class="view">
		<wlb-header type="share">
		    <span slot="title">热门活动</span>
		</wlb-header>
		<div class="activities">
			<div class="activity-item">
				<img src="../imgs/banner1.png">
			</div>
			<div class="activity-item">
				<img src="../imgs/banner1.png">
			</div>
			<div class="activity-item">
				<img src="../imgs/banner1.png">
			</div>
			<div class="activity-item">
				<img src="../imgs/banner1.png">
			</div>
		</div>
	</div>
</template>
<script>
  import { WlbHeader } from '../components'
  export default {
    components: {
      WlbHeader
    }
  }
</script>
<style lang="sass" scoped>
	.activities
		.activity-item
			margin-bottom: .03rem
			img
				width: 100%
				height: 3rem
</style>
