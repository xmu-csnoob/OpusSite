<template>
  <header class="header">个人中心</header>
  <el-divider/>
  <el-form>
    <el-form-item label="用户名">WWF</el-form-item>
    <el-divider/>
    <el-form-item label="年龄">21</el-form-item>
    <el-divider/>
    <el-form-item label="学历">本科</el-form-item>
    <el-divider/>
    <el-form-item label="职位">董事长</el-form-item>
    <el-divider/>
    <el-form-item label="电话">15239997168</el-form-item>
    <el-divider/>
    <el-form-item label="邮箱">22920192204288@stu.xmu.edu.cn</el-form-item>
    <el-divider/>
  </el-form>
</template>

<script>
export default {
  name: "StaffAccount"
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
    height: 100%;
    alignment: center;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
    background: #FFFFFF;
  }
</style>