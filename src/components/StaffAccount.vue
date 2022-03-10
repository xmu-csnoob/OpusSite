<template>
  <div class="tableHeader">
    <p style="color:#FFFFCC;font-size: 25px">个人中心</p>
  </div>
  <el-descriptions direction="vertical" :column="1" border>
    <el-descriptions-item prop="username" label="用户名">{{tableData.username}}</el-descriptions-item>
    <el-descriptions-item prop="position" label="职位">{{tableData.position}}</el-descriptions-item>
    <el-descriptions-item prop="tel" label="手机号">{{tableData.tel}}</el-descriptions-item>
    <el-descriptions-item prop="email" label="邮箱">{{tableData.email}}</el-descriptions-item>
  </el-descriptions>
</template>

<script>
import axios from "axios";

export default {
  name: "StaffAccount",
  data(){
    return{
      tableData:[]
    }
  },
  created() {
    axios.get("http://localhost:8012/staff/info")
        .then((res)=>{
              console.log(res);
              this.tableData=res.data.data;
        })
  }
}
</script>

<style scoped>
  .header{
    font-size: 30px;
    font-weight: bold;
  }
  .el-form{
    border: 1px solid #DCDFE6;
    width: 100%;
    height: 60%;
    alignment: center;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
    background: #FFFFFF;
  }
</style>