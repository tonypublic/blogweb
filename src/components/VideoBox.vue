<template>
  <b-container class="videobox">
    <iframe src="http://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=1648bb14179499e4d8bbb9dbca7679b9&tvId=533830100&accessToken=2.f22860a2479ad60d8da7697274de9346&appKey=3955c3425820435e86d0f4cdfe56f5e7&appId=1368&height=100%&width=100%" frameborder="0" allowfullscreen="true" width="100%" height="100%"></iframe>
  </b-container>
</template>

<script>
export default {
  name: 'VideoBox',
  data() {
    return {
      vedioLink: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.videobox {
  height: auto;
  margin-bottom: 20px;
}
@media screen and (min-width: 1200px) {
  .videobox {
    height: 625px;
  }
}
@media screen and (min-width: 992px) and (max-width: 1200px) {
  .videobox {
    height: 524px;
  }
}
@media screen and (min-width: 768px) and (max-width: 992px) {
  .videobox {
    height: 389px;
  }
}
@media screen and (min-width: 576px) and (max-width: 768px) {
  .videobox {
    height: 287px;
  }
}
@media screen and (max-width: 576px) {
  .videobox {
    height: 287px;
  }
}
</style>
