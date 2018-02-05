<template>
	<b-container class="SubjectList">
		<div v-for="item in items" :key="item.id">
			<b-media class="mb-3" >
				<b-img slot="aside" rounded  :src="item.headicon" blank-color="#ccc" width="50" height="50" alt="placeholder" />
				<div class="d-flex flex-wrap justify-content-between align-items-center">
					<div @click="gotoSubject(item.id)">
						<span>[{{item.category}}] {{item.title}}</span>
					</div>
					<div>
						<div class="tag-1 ml-1" v-for="tag in item.tags" :key="tag.id">{{tag}}</div>
					</div>
				</div>
				<div class="d-flex flex-wrap justify-content-between align-items-center mt-1">
					<div class="subtitle">
						<span>{{item.author}}</span>
						<span class="mr-2 text-warning">Lev.{{item.grade}}</span>
						<span>{{item.postdate}}</span>
					</div>
					<div class="subtitle">{{item.replydate}}</div>
					<div class="subtitle">
						<span class="mr-2">
							<i class="iconfont icon-yanjing" />
							<span>{{item.views}}</span>
						</span>
						<span>
							<i class="iconfont icon-41" />
							<span>{{item.comments}}</span>
						</span>
					</div>
				</div>
			</b-media>
      <hr/>
		</div>
		<b-pagination :total-rows="total" v-model="currentPage" :per-page="perPage" @input="changePage"></b-pagination>
	</b-container>
</template>

<script>
import subject from '../api/subject'

export default {
  name: 'SubjectList',
  data() {
    return {
      total: 0, //主题总数
      items: [],  //主题列表数组
      currentPage: 1,
      perPage: 20
    }
  },
  created: function() {
    this.getSubjectList()
  },
  watch: {
    // 如果 '路由' 发生改变，这个函数就会运行
    $route: function () {
      this.getSubjectList()
    }
  },
  methods: {
    //翻页事件
    changePage: function() {
      this.getSubjectList()
    },
    //主题详情跳转
    gotoSubject: function(id) {
      this.$router.push('/p/'.concat(id))
    },
    //获取主题列表
    getSubjectList: function() {
      this.$Progress.start()
      var sp = new Object()
      sp = subject.getSubjectList({
        start: (this.currentPage - 1) * this.perPage,
        amounts: this.perPage,
        sort: 'date',  //按日期排序
        category: this.$route.params.category //主题分类标志：m为留言，all为全部
      }),
      this.total = sp.total
      this.items = sp.subjectlist
      this.$Progress.finish()
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
