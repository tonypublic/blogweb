<template>
  <div>
    <a class="icon-box">
      <i class="iconfont icon-weixin"></i>
    </a>
    <a class="icon-box">
      <i class="iconfont icon-weibo"></i>
    </a>
    <a class="icon-box">
      <i class="iconfont icon-aqy"></i>
    </a>
    <a class="icon-box">
      <i class="iconfont icon-bilibili"></i>
    </a>
    <a class="icon-box">
      <i class="iconfont icon-youku"></i>
    </a>
    <a class="icon-box">
      <i class="iconfont icon-iconyoutube"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SbSocial',
  data() {
    return {
      msg: 'This is social link!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon-box {
  border: 1px solid;
  border-color: #e5e5e5;
  width: 38px;
  height: 38px;
  display: inline-block;
  text-align: center;
  margin-right: 5px;
  margin-bottom: 10px;
  /* line-height: 36px; */
  color: #c2c2c2;
  cursor: pointer;
}
.iconfont {
  font-family: 'iconfont';
  font-size: 24px;
  font-style: normal;
  color: rgb(150, 150, 150);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>