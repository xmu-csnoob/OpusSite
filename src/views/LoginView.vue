<template>
  <div class="background">
    <div class="el-card">
      <LoginForm/>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/user/LoginForm";
export default {
  name: "LoginView",
  components: {LoginForm}
}
</script>

<style scoped>
.background{
  width: 2560px;
  height: 1600px;
  background: url("../assets/login.jpg");
}
.el-card{
  width: 25%;
  height: 30%;
  margin-left: 20%;
  margin-top: 5%
}
</style>