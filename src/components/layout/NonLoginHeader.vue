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
    <div style="display: inline;float: right">
      <router-link to="/" style="color: black;font-size: 20px">主页</router-link> |
      <router-link to="/login" style="color: black;font-size: 20px" v-if="!isLogin">登录</router-link>
      <router-link to="/login" style="color: black;font-size: 20px" v-if="isLogin" @click="logout()">注销</router-link>
    </div>
    <div style="display: inline;float: right;margin-right: 2%">
      <el-button @click="jumpToPostView()">上传作品</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NonLoginHeader",
  data(){
    return{
      isLogin:0
    }
  },
  methods:{
    jumpToPostView(){
      this.$router.push("/artwork/post");
    },
    logout(){
      localStorage.removeItem("login_state");
      this.isLogin=false;
    }
  },
  created() {
    this.isLogin=localStorage.getItem("login_state")
  },
  mounted() {
    this.isLogin=localStorage.getItem("login_state")
  },
  beforeMount() {
    this.isLogin=localStorage.getItem("login_state")
  }
}
</script>

<style scoped>

</style>