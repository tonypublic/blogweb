<template>
  <div class="comment-box">
    <div class="clearfix">
      <div class="title float-left">25个评论</div>
      <div class="sort-type float-right align-text-bottom">
        <span>时间排序</span>
        <span>|</span>
        <span>热度排序</span>
      </div>
    </div>
    <div class="comment-item">
      <hr/>
      <b-media>
        <b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder" />
        <div class="clearfix">
          <div class="author float-left">
            <span>隔壁老张</span>
            <span>版主</span>
          </div>
          <div class="floor float-right">#20</div>
        </div>
        <div class="content">
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
          <p>
            <b-img src="http://demo.shapedtheme.com/kotha/wp-content/uploads/2015/07/photo-1428865798880-73444f4cbefc-1140x600.jpeg" fluid alt="Responsive image" />
          </p>
        </div>
        <div class="footer clearfix">
          <div class="postdate float-left">发表于 2018/1/6 12:20</div>
          <div class="reply-operate float-right">
            <i class="iconfont icon-xiangshang1"></i>
            <span @click="replyLoad">回复(99)</span>
            <span>修改</span>
            <span>举报</span>
          </div>
        </div>
        <div>
          <ReplyList></ReplyList>
        </div>
      </b-media>
    </div>
    <!-- <hr/> -->
    <b-pagination align="right" :total-rows="100" v-model="currentPage" :per-page="10">
    </b-pagination>
  </div>
</template>

<script>
import ReplyList from '@/components/ReplyList'

export default {
  name: 'CommentList',
  data() {
    return {
      msg: 'This is Content!',
      currentPage: 3,
      isShowReply: false,
      content: '',
      currentPage: 1
    }
  },
  methods: {
    replyLoad: function() {
      this.isShowReply = this.isShowReply ? false : true
    }
  },
  components: { ReplyList }
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
  margin-top: 5px;
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
