<template>
  <div>
    <div class="list-item" v-for="item in items" :key="item.id">
      <b-media>
        <b-img class="list-img" slot="aside" :src="item.imglink" alt="placeholder" />
        <p class="item-title">{{item.title}}</p>
        <p>
          <span class="item-date">{{item.postdate}}</span>
          <span class="stats-info">{{item.views}}次观看</span>
        </p>
      </b-media>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SbHotList',
  data() {
    return {
      items: [
        {
          type: 'v',
          imglink:
            'http://demo.fabthemes.com/obiron/files/2015/08/sniper-2-ghost-warrior-game_1920x1080_311-hd-80x80.jpg',
          title: '这是第一个测试项目这是第一个测试项目',
          postdate: '2018/1/4',
          views: '10万',
          comments: '1000'
        },
        {
          type: 'v',
          imglink:
            'http://demo.fabthemes.com/obiron/files/2015/08/sniper-2-ghost-warrior-game_1920x1080_311-hd-80x80.jpg',
          title: '这是第一个测试项目这是第一个测试项目',
          postdate: '2018/1/4',
          views: '10万',
          comments: '1000'
        },
        {
          type: 'v',
          imglink:
            'http://demo.fabthemes.com/obiron/files/2015/08/sniper-2-ghost-warrior-game_1920x1080_311-hd-80x80.jpg',
          title: '这是第一个测试项目这是第一个测试项目',
          postdate: '2018/1/4',
          views: '10万',
          comments: '1000'
        },
        {
          type: 'v',
          imglink:
            'http://demo.fabthemes.com/obiron/files/2015/08/sniper-2-ghost-warrior-game_1920x1080_311-hd-80x80.jpg',
          title: '这是第一个测试项目这是第一个测试项目',
          postdate: '2018/1/4',
          views: '10万',
          comments: '1000'
        },
        {
          type: 'v',
          imglink:
            'http://demo.fabthemes.com/obiron/files/2015/08/sniper-2-ghost-warrior-game_1920x1080_311-hd-80x80.jpg',
          title: '这是第一个测试项目这是第一个测试项目',
          postdate: '2018/1/4',
          views: '10万',
          comments: '1000'
        }
      ]
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