<template>
  <el-container>
    <el-aside>
      <BossSidebar/>
    </el-aside>
    <el-main>
      <StaffInfoTable/>
    </el-main>
  </el-container>
</template>

<script>
import StaffInfoTable from "@/components/StaffInfoTable";
import BossSidebar from "@/components/BossSidebar";
export default {
  name: "StaffInfoView",
  components: {StaffInfoTable,BossSidebar}
}
</script>

<style scoped>

</style>