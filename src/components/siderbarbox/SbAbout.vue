<template>
  <div>
    <b-img src="http://mepopedia.com/~css104-2a/hw08/hw08-1035445103/images/%E9%BE%8D%E8%B2%931.png" fluid alt="Responsive image" />
    <div class="info">{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'SbAbout',
  data() {
    return {
      msg: '这是一个blog测试网站。'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>