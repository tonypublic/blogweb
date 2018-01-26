<template>
	<div class="searchbox">
		<b-input-group>
			<b-form-input type="text" placeholder="Search for..." />
			<b-input-group-button>
				<b-btn variant="success"><i class="iconfont icon-sousuo"/></b-btn>
			</b-input-group-button>
		</b-input-group>
	</div>
</template>

<script>
export default {
  name: 'SbSearch',
  data() {
    return {
      msg: '这是一个blog测试网站。'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchbox {
  margin-bottom: 30px;
  z-index: 1;
}
</style>