<template>
  <el-header>
    <div style="display: inline;float: right">
      <router-link to="/">主页</router-link> |
      <router-link to="/about">关于本站</router-link> |
      <router-link to="/login">注销</router-link>
    </div>
  </el-header>
</template>

<script>
export default {
  name: "SimpleHeader"
}
</script>

<style scoped>
  .el-header{
    background: #9999CC;
    line-height: 22px;
    width: 100%;
    height: 25px;
  }
</style>