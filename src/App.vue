<template>
  <div id="app">
    <Header></Header>
    <div class="body">
      <router-view name="body"></router-view>
      <!-- <router-view name="layoutBody"></router-view> -->
    </div>
    <BackTop></BackTop>
    <Footer></Footer>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import { BackTop } from 'iview'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  data() {
    return {}
  },
  components: { Header, Footer, BackTop }
}
</script>

<style lang="scss">
#app {
  background-color: rgb(241, 241, 241);
  font-family: 'Arial', 'Microsoft YaHei';
}
.body {
  padding-top: 120px;
}
</style>
