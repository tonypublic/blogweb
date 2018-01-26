<template>
  <div class="block-style memberinfo">
    <h5>个人资料</h5>
    <div class="mt-3">
      <h6>基本信息</h6>
      <hr/>
      <table>
        <tr>
          <td width="80px">头像：</td>
          <td>
            <b-img thumbnail width="120px" height="75" :src="require('../assets/head.png')" fluid alt="Thumbnail" />
          </td>
          <td>
            <vue-core-image-upload class="align-bottom" :class="['btn', 'btn-primary']" text="更改" :crop="true" @imageuploaded="imageuploaded" :data="data" :max-file-size="5242880" url="your server url">
            </vue-core-image-upload>
          </td>
        </tr>
        <tr>
          <td>用户名：</td>
          <td>隔壁老王</td>
        </tr>
        <tr>
          <td>Email：</td>
          <td>laowang@gebi.com</td>
          <td>修改</td>
        </tr>
        <tr>
          <td>密 码：</td>
          <td>......</td>
          <td>修改</td>
        </tr>
        <tr>
          <td>用户组：</td>
          <td>普通会员</td>
        </tr>
      </table>
    </div>
    <div class="mt-4">
      <h6>活跃概况</h6>
      <hr/>
      <table class="actiontable">
        <tr>
          <td>积分：</td>
          <td width="150px">6</td>
        </tr>
        <tr>
          <td>主题：</td>
          <td>1,789</td>
          <td>回复：</td>
          <td>123,456</td>
        </tr>
        <tr>
          <td>主题访问量：</td>
          <td>123,456</td>
          <td>最后发表时间：</td>
          <td>2018/1/18 12:30</td>
        </tr>
        <tr>
          <td>最后访问时间：</td>
          <td>2018/1/18 12:30</td>
          <td>最后访问IP：</td>
          <td>255.255.255.255</td>
        </tr>
        <tr>
          <td>账号注册时间：</td>
          <td>2018/1/18 12:30</td>          
          <td>账号注册IP：</td>
          <td>255.255.255.255</td>
        </tr>
        <td>在线时间：</td>
        <td colspan="3">1,234,567,890小时</td>
      </table>
    </div>
  </div>
</template>

<script>
import VueCoreImageUpload from 'vue-core-image-upload'

export default {
  name: 'MemberInfo',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: {
        src:
          'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png'
      }
    }
  },
  methods: {
    imageuploaded(res) {
      if (res.errcode == 0) {
        this.src =
          'http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png'
      }
    }
  },
  components: { VueCoreImageUpload }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.memberinfo {
  padding: 40px 40px 10px;
}
h1 {
  font-weight: normal;
}
td {
  height: 30px;
  vertical-align: bottom;
  padding: 0px 5px;
}
</style>
