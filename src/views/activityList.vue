<template>
	<div class="view">
		<wlb-header :options="{title:'网利活动',rightConfigs:[{type:'share'}]}"></wlb-header>
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
