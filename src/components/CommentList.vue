<template>
  <div class="comment-box">
    <div class="clearfix">
      <div class="title float-left">{{total}}个评论</div>
      <div class="sort-type float-right align-text-bottom">
        <span>时间排序</span>
        <span>|</span>
        <span>热度排序</span>
      </div>
    </div>
    <hr/>
    <div class="comment-item" v-for="(item,index) in items" :key="item.id">
      <b-media class="mt-3 mb-2" >
        <b-img slot="aside" rounded  :src="item.headicon" blank-color="#ccc" width="50" height="50" alt="placeholder" />
        <div class="d-flex justify-content-between">
          <div class="author">
            <span>{{item.authorname}}</span>
            <span>Lev.{{item.grade}}</span>
          </div>
          <div class="floor font-weight-bold"># {{item.floor}}</div>
        </div>
        <div class="text-justify" v-html="item.content">
        </div>
        <div class="footer d-flex justify-content-between">
          <div>发表于 {{item.postdate}}</div>
          <div>
            <i class="iconfont icon-xiangshang1"></i>
            <span @click="loadReplyList(index,item.cid)">{{replyView.items[index] != null && replyView.items[index].name == 'ReplyList'?'收起':'回复'}}({{item.reply}})</span>
            <span>修改</span>
            <span>举报</span>
          </div>
        </div>
        <div>
          <component :is="replyView.items[index]" :commentId="item.cid" v-on:closeReplyList="closeReplyList"></component>
        </div>
      </b-media>
      <hr/>
    </div>
    <!-- <hr/> -->
    <b-pagination v-if="total>perPage" align="right" :total-rows="total" v-model="currentPage" :per-page="perPage" @input="changePage">
    </b-pagination>
  </div>
</template>

<script>
import ReplyList from '@/components/ReplyList'
import comment from '../api/comment'

var NullComponent = {
  name: 'NullComponent',
  template: '<div></div>'
}

export default {
  name: 'CommentList',
  data() {
    return {
      total: 0,
      items: [],
      perPage: 10,
      replyView: {
        items: [],  //用来控制是否显示回复内容的组件数组
        last: 0 //记录上一次打开回复列表的评论序号
      },
      currentPage: 1
    }
  },
  created: function() {
    this.getCommentList()
  },
  methods: {
    //翻页事件处理
    changePage() {
      this.replyView.items[this.replyView.last] = NullComponent  //关闭上一次打开的回复列表组件
      this.getCommentList()
    },
    //根据主题ID获取评论列表
    getCommentList() {
      var cl = new Object()
      cl = comment.getCommentList({
        subjectid: this.$route.params.id,
        start: (this.currentPage - 1) * this.perPage,
        amounts: this.perPage,
        sort: 'date'  //按日期排序
      })
      this.total = cl.total
      this.items = cl.commentlist
    },
    //加载回复列表
    loadReplyList(index) {
      if (this.replyView.items[index] != null && this.replyView.items[index].name == 'ReplyList') {
        //如果当前评论下已经加载了回复列表，则关闭当前回复列表
        this.$set(this.replyView.items, this.replyView.last, NullComponent)
      } else {
        //如果当前评论下未加载回复列表，则先关闭上一次打开的回复列表，再加载当前回复列表
        this.replyView.items[this.replyView.last] = NullComponent  //关闭上一次打开的回复列表组件
        this.replyView.last = index
        this.$set(this.replyView.items, index, ReplyList) //将回复列表组件加载到指定的评论下面，用set可以引发组件重新渲染
      }
    },
    //处理子组件replylist返回的关闭当前list事件
    closeReplyList() {
      this.$set(this.replyView.items, this.replyView.last, NullComponent)
    }
  },
  components: { ReplyList, NullComponent }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.comment-box {
  padding: 20px 40px 10px;
}
.title {
  font-size: 18px;
}
.sort-type {
  font-size: 14px;
  margin-top: 4px;
  cursor: pointer;
  :hover {
    color: map-get($color-group, theme-main);
  }
}
.comment-item {
  font-size: 14px;
}
hr {
  margin: 5px 0px 0px;
}
.author {
  font-size: 15px;
  font-weight: bold;
}
.floor {
  color: map-get($color-group, theme-main);
}
.footer {
  span {
    margin-right: 10px;
  }
}
.pagination {
  margin-top: 20px;
}
</style>
