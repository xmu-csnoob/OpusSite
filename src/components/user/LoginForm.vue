<template>
  <div>
    <div class="icon">
      <span>Opus</span>
    </div>
    <el-form v-model="form" label-width="120px">
      <el-form-item label="用户名" class="item">
        <el-input v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" class="item">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item class="item-button">
        <el-button @click="login()">登录</el-button>
      </el-form-item>
      <el-form-item class="register">
        <router-link to="/register">注册</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {reactive} from "vue";
import axios from "axios";

export default {
  name: "LoginForm",
  data(){
    return{
      form :reactive({
        username: '',
        password:''
      }),
    }
  },
  methods:{
    login:function (){
      axios.post("http://43.138.12.177:12345/login",this.form)
      .then((response)=>{
        console.log(response);
        const state=response.data.data.state;
        const token=response.data.data.token;
        if(state===true){
          localStorage.setItem("login_state",true);
          localStorage.setItem("token",token);
          this.$router.push("/")
        }
      })
    }
  }
}
</script>

<style scoped>
.item{
  width: 60%;
  margin-top: 5%;
  margin-left: 12.5%;
}
.item-button{
  margin-top: 5%;
  margin-left: 27%;
}
.register{
  margin-top: 1%;
  margin-left: 30%;
}
.icon{
  font-size: 100px;
  font-family:Gabriola,serif;
  margin-left: 37.5%;
  margin-top: 2%
}
</style>