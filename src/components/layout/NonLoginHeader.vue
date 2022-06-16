<template>
  <div class="header">
    <div style="display: inline;float: left">
      <span style="font-family: Gabriola,serif;font-size: 30px">Opus</span>
    </div>
    <div style="display: inline;float: right">
      <router-link to="/" style="color: black;font-size: 20px" v-if="isLogin">主页</router-link>
      <el-divider v-if="isLogin" direction="vertical"/>
      <router-link to="/user" style="color: black;font-size: 20px" v-if="isLogin">用户主页</router-link>
      <el-divider v-if="isLogin" direction="vertical"/>
      <router-link to="/login" style="color: black;font-size: 20px" v-if="!isLogin">登录</router-link>
      <router-link to="/login" style="color: black;font-size: 20px" v-if="isLogin" @click="logout()">注销</router-link>
    </div>
    <div v-if="isLogin" style="display: inline;float: right;margin-right: 2%">
      <el-button @click="jumpToPostView()">上传作品</el-button>
    </div>
  </div>
</template>

<script>
import {reactive} from "vue";

export default {
  name: "NonLoginHeader",
  data(){
    return{
      isLogin:reactive(localStorage.getItem("login_state"))
    }
  },
  methods:{
    jumpToPostView(){
      this.$router.push("/artwork/post");
    },
    logout(){
      localStorage.removeItem("login_state");
      localStorage.removeItem("token");
      this.isLogin=false;
    }
  },
  beforeMount() {
    this.isLogin=localStorage.getItem("login_state")
  },
  watch: {
    '$route' () {
      this.isLogin=localStorage.getItem("login_state")
    }
  }
}
</script>

<style scoped>
.header{
  background-color: black;
}
</style>