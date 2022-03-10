<template>
  <el-aside>
    <el-menu class="el-menu-demo" :default-openeds="['1','3']"
             :default-active="this.$router.path" router>
      <el-submenu index="1">
        <template #title>业绩分析</template>
        <el-menu-item index="1-1">查看我的业绩</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template #title>账户中心</template>
        <el-menu-item index="/account">我的账户</el-menu-item>
        <el-menu-item index="3-2">修改信息</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
  <el-main>

  </el-main>
</template>

<script>
export default {
  name: "EmployeeSidebar"
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