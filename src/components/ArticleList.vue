<template>
  <div class="lists">
    <b-row class="list-item" v-for="item in items" :key="item.id">
      <b-col class="entry-img" md="4" sm="12">
        <b-img fluid-grow alt="Fluid-Grow image" :src="item.imglink" />
        <div class="item-duration" v-if="item.type==='v'">{{item.duration}}</div>
      </b-col>
      <b-col md="8" sm="12">
        <div>
          <div class="entry-title" @click="gotoSubject(item.id)">{{item.title}}</div>
          <label class="item-label" v-if="item.istop">TOP</label>
        </div>
        <div class="entry-post">{{item.postdate}}</div>
        <div class="entry-info">{{item.info}}</div>
        <div>
          <label class="tag-1 mr-2" v-if="item.tags.length>0" v-for="tag in item.tags" :key="tag.id">{{tag}}</label>
        </div>
        <div class="stats-info">
          <span>{{item.views}}次观看</span>
          <span>|</span>
          <span>{{item.comments}}次评论</span>
        </div>
      </b-col>
    </b-row>
    <b-pagination :total-rows="totle" v-model="currentPage" :per-page="perPage" @input="changePage"></b-pagination>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ArticleList',
  data() {
    return {
      currentPage: 1,
      perPage: 10
    }
  },
  created: function() {
    this.getArticleList({
      start: this.currentPage - 1,
      amounts: this.perPage
    })
    this.$Progress.start()
  },
  mounted() {
    this.$Progress.finish()
  },
  computed: {
    ...mapState({
      totle: state => state.article.totle,
      items: state => state.article.articleList
    })
  },
  methods: {
    ...mapActions(['getArticleList']),
    changePage: function() {
      this.getArticleList({
        start: (this.currentPage - 1) * this.perPage,
        amounts: this.perPage
      })
    },
    gotoSubject: function(id) {
      this.$router.push('/p/'.concat(id))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.breadcrumb {
  margin: 0px;
  padding: 8px 10px;
}
.lists {
  padding: 0px;
}
.list-item {
  @include block-style;
}
.entry-img {
  padding: 0px;
  cursor: pointer;
}
.item-duration {
  position: absolute;
  right: 8px;
  bottom: 8px;
  padding: 0 6px;
  font-size: 12px;
  @include tag-style;
}
.entry-title {
  margin-top: 10px;
  font-size: 18px;
  white-space: nowrap;
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.entry-title:not(.disabled):hover {
  color: #2fb3db;
  cursor: pointer;
}
.item-label {
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 0 15px;
  font-size: 14px;
  font-weight: bold;
  @include tag-style;
}
.entry-post {
  margin-top: 4px;
  font-size: 14px;
  font-style: italic;
  color: rgb(120, 120, 120);
}
.entry-info {
  margin-top: 7px;
  font-size: 14px;
  color: rgb(120, 120, 120);
}
.stats-info {
  position: absolute;
  bottom: 6px;
  right: 15px;
  margin-top: 28px;
  text-align: right;
  font-size: 14px;
  color: rgb(120, 120, 120);
}
</style>