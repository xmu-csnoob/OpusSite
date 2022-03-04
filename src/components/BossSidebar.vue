<template>
    <el-aside>
      <el-menu class="el-menu-demo" :default-openeds="['1','2','3']"
      :default-active="this.$router.path" router>
        <el-submenu index="1">
          <template #title>员工管理</template>
          <el-menu-item index="/staff" onclick="">所有员工</el-menu-item>
          <el-menu-item index="1-2">人事部门</el-menu-item>
          <el-menu-item index="1-3">后勤部门</el-menu-item>
          <el-menu-item index="1-4">服务部门</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template #title>权限管理</template>
          <el-menu-item index="2-1">查看员工权限</el-menu-item>
          <el-menu-item index="2-2">赋予权限</el-menu-item>
          <el-menu-item index="2-3">撤回权限</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template #title>业绩分析</template>
          <el-menu-item index="3-1">查看整体业绩</el-menu-item>
          <el-menu-item index="3-2">人事部业绩</el-menu-item>
          <el-menu-item index="3-3">后勤部业绩</el-menu-item>
          <el-menu-item index="3-4">服务部业绩</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template #title>消息中心</template>
          <el-menu-item index="4-1">查看消息</el-menu-item>
          <el-menu-item index="4-2">发送消息</el-menu-item>
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
    height:100vh;
  }
  .el-submenu{
    background: #99CCFF;
  }
  .el-menu-item{
    background: #FFFFFF;
    border-width: 20px;
    border-color: black;
  }
</style>