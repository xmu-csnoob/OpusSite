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
  width: 1920px;
  height: 1440px;
  background-size: 100% 100%;
  background: url("../assets/login.jpg") no-repeat;
}
.el-card{
  width: 30%;
  height: 30%;
  margin: 10% auto 0;
}
</style>