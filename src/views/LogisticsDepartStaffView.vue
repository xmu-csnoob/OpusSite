<template>
  <el-container>
    <el-aside>
      <BossSidebar/>
    </el-aside>
    <el-main>
      <LogisticsDepartStaffInfoTable/>
    </el-main>
  </el-container>
</template>

<script>
import LogisticsDepartStaffInfoTable from "@/components/InfoTable/LogisticsDepartStaffInfoTable";
import BossSidebar from "@/components/UniversalComponent/BossSidebar";
export default {
  name: "StaffInfoView",
  components: {LogisticsDepartStaffInfoTable,BossSidebar}
}
</script>

<style scoped>

</style>