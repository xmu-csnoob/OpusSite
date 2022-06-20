<template>
<div>
  <el-card class="image_container">
    <el-image :src=src fit="fill" :preview-src-list=preview></el-image>
  </el-card>
</div>
</template>

<script>
export default {
  name: "ImageContainer",
  props:{
    src:String,
    preview:[]
  }
}
</script>

<style scoped>
.image_container{
  width:640px;
  height: 480px;
}
.el-image{
  width:640px;
  height: 480px;
}
</style>