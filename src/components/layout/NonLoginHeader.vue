<template>
  <div class="header">
    <div style="display: inline;float: left">
      <span style="font-family: Gabriola,serif;font-size: 20px">Opus</span>
    </div>
    <div style="display: inline;margin-left: 4%">
      <router-link to="/" style="color: black;font-size: 20px">风景</router-link> |
      <router-link to="/login" style="color: black;font-size: 20px">人文</router-link>|
      <router-link to="/login" style="color: black;font-size: 20px">科技</router-link>
    </div>
    <div style="display: inline;float: right;">
      <router-link to="/" style="color: black;font-size: 20px">主页</router-link> |
      <router-link to="/login" style="color: black;font-size: 20px">登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NonLoginHeader"
}
</script>

<style scoped>

</style>