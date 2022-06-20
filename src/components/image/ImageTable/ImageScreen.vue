<template>
  <div class="screen">
    <image-container :src="url" :preview="[url]"/>
  </div>
</template>

<script>

import ImageContainer from "@/components/image/ImageContainer";
export default {
  name: "ImageScreen",
  components: {ImageContainer},
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