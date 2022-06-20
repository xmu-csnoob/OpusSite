<template>
  <div class="background">
    <div class="el-card">
      <UserInfoForm/>
    </div>
  </div>
</template>

<script>
import UserInfoForm from "@/components/user/UserInfoForm";
export default {
  name: "UserMainPageView",
  components: {UserInfoForm}
}
</script>

<style scoped>
.background{
  width: 2560px;
  height: 1600px;
  background: url("../../assets/login.jpg")no-repeat;
}
.el-card{
  width: 25%;
  height: 50%;
  margin-left: 25%;
  margin-top: 5%
}
</style>