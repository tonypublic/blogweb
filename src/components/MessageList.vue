<template>
	<b-container class="SubjectList">
		<div class="title">5个未读消息</div>
		<div>
			<hr class="mt-3" />
			<b-media>
				<b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder" />
				<div class="d-flex flex-wrap justify-content-between align-items-center">
					<div>
						<span>隔壁老王 Lev.6</span>
						<i class="iconfont icon-picture text-success" />
					</div>
					<div class="tag-1">未读</div>
				</div>
					<div class="subtitle">
						<span>2018/1/18 12:30</span>
						<span>在主题《这是一个新项目这是一个新项目》中回复了您！</span>
						<div class="text-right">点击查看</div>
				</div>
			</b-media>
		</div>
	</b-container>
</template>

<script>
export default {
  name: 'MessageList',
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
