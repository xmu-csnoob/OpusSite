<template>
  <div class="image-table">
    <el-row gutter="4">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content ep-bg-purple"/>
        <el-image v-for="image in image1" :key="image" :src="image.url" @click="jumpToPage(image.artworkId)" fit="scale-down" :preview-src-list="urlList"/>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content ep-bg-purple"/>
        <el-image v-for="image in image2" :key="image" :src="image.url" @click="jumpToPage(image.artworkId)" fit="scale-down" :preview-src-list="urlList"/>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content ep-bg-purple"/>
        <el-image v-for="image in image3" :key="image" :src="image.url" @click="jumpToPage(image.artworkId)" fit="scale-down" :preview-src-list="urlList"/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data(){
    return{
      image1:[],
      image2:[],
      image3:[],
      showHover:false,
      urlList:[]
    }
  },
  methods:{
    jumpToPage(artworkId){
      this.$router.push("/artwork?id="+artworkId);
    }
  }
  ,
  created() {
    axios.get("http://localhost:12138/artwork/users/0?page=1&pageSize=15")
        .then((response)=>{
          console.log(response);
          let data=response.data
          let list=data.data.list
          for (let i=0; i<list.length; i++){
            axios.get("http://localhost:12100/image/" +list[i].imageId)
                .then((response)=>{
                  let d=response.data
                  let url=d.data.url;
                  const image={};
                  image.url=url;
                  image.artworkId=list[i].id;
                  this.image1.push(image)
                  this.urlList.push(url)
                })
          }
        })
    axios.get("http://localhost:12138/artwork/users/0?page=2&pageSize=15")
        .then((response)=>{
          let data=response.data
          let list=data.data.list
          for (let i=0; i<list.length; i++){
            axios.get("http://localhost:12100/image/" +list[i].imageId)
                .then((response)=>{
                  let d=response.data
                  let url=d.data.url;
                  const image= {}
                  image.url=url;
                  image.artworkId=list[i].id;
                  this.image2.push(image)
                  this.urlList.push(url)
                })
          }
        })
    axios.get("http://localhost:12138/artwork/users/0?page=3&pageSize=15")
        .then((response)=>{
          let data=response.data
          let list=data.data.list
          for (let i=0; i<list.length; i++){
            axios.get("http://localhost:12100/image/" +list[i].imageId)
                .then((response)=>{
                  let d=response.data
                  let url=d.data.url;
                  const image= {url:"",artworkId:0}
                  image.url=url;
                  image.artworkId=list[i].id;
                  this.image3.push(image)
                  this.urlList.push(url)
                })
          }
        })
  }
}
</script>

<style scoped>
.image-table{
  background: aliceblue;
  border: lightskyblue 4px solid;
}
.image{
  width: inherit;
  height: inherit;
}
</style>