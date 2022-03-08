<template>
  <el-header>
    <img src="../../assets/logo.png" alt="LOGO" class="logo" style="height:40px;margin-top: 10px;display: inline;float: left">
    <p style="display: inline;font-size: 30px">We Want Eyes Brighter 酒店管理系统</p>
    <div class="navs" style="display: inline;float: right">
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
    background: #99CCFF;
    line-height: 60px;
    width: 100%;
  }
</style>