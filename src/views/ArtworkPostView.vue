<template>
  <el-card class="box-card">
      <PostArtworkForm/>
  </el-card>
</template>

<script>
import PostArtworkForm from "@/components/artwork/PostArtworkForm";
export default {
  name: "ArtworkPostView",
  components: {PostArtworkForm}
}
</script>

<style scoped>
.content{
  width:50%;
  height: 90%;
  margin-left: 15%;
  margin-top: 10%;
  border: black 4px solid;
}
.postWindow{
  width: 60%;
  height: 40%;
}
</style>