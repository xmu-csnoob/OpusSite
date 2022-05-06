<template>
  <div class="screen">
    <el-image :src="url" :preview-src-list="[url]">

    </el-image>
  </div>
</template>

<script>

export default {
  name: "ImageScreen",
  props:["url"],
  data(){
    return{
      urls:[]
    }
  },
}
</script>

<style scoped>
.screen{
  width: 80%;
  height: 80%;
}
</style>