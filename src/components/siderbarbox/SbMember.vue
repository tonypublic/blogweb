<template>
  <div>
    <b-media v-if="logined" class="mb-2">
      <b-img rounded="circle" slot="aside" width="70" height="70" :src="userInfo.icon" alt="placeholder" />
      <div>
        <span>{{userInfo.name}}</span>
        <span class="subtitle text-warning">Lev.{{userInfo.grade}}</span>
      </div>
      <div class="subtitle">
        <div>积分：{{userInfo.points}}</div>
        <div>主题：{{userInfo.subject}}</div>
        <div>回复：{{userInfo.comment}}</div>
        <div>在线：{{userInfo.online}}小时</div>
      </div>
    </b-media>
    <!-- <b-button class="btn-block" variant="success" @click="newsubject">我要留言</b-button> -->
    <!-- 用户操作菜单 -->
    <div v-if="menuFlag" align="center">
      <b-list-group class="mt-2">
        <b-list-group-item href="#" @click="gotomessagelist">我的消息</b-list-group-item>
        <b-list-group-item href="#">我的主题</b-list-group-item>
        <b-list-group-item href="#">我的回复</b-list-group-item>
        <b-list-group-item href="#">我的收藏</b-list-group-item>
        <b-list-group-item href="#" @click="gotomemberinfo">个人资料</b-list-group-item>
      </b-list-group>
      <b-list-group class="mt-2">
        <b-list-group-item href="#">锁定会员</b-list-group-item>
        <b-list-group-item href="#">锁定主题</b-list-group-item>
        <b-list-group-item href="#">屏蔽内容</b-list-group-item>
        <b-list-group-item href="#">删除主题</b-list-group-item>
      </b-list-group>
    </div>
    <div align="center" @click="viewMenu">
      <i class="iconfont icon-xiangxia text-muted"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SbMember',
  data() {
    return {
      logined: true,
      menuFlag: false,
      userInfo: {}
    }
  },
  created: function() {
    // this.getUserInfo()
  },
  // computed: mapState({
  //   userInfo: state => state.user.userInfo
  // }),
  methods: {
    // ...mapActions(['getUserInfo']),
    viewMenu: function() {
      this.menuFlag = this.menuFlag ? false : true
    },
    newsubject: function() {
      this.$router.push('/a')
    },
    gotomemberinfo: function() {
      this.$router.push('/m')
    },
    gotomessagelist: function() {
      this.$router.push('/pm')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
img {
  margin-left: auto;
  margin-right: auto;
  display: block;
}
.info {
  font-size: 14px;
  color: rgb(120, 120, 120);
  margin-bottom: 5px;
}
.list-group {
  width: 120px;
}
</style>
