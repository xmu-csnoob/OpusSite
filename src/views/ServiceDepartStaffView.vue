<template>
  <el-container>
    <el-aside>
      <BossSidebar/>
    </el-aside>
    <el-main>
      <ServiceDepartStaffInfoTable/>
    </el-main>
  </el-container>
</template>

<script>
import ServiceDepartStaffInfoTable from "@/components/InfoTable/ServiceDepartStaffInfoTable";
import BossSidebar from "@/components/UniversalComponent/BossSidebar";
export default {
  name: "StaffInfoView",
  components: {ServiceDepartStaffInfoTable,BossSidebar}
}
</script>

<style scoped>

</style>