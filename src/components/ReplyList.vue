<template>
	<div class="replybox">
		<hr/>
		<b-media>
			<b-img slot="aside" blank blank-color="#ccc" width="50" alt="placeholder" />
			<div>
				<div class="author">
          <span>楼下小赵</span>
          <span>Lev.1</span>
          </div>
				<div class="clearfix">
					<div class="float-left">发表于 2018/1/6 12:20</div>
					<div class="float-right">
						<span>举报</span>
						<span>修改</span>
					</div>
				</div>
			</div>
			<div>
				<p>
					Cras sit amet nibh libero, in gravida nulla. Donec lacinia congue felis in faucibus.
				</p>
			</div>
		</b-media>
		<div>
			<b-pagination align="right" size="sm" :total-rows="100" v-model="currentPage" :per-page="10">
			</b-pagination>
		</div>
		<div class="editorbox">
			<quill-editor v-model="content" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @ready="onEditorReady($event)">
			</quill-editor>
		</div>
		<div>
			<div class="reply-operate float-right">
				<div class="d-inline">收起</div>
				<div class="d-inline">清空</div>
				<b-button class="d-inline" type="submit" size="sm" variant="primary">回 复</b-button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'ReplyList',
  data() {
    return {
      content: '',
      currentPage: 1,
      editorOption: {
        theme: 'bubble',
        placeholder: '回复...',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ color: [] }, { background: [] }]
          ]
        }
      }
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onEditorBlur(editor) {
      // console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      // console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      // console.log('editor ready!', editor)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.replybox {
}
.author {
  font-size: 15px;
  font-weight: bold;
}
.editorbox {
  word-break: break-all;
}
.quill-editor {
  border: 1px solid #ccc;
}
.reply-operate {
	margin-top: 5px;
	div {
		margin-right: 5px;
	}
  button {
    border: 0px;
  }
}
</style>
