<template>
	<div>
		<div class="content-block">
			<b-img v-if="false" src="http://demo.shapedtheme.com/kotha/wp-content/uploads/2015/07/photo-1422207134147-65fb81f59e38-1140x600.jpeg" fluid alt="Responsive image" />
			<SubjectContent></SubjectContent>
		</div>
		<div class="content-block">
			<CommentList></CommentList>
		</div>
		<div class="content-block">
			<CommentAdd></CommentAdd>
		</div>
	</div>
</template>

<script>
import SubjectContent from '@/components/SubjectContent'
import CommentList from '@/components/CommentList'
import CommentAdd from '@/components/CommentAdd'

export default {
  name: 'SubjectGroup',
  data() {
    return {
    }
  },
  components: { SubjectContent, CommentList, CommentAdd }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content-block {
  @include block-style;
}
</style>
