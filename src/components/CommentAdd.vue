<template>
  <div class="commentaddbox">
    <div class="header clearfix">
      <div class="title float-left">我要评论</div>
      <div class="word-number float-right align-text-bottom">共0个字</div>
    </div>
    <div class="editorbox-1">
      <quill-editor v-model="content" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @ready="onEditorReady($event)">
      </quill-editor>
    </div>
    <div class="operate" align="right">
      <div class="d-inline align-middle">清空评论</div>
      <b-button class="d-inline" type="submit" size="sm" variant="primary">提 交</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentAdd',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      content: '',
      editorOption: {
        // theme: 'bubble',

        placeholder: '评论...',
        modules: {
          toolbar: [
            [{ size: ['small', 'large'] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ color: [] }, { background: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image']
          ],
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: false
          }
        }
      }
    }
  },
  methods: {
    onEditorBlur(editor) {
      // console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      // console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      // console.log('editor ready!', editor)
    }
  },
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.commentaddbox {
  padding: 20px 40px 15px;
}
.header {
  margin-bottom: 10px;
}
.title {
  font-size: 18px;
}
.word-number {
  font-size: 14px;
}
.operate {
  margin-top: 10px;
  font-size: 14px;
}
</style>
