<template>
  <b-navbar toggleable="md" fixed="top">
    <b-container>
      <b-navbar-brand href="#">
        <i>我的博客</i>
        <div class="subtitle">
          <i>It is my blog of life!</i>
        </div>
      </b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="routelink(1)">首页</b-nav-item>
          <b-nav-item @click="routelink(2)">留言</b-nav-item>
          <b-nav-item @click="routelink(3)">社区</b-nav-item>
          <b-nav-item @click="routelink(4)">关于</b-nav-item>
          <b-nav-item class="login" @click="routelink(5)">登录/注册</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    routelink: function(no) {
      switch (no) {
      case 1:
        this.$router.push('/')
        break
      case 2:
        this.$router.push('/a')
        break
      case 3:
        this.$router.push('/c')
        break
      case 4:
        this.$router.push('/c')
        break
      case 5:
        this.$router.push('/login')
        break
      default:
        this.$router.push('/')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.navbar {
  box-shadow: 0px 1px 3px rgba(190, 190, 190, 0.5);
  background-color: white;
  z-index: 5;
}
.navbar .navbar-brand {
  height: 65px;
  color: $theme-key-color;
  font-size: 30px;
  font-weight: bold;
}
.navbar .navbar-brand .subtitle {
  color: $theme-key-color;
  font-size: 14px;
  color: rgb(134, 134, 134);
  font-weight: normal;
}
.navbar .navbar-nav {
  font-size: 16px;
  letter-spacing: 4px;
}
.login {
  letter-spacing: 0px;
}
.navbar .navbar-nav .nav-link:not(.disabled):hover,
.navbar .navbar-nav .nav-link:not(.disabled):focus {
  color: $theme-key-color;
}
</style>
