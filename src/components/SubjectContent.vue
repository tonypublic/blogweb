<template>
  <article>
    <h4 class="mb-3">这是第一个测试项目</h4>
    <div>
      <b-media>
        <b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder" />
        <div>
          <h6 class="d-inline">Nested Media</h6>
          <span class="text-warning">Lev.6</span>
        </div>
        <div class="d-flex flex-wrap">
          <div class="subtitle font-italic pt-1 mr-4">Posted: 2018/1/4 12:12</div>
          <div>
            <label class="tag-1 mr-3" v-if="item.tags.length>0" v-for="tag in item.tags" :key="tag.id">{{tag}}</label>
          </div>
        </div>
        <div class="subtitle d-flex justify-content-end">
          <div class="mr-3">
            <i class="iconfont icon-yanjing" />
            <span>9,278</span>
          </div>
          <div class="mr-3">
            <i class="iconfont icon-41" />
            <span>9,278</span>
          </div>
          <div>
            <i class="iconfont icon-sharearrow" />
            <span>9,278</span>
          </div>
        </div>
      </b-media>
    </div>
    <div>
      <p class="article-info">这是一段简要的文章介绍，可以在list中显示。</p>
      <div v-html="content"></div>
    </div>
    <div v-if="eidtFlag">
      <quill-editor v-model="content" :options="editorOption">
      </quill-editor>
      <div>
        <b-button class="d-inline" type="submit" size="sm" variant="primary">提 交</b-button>
      </div>
    </div>
    <div v-if="true" class="attachment">
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
      <span class="mr-2">回复</span>
      <span>举报</span>
    </div>
  </article>
</template>

<script>
export default {
  name: 'SubjectContent',
  data() {
    return {
      eidtFlag: false,
      content:
        '<p>那么如何访问这个 meta 字段呢？首先，我们称呼 routes 配置中的每个路由对象为 路由记录。路由记录可以是嵌套的，因此，当一个路由匹配成功后，他可能匹配多个路由记录 例如，根据上面的路由配置，/foo/bar 这个 URL 将会匹配父路由记录以及子路由记录。 一个路由匹配到的所有路由记录会暴露为 $route 对象（还有在导航守卫中的路有对象）的 $route.matched 数组。</p><p><img class="img-fluid" src="http://demo.shapedtheme.com/kotha/wp-content/uploads/2015/07/photo-1428865798880-73444f4cbefc-1140x600.jpeg" alt="Responsive image" /></p><p>因此，我们需要遍历 $route.matched 来检查路由记录中的 meta 字段。</p>',
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
      },
      item: {
        tags: ['家装', '木作']
      }
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
