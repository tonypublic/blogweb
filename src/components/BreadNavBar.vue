<template>
  <div>
    <b-breadcrumb :items="breadItems" />
  </div>
</template>

<script>
export default {
  name: 'BreadNavBar',
  data() {
    return {
      msg: '这是一个blog测试网站。',
      breadItems: [
        {
          text: '全部',
          href: '#'
        },
        {
          text: '搜索结果',
          active: true
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.breadcrumb {
  font-size: 15px;
  padding: 0px 5px;
  margin-bottom: 5px;
  background-color: transparent
}
</style>