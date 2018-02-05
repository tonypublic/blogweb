<template>
  <div>
    <hr/>
    <div v-for="(item,index) in items" :key="item.id">
      <b-media class="mb-0">
        <b-img slot="aside" rounded="circle" :src="item.headicon" blank-color="#ccc" width="50" height="50" alt="placeholder" />
        <div>
          <div class="d-flex justify-content-between">
            <div class="author">
              <span>{{item.authorname}}</span>
              <span>Lev.{{item.grade}}</span>
            </div>
            <div>## {{item.floor}}
            </div>
          </div>
          <div class="clearfix">
            <div class="float-left">发表于 {{item.postdate}}</div>
            <div class="float-right">
              <span>举报</span>
              <span>修改</span>
            </div>
          </div>
        </div>
        <div class="text-justify" v-html="item.content"></div>
      </b-media>
    </div>
    <div>
      <b-pagination v-if="total>perPage" align="right" size="sm" :total-rows="total" v-model="currentPage" :per-page="perPage" @input="changePage">
      </b-pagination>
    </div>
    <div class="editorbox">
      <quill-editor v-model="content" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @ready="onEditorReady($event)">
      </quill-editor>
    </div>
    <div>
      <div class="reply-operate float-right">
        <div class="d-inline" @click="closeReplyList">收起</div>
        <div class="d-inline">清空</div>
        <b-button class="d-inline" type="submit" size="sm" variant="primary">回 复</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import comment from '../api/comment'

export default {
  name: 'ReplyList',
  props: ['commentId'],
  data() {
    return {
      content: '',
      total: 0,
      items: [],
      currentPage: 1,
      perPage: 10,
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
  created: function() {
    this.getReplyList()
  },
  methods: {
    //翻页事件处理
    changePage() {
      this.getReplyList()
    },
    //根据 评论ID 获取 回复列表
    getReplyList() {
      var rl = new Object()
      rl = comment.getReplyList({
        commentid: this.commentId,
        start: (this.currentPage - 1) * this.perPage,
        amounts: this.perPage,
        sort: 'date'  //按日期排序
      })
      this.total = rl.total
      this.items = rl.replylist
    },
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
    },
    closeReplyList() {
      this.$emit('closeReplyList')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
