<template>
  <div>
    <el-card class="image_container">
      <el-image :src=src fit="contain" :preview-src-list=preview></el-image>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ImagePreview",
  props:{
    src:String,
    preview:[]
  }
}
</script>

<style scoped>
.image_container{
  width:1280px;
  height: 960px;
}
.el-image{
  width:1280px;
  height: 960px;
}
</style>