<template>
  <div>
    <div class="list-item" v-for="item in items" :key="item.id">
      <b-media>
        <b-img class="list-img" slot="aside" :src="item.imglink" alt="placeholder" />
        <p class="item-title" @click="gotoSubject(item.id,item.type)">{{item.title}}</p>
        <p>
          <span class="item-date">{{item.postdate}}</span>
          <span class="stats-info">{{item.views}}次观看</span>
        </p>
      </b-media>
    </div>
  </div>
</template>

<script>
import subject from '../../api/subject'

export default {
  name: 'SbHotList',
  data() {
    return {
      items: []
    }
  },
  created: function() {
    this.getArticleList()
  },
  methods: {
    //文章详情跳转
    gotoSubject: function(id, type) {
      if (type == 'p') {
        this.$router.push('/p/'.concat(id))
      } else if (type == 'v') {
        this.$router.push('/v/'.concat(id))
      }
    },
    //获取文章列表
    getArticleList: function() {
      this.$Progress.start()
      var ap = new Object()
      ap = subject.getArticleList({
        start: 0,
        amounts: 5,
        sort: 'hot' //按热门排序
      }),
      this.items = ap.articlelist
      this.$Progress.finish()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.list-item {
  height: 60px;
  margin-bottom: 25px;
}
.list-img {
  width: 60px;
  height: 60px;
}
.item-title {
  font-size: 14px;
  overflow: auto;
  margin: 0px;
}
.item-date {
  color: map-get($color-group, title-sub);
  font-size: 12px;
  font-style: italic;
}
.stats-info {
  float: right;
  font-size: 12px;
  color: map-get($color-group, title-sub);
}
</style>