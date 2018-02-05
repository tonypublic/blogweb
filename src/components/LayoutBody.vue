<template>
	<div>
		<div>
			<router-view name="lBodyHead"></router-view>
		</div>
		<b-container>
			<b-row>
				<b-col class="d-flex justify-content-between" lg="8" md="12">
					<BreadNavBar></BreadNavBar>
					<div>25个主题</div>
				</b-col>
			</b-row>
		</b-container>
		<b-container>
			<b-row>
				<b-col lg="8" md="12">
					<router-view name="lBodyLeft"></router-view>
				</b-col>
				<b-col lg="4" md="12">
					<router-view name="siderBar"></router-view>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import SiderBar from './SiderBar.vue'
import BreadNavBar from './BreadNavBar.vue'

export default {
  name: 'LayoutBody',
  data() {
    return {}
  },
  components: { BreadNavBar, SiderBar }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>