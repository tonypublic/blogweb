<template>
	<b-container class="SubjectList">
		<div class="title">5000个主题</div>
		<div>
			<hr class="mt-3" />
			<b-media>
				<b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder" />
				<div class="d-flex flex-wrap justify-content-between align-items-center">
					<div>
						<span>[留言]这是第一个主题这是第一个主题这是第一个主题</span>
						<i class="iconfont icon-picture text-success" />
					</div>
					<div class="tag-1">精</div>
				</div>
				<div class="d-flex flex-wrap justify-content-between align-items-center mt-1">
					<div class="subtitle">
						<span>隔壁老王老王</span>
						<span class="mr-2 text-warning">Lev.9</span>
						<span>2018/1/14</span>
					</div>
					<div class="subtitle">3个月前被回复</div>
					<div class="subtitle">
						<span class="mr-2">
							<i class="iconfont icon-yanjing" />
							<span>99,278</span>
						</span>
						<span>
							<i class="iconfont icon-41" />
							<span>99,278</span>
						</span>
					</div>
				</div>
			</b-media>
		</div>
	</b-container>
</template>

<script>
export default {
  name: 'SubjectList',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.SubjectList {
  @include block-style;
  padding: 20px 40px 10px;
}
.media {
  width: 100%;
}
.title {
  font-size: 18px;
}
</style>
