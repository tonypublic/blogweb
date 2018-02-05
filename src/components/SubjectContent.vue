<template>
  <article>
    <h4 class="mb-3">{{item.title}}</h4>
    <div>
      <b-media>
        <b-img slot="aside" rounded  :src="author.headicon" blank-color="#ccc" width="50" height="50" alt="placeholder" />
        <div>
          <h6 class="d-inline">{{author.name}}</h6>
          <span class="text-warning">Lev.{{author.grade}}</span>
        </div>
        <div class="d-flex flex-wrap">
          <div class="subtitle font-italic pt-1 mr-4">Posted: {{item.postdate}}</div>
          <div>
            <label class="tag-1 mr-3" v-if="item.tags.length>0" v-for="tag in item.tags" :key="tag.id">{{tag}}</label>
          </div>
        </div>
        <div class="subtitle mb-2 d-flex justify-content-end">
          <div class="mr-3">
            <i class="iconfont icon-yanjing" />
            <span>{{item.views}}</span>
          </div>
          <div class="mr-3">
            <i class="iconfont icon-41" />
            <span>{{item.comments}}</span>
          </div>
          <div>
            <i class="iconfont icon-sharearrow" />
            <span>{{item.share}}</span>
          </div>
        </div>
      </b-media>
    </div>
    <div>
      <p class="article-info text-justify" v-if="item.info!=null">{{item.info}}</p>
      <div class="text-justify" v-html="item.content"></div>
    </div>
    <div v-if="eidtFlag">
      <quill-editor v-model="content" :options="editorOption">
      </quill-editor>
      <div>
        <b-button class="d-inline" type="submit" size="sm" variant="primary">提 交</b-button>
      </div>
    </div>
    <div v-if="false" class="attachment">
      <hr/>
      <h1>附件</h1>
      <div>
        <i class="iconfont icon-geshi_yasuobaorar"></i>
        <h2>下载文件.rar</h2>
        <p>(已下载1000次)</p>
      </div>
      <div>
        <i class="iconfont icon-geshi_yasuobaorar"></i>
        <h2>下载文件.rar</h2>
        <p>(已下载1000次)</p>
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <span class="mr-2">编辑</span>
      <span class="mr-2">评论</span>
      <span>举报</span>
    </div>
  </article>
</template>

<script>
import subject from '../api/subject'
import author from '../api/user'

export default {
  name: 'SubjectContent',
  data() {
    return {
      item: {},
      author: {},
      eidtFlag: false,
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
  created: function() {
    this.getSubjectContent()
  },
  methods: {
    getSubjectContent() {
      this.item = subject.getSubjectContent(this.$route.params.id)
      this.author = author.getUserInfo(this.item.authorid)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
article {
  padding: 40px 40px 10px;
}
.article-info {
  font-style: italic;
  font-size: 14px;
  color: map-get($color-group, title-sub);
  padding: 15px;
  background: #f8f8f8;
}
.article-body {
  font-size: 15px;
}
.attachment {
  margin-top: 20px;
  padding-bottom: 10px;
  h1 {
    font-size: 18px;
    letter-spacing: 5px;
  }
  div {
    display: inline-block;
    width: 200px;
    i {
      font-size: 32px;
      margin: 0px 8px 0px 0px;
      float: left;
      color: map-get($color-group, title-sub);
    }
    h2 {
      font-size: 14px;
      color: black;
      margin: 5px 0px;
    }
    p {
      font-size: 12px;
      color: map-get($color-group, title-sub);
      margin: 0px;
    }
  }
}
</style>
