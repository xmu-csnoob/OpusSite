<template>
  <div class="whole">
    <el-form class="loginWindow">
      <p class="welcome">Welcome!</p>
      <el-form-item label="请输入账号">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="请输入密码">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit('LoginWindow')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginWindow",
  data() {
    return {
      ip:'',
      form: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    onSubmit() {
      let username=this.form.username;
      let password=this.form.password;
      let data={
        "username":username,
        "password":password
      }
      axios.post('http://121.37.149.40:8012/staff/login',data)
      .then((res)=>{
              console.log(res);
              if(res.data.data.success===true)
              {
                this.$router.push("/");
                localStorage.setItem('token',res.data.data.token)
              }
              else
                alert("登陆失败");
          }
      )

    }
  }
}
</script>

<style scoped>
  .loginWindow {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 200px 640px;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
    background: aliceblue;
  }
  .welcome{
    font-size: 20px;
    margin-top: 1px;
  }
</style>