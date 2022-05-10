<template>
  <el-container>
    <el-header>
      <NonLoginHeader ref="header" :key="new Date().getTime()"/>
    </el-header>
    <router-view :key="new Date().getTime()"/>
  </el-container>
</template>
<style lang="scss">
.el-container{
  width: 100%;
  height: 100%;
}
</style>
<script>
import NonLoginHeader from "@/components/layout/NonLoginHeader";
export default {
  components: {NonLoginHeader},
  data(){
    return{
      updateHeader:true,
      login_state_key:"login_state"
    }
  }
}
</script>