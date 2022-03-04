<template>
  <el-container>
    <el-aside>
      <BossSidebar/>
    </el-aside>
    <el-main>
      <StaffAccount/>
    </el-main>
  </el-container>
</template>

<script>
import StaffAccount from "@/components/StaffAccount";
import BossSidebar from "@/components/BossSidebar";
export default {
  name: "AccountView",
  components: {StaffAccount,BossSidebar}
}
</script>

<style scoped>

</style>