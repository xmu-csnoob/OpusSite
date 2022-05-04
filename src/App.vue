<template>
  <el-container>
    <el-header>
      <NonLoginHeader/>
    </el-header>
    <div>
      <router-view/>
    </div>
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
  components: {NonLoginHeader}
}
</script>