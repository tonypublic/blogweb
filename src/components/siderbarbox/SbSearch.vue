<template>
	<div>
      <div class="button d-flex justify-content-around">
        <div class="p-2 w-50 text-center" :class="{buttonactive:activebtn=='publish'}" @click="publishclick"><i class="iconfont icon-bianji"/>留言</div>
        <!-- <div class="tag"></div> -->
        <div class="p-2 w-50 text-center" :class="{buttonactive:activebtn=='search'}" @click="searchclick"><i class="iconfont icon-sousuo"/>搜索</div>
      </div>
      <div class="pr-3 pl-3 pb-2" v-if="false">
        <b-input-group>
          <b-form-input type="text" placeholder="Search for..." />
          <b-input-group-button>
            <b-btn variant="success"><i class="iconfont icon-sousuo"/></b-btn>
          </b-input-group-button>
        </b-input-group>
      </div>
	</div>
</template>

<script>
export default {
  name: 'SbSearch',
  data() {
    return {
      activebtn: 'null', //当前被激活的按钮
    }
  },
  methods: {
    publishclick: function() {
      this.activebtn = 'publish'
      this.$router.push('/a')
    },
    searchclick: function() {
      this.activebtn = 'search'
      this.$router.push('/a')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.button {
  font-size: 17px;
  letter-spacing: 8px;
  color: map-get($color-group, theme-main);
  :hover {
    cursor: pointer;
  }
}
.buttonactive {
  background-color: map-get($color-group, theme-main);
  color: white;
}
</style>