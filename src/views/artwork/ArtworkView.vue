<template>
  <div class="search">
    <el-input placeholder="搜索图片..." v-model="keyword"/>
  </div>
  <div>
    <ArtworkInfo/>
  </div>
</template>

<script>

import ArtworkInfo from "@/components/artwork/ArtworkInfo";
export default {
  name: "ArtworkView",
  components: {ArtworkInfo},
}
</script>

<style scoped>

</style>