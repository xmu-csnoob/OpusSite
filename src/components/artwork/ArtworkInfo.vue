<template>
  <div class="main">
    <div class="screen">
      <ImageScreen son :url="url" style="margin-left: 20%"/>
    </div>
    <div class="introduction">
      <el-descriptions :title="artwork.name" border="border" direction="vertical">
        <el-descriptions-item label="作品介绍">{{artwork.introduction}}</el-descriptions-item>
        <el-descriptions-item label="分类" v-for="item in category" :key="item">{{item.name}}</el-descriptions-item>
        <el-descriptions-item label="创作者">{{username}}</el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ImageScreen from "@/components/image/ImageTable/ImageScreen";

export default {
  name: "ArtworkInfo",
  components: {ImageScreen},
  data(){
    return{
      artworkId:0,
      imageId:0,
      userId:0,
      username:"",
      artwork:{},
      category:[],
      url:"",
      keyword:"",
    }
  },
  created() {
    this.artworkId=this.$route.query.id
    axios.get("http://localhost:12138/artwork/"+this.artworkId)
        .then((response)=>{
          console.log(response);
          this.artwork=response.data.data;
          this.userId=response.data.data.userId;
          this.imageId=this.artwork.imageId
          let imageId=this.imageId;
          axios.get("http://localhost:12100/image/"+imageId)
              .then((response)=>{
                this.url=response.data.data.url;
              })
          axios.get("http://localhost:12345/user/"+this.userId)
              .then((response)=>{
                this.username=response.data.data.name;
              })
        })
    axios.get("http://localhost:12101/category/artwork/"+this.artworkId)
        .then((response)=>{
          this.category=response.data.data;
        })
  }
}
</script>

<style scoped>
.screen{
  display: inline;
  float: left;
  width: 50%;
  height: 50%;
  size: auto;
}
.introduction{
  display: inline;
  float: left;
  width: 30%;
  height: 30%;
}
.main{
  margin-top: 10%;
}
</style>