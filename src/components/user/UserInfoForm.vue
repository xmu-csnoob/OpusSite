<template>
  <div class="avatar">
    <el-avatar shape="square" :size="150" :src="avatarUrl"/>
  </div>
  <div class="btn">
    <el-upload round="round"
               style="margin-left: 45%;margin-top: 5%;font-size: 5px;font-weight: lighter;"
               ref="upload"
               class="upload-demo"
               action="http://localhost:12345/user/avatar"
               :headers=this.headers
               :on-success="success"
               :show-file-list="false"
               limit="1">更换头像</el-upload>
  </div>
  <div class="description">
    <el-descriptions border="border" column="1">
      <el-descriptions-item label="用户名">{{username}}</el-descriptions-item>
      <el-descriptions-item label="邮箱">Example@example.com</el-descriptions-item>
      <el-descriptions-item label="作品">0</el-descriptions-item>
      <el-descriptions-item label="点赞">0</el-descriptions-item>
      <el-descriptions-item label="收藏">0</el-descriptions-item>
    </el-descriptions>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "UserMainPage",
  data(){
    return{
      username:'',
      email:'',
      avatarUrl:'',
      headers:{token:localStorage.getItem("token")}
    }
  },
  created() {
    axios.get("http://localhost:12345/user")
    .then((response)=>{
      let user=response.data.data
      this.username=user.name
      this.avatarUrl=user.avatarUrl
    })
  },
  methods:{
    success(){
      this.$refs.upload.clearFiles()
      axios.get("http://localhost:12345/user")
          .then((response)=>{
            let user=response.data.data
            this.username=user.name
            this.avatarUrl=user.avatarUrl
          })
    }
  }
}
</script>

<style scoped>
.el-descriptions{
  margin-top: 5%;
}
.el-avatar{
  margin-left: 37.5%;
  margin-top: 5%;
}
.avatar{
  margin-top: 70px;
}
.description{
  width: 80%;
  height: 40%;
  margin: 0 auto 80px;
}
.btn{
  margin-bottom: 80px;
  margin-top: 60px;
}
</style>