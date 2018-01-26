<template>
  <div>
    <SbSearch v-if="searchFlag"></SbSearch>
    <b-container class="sider-box" v-for="item in items" :key="item.id">
      <div class="box-panel">
        <div class="box-header">
          <div class="box-tag"></div>
          <div class="box-title">{{item.title}}</div>
        </div>
        <div class="box-content">
          <component v-bind:is="item.module"></component>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import SbAbout from '@/components/siderbarbox/SbAbout'
import SbSocial from '@/components/siderbarbox/SbSocial'
import SbHotList from '@/components/siderbarbox/SbHotList'
import SbMember from '@/components/siderbarbox/SbMember'
import SbSearch from '@/components/siderbarbox/SbSearch'

export default {
  name: 'SiderBar',
  data() {
    return {
      loginFlag: false,
      items: []
    }
  },
  created: function() {
    this.initItems()
  },
  computed: {
    //根据路由来确定是否显示搜索框
    searchFlag: function() {
      var sf = this.$route.path.substr(0, 2)
      return sf == '/' || sf == '/c' ? true : false
    }
  },
  methods: {
    initItems: function() {
      if (this.loginFlag) {
        this.items = [{ title: '会员', module: SbMember }]
      } else {
        this.items = [{ title: '关于', module: SbAbout }]
      }
      this.items.push(
        { title: '关注', module: SbSocial },
        { title: '热门内容', module: SbHotList }
      )
    }
  },
  components: { SbAbout, SbSocial, SbHotList, SbMember, SbSearch }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.sider-box {
  padding: 0px;
}
.box-panel {
  @include block-style;
}
.box-tag {
  width: 8px;
  height: 26px;
  position: absolute;
  background-color: $theme-key-color;
}
.box-title {
  font-size: 18px;
  letter-spacing: 5px;
  padding-top: 5px;
  padding-left: 18px;
}
.box-content {
  padding: 18px;
  padding-bottom: 10px;
}
</style>
