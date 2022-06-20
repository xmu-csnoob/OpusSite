<template>
  <div class="introduction">
    <span>{{this.category_name}}</span>
  </div>
  <div class="image-table">
    <el-row :gutter="10">
      <el-col :span="8">
        <div>
          <ImageContainer v-for="image in image1" :key="image" :src="image.url" fit="fill" @click="jumpToPage(image.artworkId)" :preview-src-list="urlList"/>
        </div>
      </el-col>
      <el-col :span="8">
        <div>
          <ImageContainer v-for="image in image1" :key="image" :src="image.url" fit="fill" @click="jumpToPage(image.artworkId)" :preview-src-list="urlList"/>
        </div>
      </el-col>
      <el-col :span="8">
        <div>
          <ImageContainer v-for="image in image1" :key="image" :src="image.url" fit="fill" @click="jumpToPage(image.artworkId)" :preview-src-list="urlList"/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";
import ImageContainer from "@/components/image/ImageContainer";
export default {
  components: {ImageContainer},
  props:['category_id'],
  data(){
    return {
      category_name:'',
      image1:[],
      image2:[],
      image3:[],
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
    axios.get("http://localhost:12101/category/"+this.category_id)
        .then((response)=>{
          let data=response.data.data;
          this.category_name=data.name
        })
    axios.get("http://localhost:12101/category/"+this.category_id+"/artworks?pageNum=1&pageSize=9")
        .then((response)=>{
          let data=response.data
          let list=data.data
          console.log(list)
          for (let i=0; i<list.length; i++){
            if(i>=0&&i<3){
              axios.get("http://localhost:12100/image/" +list[i].imageId)
                  .then((response)=>{
                    console.log(response);
                    let d=response.data
                    let url=d.data.url;
                    const image={};
                    image.url=url;
                    image.artworkId=list[i].id;
                    this.image1.push(image)
                    this.urlList.push(url)
                  })
            }else if(i>=3&&i<6){
              axios.get("http://localhost:12100/image/" +list[i].imageId)
                  .then((response)=>{
                    let d=response.data
                    let url=d.data.url;
                    const image={};
                    image.url=url;
                    image.artworkId=list[i].id;
                    this.image2.push(image)
                    this.urlList.push(url)
                  })
            }else if(i>=6&&i<9){
              axios.get("http://localhost:12100/image/" +list[i].imageId)
                  .then((response)=>{
                    let d=response.data
                    let url=d.data.url;
                    const image={};
                    image.url=url;
                    image.artworkId=list[i].id;
                    this.image3.push(image)
                    this.urlList.push(url)
                  })
            }
          }
        })
  }
}
</script>

<style scoped>
.image-table{
  background: aliceblue;
}
.introduction{
  width: 200px;
  margin: 0 auto 30px;
  font-size: 50px;
}
</style>