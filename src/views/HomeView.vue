<template>
  <el-container>
    <el-aside>
      <BossSidebar v-if="level===4"/>
      <GeneralManagerSidebar v-if="level===3"/>
      <ManagerSidebar v-if="level===2"/>
      <EmployeeSidebar v-if="level===1"/>
    </el-aside>
    <el-main>
      <HomeGreeting/>
    </el-main>
  </el-container>
</template>

<script>
// @ is an alias to /src

import BossSidebar from "@/components/UniversalComponent/BossSidebar";
import HomeGreeting from "@/components/HomeGreeting";
import axios from "axios";
import GeneralManagerSidebar from "@/components/UniversalComponent/GeneralManagerSidebar";
import ManagerSidebar from "@/components/UniversalComponent/ManagerSidebar";
import EmployeeSidebar from "@/components/UniversalComponent/EmployeeSidebar";

export default {
  name: 'HomeView',
  components: {
    EmployeeSidebar,
    ManagerSidebar,
    GeneralManagerSidebar,
    HomeGreeting,
    BossSidebar
  },
  data(){
    return{
      username:'',
      level:''
    }
  },
  created() {
    axios.get("http://localhost:8012/staff/info")
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
