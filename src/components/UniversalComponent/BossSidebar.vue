<template>
    <el-aside>
      <el-menu class="el-menu-demo" :default-openeds="['1','5']"
      :default-active="this.$router.path" router>
        <el-submenu index="1">
          <template #title>
            员工管理
           </template>
          <el-menu-item index="/staff" onclick="">所有员工</el-menu-item>
          <el-menu-item index="/staff/employ">人事部门</el-menu-item>
          <el-menu-item index="/staff/logistics">后勤部门</el-menu-item>
          <el-menu-item index="/staff/service">服务部门</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template #title>账户中心</template>
          <el-menu-item index="/account">我的账户</el-menu-item>
          <el-menu-item index="5-2">修改信息</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>

    </el-main>
</template>

<script>
export default {
  name: "SimpleSidebar"
}
</script>

<style scoped>
  .el-aside{
    height:150vh;
  }
  .title{
    color:white;
  }
  .el-submenu{
    background: #FFFFCC;
  }
  .el-menu-item{
    background: #660066;
    border-width: 20px;
    border-color: black;
    color:#FFFFFF;
  }
</style>