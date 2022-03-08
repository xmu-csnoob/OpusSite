<template>
  <el-container>
    <el-aside>
      <BossSidebar/>
    </el-aside>
    <el-main>
      <EmployDepartStaffInfoTable/>
    </el-main>
  </el-container>
</template>

<script>
import EmployDepartStaffInfoTable from "@/components/InfoTable/EmployDepartStaffInfoTable";
import BossSidebar from "@/components/UniversalComponent/BossSidebar";
export default {
  name: "StaffInfoView",
  components: {EmployDepartStaffInfoTable,BossSidebar}
}
</script>

<style scoped>

</style>