<template>
  <el-container>
    <el-aside>
      <BossSidebar v-if="level===4"/>
      <GeneralManagerSidebar v-if="level===3"/>
      <ManagerSidebar v-if="level===2"/>
      <EmployeeSidebar v-if="level===1"/>
    </el-aside>
    <el-main>
      <AllStaffInfoTable/>
    </el-main>
  </el-container>
</template>

<script>
import AllStaffInfoTable from "@/components/InfoTable/AllStaffInfoTable";
import BossSidebar from "@/components/UniversalComponent/BossSidebar";
import axios from "axios";
import EmployeeSidebar from "@/components/UniversalComponent/EmployeeSidebar";
import ManagerSidebar from "@/components/UniversalComponent/ManagerSidebar";
import GeneralManagerSidebar from "@/components/UniversalComponent/GeneralManagerSidebar";
export default {
  name: "StaffInfoView",
  components: {
    EmployeeSidebar,
    ManagerSidebar,
    GeneralManagerSidebar,
    BossSidebar,
    AllStaffInfoTable
  },
  data(){
    return{
      username:'',
      level:''
    }
  },
  created() {
    axios.get("http://121.37.149.40:8012/staff/info")
        .then((res)=>{
              this.username=res.data.data.username;
              this.level=res.data.data.level;
              console.log(this.level);
            }
        )
  }
}
</script>

<style scoped>

</style>