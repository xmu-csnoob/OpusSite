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
        <el-button @click="register()">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {reactive} from "vue";
import axios from "axios";

export default {
  name: "RegisterForm",
  data(){
    return{
      form :reactive({
        username: '',
        password:''
      }),
    }
  },
  methods:{
    register:function (){
      axios.post("http://localhost:12345/register",this.form)
          .then((response)=>{
            const state=response.data.errMsg;
            if(state==='Success'){
              alert("注册成功，请登录！")
              this.$router.push("/login")
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