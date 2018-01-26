<template>
  <div class="block-style newsubject">
    <h5>新主题</h5>
    <!-- 标题 -->
    <div class="mt-3">
      <b-form-input class="rounded-0" id="inputLive" v-model.trim="title" type="text" :state="titleState" aria-describedby="inputLiveFeedback" placeholder="标题"></b-form-input>
      <b-form-invalid-feedback id="inputLiveFeedback">
        <!-- This will only be shown if the preceeding input has an invalid state -->
        Enter at least 3 letters
      </b-form-invalid-feedback>
    </div>
    <!-- 分类：视频/图片 -->
    <div class="mt-3">
      <div class="d-inline">主题分类：</div>
      <b-form-radio-group class="d-inline p-0" v-model="selected" :options="options" size="sm" name="radioInline">
      </b-form-radio-group>
    </div>
    <!-- video -->
    <div class="mt-3" v-if="selected=='v'">
      <b-form-input class="rounded-0" id="inputLive" v-model.trim="title" type="text" :state="titleState" placeholder="视频链接"></b-form-input>
    </div>
    <!-- headimg -->
    <div class="mt-3" v-if="selected=='p'">
      <b-form-file accept="image/jpeg, image/png, image/gif" ></b-form-file>
    </div>
    <!-- 简介 -->
    <div class="mt-3 editor-brief">
      <quill-editor v-model="content" :options="editorOptionSmall">
      </quill-editor>
    </div>
    <!-- 内容 -->
    <div class="editorbox-2 mt-3">
      <quill-editor v-model="content" :options="editorOption">
      </quill-editor>
    </div>
    <div class="mt-3 d-flex justify-content-end">
      <div>清空</div>
      <b-button variant="success">提交</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubjectAdd',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: '',
      content: '',
      selected: 'v',
      options: [
        { text: '视频', value: 'v' },
        { text: '图文', value: 'p' }
      ],
      editorOptionSmall: {
        theme: 'bubble',
        placeholder: '简介...',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ color: [] }, { background: [] }]
          ]
        }
      },
      editorOption: {
        // theme: 'bubble',

        placeholder: '内容...',
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
      },
      item: {
        tags: ['家装', '木作']
      }
    }
  },
  computed: {
    titleState() {
      return this.title.length > 2 ? true : false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.newsubject {
  padding: 40px 40px 10px;
}
.editor-brief {
  border: 1px solid #ccc;
}
</style>
