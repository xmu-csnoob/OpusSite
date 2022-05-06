<template>
  <div class="image-table">
    <el-row gutter="0">
      <el-col :span="3">
        <div>
          <el-image v-for="image in image1" :key="image" :src="image.url" fit="fill" @click="jumpToPage(image.artworkId)" :preview-src-list="urlList"/>
        </div>
      </el-col>
      <el-col :span="3">
        <div>
          <el-image v-for="image in image2" :key="image" :src="image.url" fit="fill" @click="jumpToPage(image.artworkId)" :preview-src-list="urlList"/>
        </div>
      </el-col>
      <el-col :span="3">
        <div>
          <el-image v-for="image in image3" :key="image" :src="image.url" fit="fill" @click="jumpToPage(image.artworkId)" :preview-src-list="urlList"/>
        </div>
      </el-col>
      <el-col :span="3">
        <div>
          <el-image v-for="image in image4" :key="image" :src="image.url" fit="fill" @click="jumpToPage(image.artworkId)" :preview-src-list="urlList"/>
        </div>
      </el-col>
      <el-col :span="3">
        <div>
          <el-image v-for="image in image5" :key="image" :src="image.url" fit="fill" @click="jumpToPage(image.artworkId)" :preview-src-list="urlList"/>
        </div>
      </el-col>
      <el-col :span="3">
        <div>
          <el-image v-for="image in image6" :key="image" :src="image.url" fit="fill" @click="jumpToPage(image.artworkId)" :preview-src-list="urlList"/>
        </div>
      </el-col>
      <el-col :span="3">
        <div>
          <el-image v-for="image in image7" :key="image" :src="image.url" fit="fill" @click="jumpToPage(image.artworkId)" :preview-src-list="urlList"/>
        </div>
      </el-col>
      <el-col :span="3">
        <div>
          <el-image v-for="image in image8" :key="image" :src="image.url" fit="fill" @click="jumpToPage(image.artworkId)" :preview-src-list="urlList"/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props:['keyword'],
  data(){
    return {
      image1:[],
      image2:[],
      image3:[],
      image4:[],
      image5:[],
      image6:[],
      image7:[],
      image8:[],
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
    let keyword=this.keyword;
    axios.get("http://43.138.12.177:12138/artwork?page=1&pageSize=24&word="+keyword)
        .then((response)=>{
          let data=response.data
          let list=data.data.list
          for (let i=0; i<list.length; i++){
            if(i>=0&&i<3){
              axios.get("http://43.138.12.177:12100/image/" +list[i].imageId)
                  .then((response)=>{
                    let d=response.data
                    let url=d.data.url;
                    const image={};
                    image.url=url;
                    image.artworkId=list[i].id;
                    this.image1.push(image)
                    this.urlList.push(url)
                  })
            }else if(i>=3&&i<6){
              axios.get("http://43.138.12.177:12100/image/" +list[i].imageId)
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
              axios.get("http://43.138.12.177:12100/image/" +list[i].imageId)
                  .then((response)=>{
                    let d=response.data
                    let url=d.data.url;
                    const image={};
                    image.url=url;
                    image.artworkId=list[i].id;
                    this.image3.push(image)
                    this.urlList.push(url)
                  })
            }else if(i>=9&&i<12){
              axios.get("http://43.138.12.177:12100/image/" +list[i].imageId)
                  .then((response)=>{
                    let d=response.data
                    let url=d.data.url;
                    const image={};
                    image.url=url;
                    image.artworkId=list[i].id;
                    this.image4.push(image)
                    this.urlList.push(url)
                  })
            }else if(i>=12&&i<15){
              axios.get("http://43.138.12.177:12100/image/" +list[i].imageId)
                  .then((response)=>{
                    let d=response.data
                    let url=d.data.url;
                    const image={};
                    image.url=url;
                    image.artworkId=list[i].id;
                    this.image5.push(image)
                    this.urlList.push(url)
                  })
            }else if(i>=15&&i<18){
              axios.get("http://43.138.12.177:12100/image/" +list[i].imageId)
                  .then((response)=>{
                    let d=response.data
                    let url=d.data.url;
                    const image={};
                    image.url=url;
                    image.artworkId=list[i].id;
                    this.image6.push(image)
                    this.urlList.push(url)
                  })
            }else if(i>=18&&i<21){
              axios.get("http://43.138.12.177:12100/image/" +list[i].imageId)
                  .then((response)=>{
                    let d=response.data
                    let url=d.data.url;
                    const image={};
                    image.url=url;
                    image.artworkId=list[i].id;
                    this.image7.push(image)
                    this.urlList.push(url)
                  })
            }else if(i>=21&&i<24){
              axios.get("http://43.138.12.177:12100/image/" +list[i].imageId)
                  .then((response)=>{
                    let d=response.data
                    let url=d.data.url;
                    const image={};
                    image.url=url;
                    image.artworkId=list[i].id;
                    this.image8.push(image)
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
</style>