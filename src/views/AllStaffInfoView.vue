<template>
  <el-container>
    <el-aside>
      <BossSidebar/>
    </el-aside>
    <el-main>
      <AllStaffInfoTable/>
    </el-main>
  </el-container>
</template>

<script>
import AllStaffInfoTable from "@/components/InfoTable/AllStaffInfoTable";
import BossSidebar from "@/components/UniversalComponent/BossSidebar";
export default {
  name: "StaffInfoView",
  components: {AllStaffInfoTable,BossSidebar}
}
</script>

<style scoped>

</style>