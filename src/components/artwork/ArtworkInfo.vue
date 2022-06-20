<template>
  <div class="main">
    <div class="screen">
      <ImageScreen son :url="url" style="margin-left: 20%"/>
    </div>
    <div class="introduction">
      <el-descriptions :title="artwork.name" :column="1" border="border" direction="vertical">
        <el-descriptions-item label="作品介绍">{{artwork.introduction}}</el-descriptions-item>
        <el-descriptions-item label="分类" v-for="item in category" :key="item">
          <el-tag size="small">
            {{item.name}}
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="创作者">{{username}}</el-descriptions-item>
      </el-descriptions>
      <div class="evaluation">
          <div class="evaluation-item">
            <el-icon style="display: inline;font-size: 30px">
              <StarFilled v-if="isStar" @click="unStar()"/>
              <Star v-if="!isStar" @click="star()"/>
            </el-icon>
            <span style="display: inline;margin-left: 80px;font-size: 30px">{{starNum}}</span>
          </div>
          <div class="evaluation-item">
            <el-icon style="display: inline;font-size: 30px">
              <Collection/>
            </el-icon>
            <span style="display: inline;margin-left: 80px;font-size: 30px">0</span>
          </div>
          <div class="evaluation-item">
            <el-icon style="display: inline;font-size: 30px">
              <Share/>
            </el-icon>
            <span style="display: inline;margin-left: 80px;font-size: 30px">0</span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ImageScreen from "@/components/image/ImageTable/ImageScreen";
import {StarFilled} from "_@element-plus_icons@0.0.11@@element-plus/icons";

export default {
  name: "ArtworkInfo",
  components: {StarFilled, ImageScreen},
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
      starNum:0,
      isStar:false
    }
  },
  methods:{
    star(){
      axios.post("http://localhost:12103/evaluation/star/artwork/"+this.artworkId)
          .then((response)=>{
            this.starNum++;
            this.isStar=!this.isStar
            console.log(response);
          })
    },
    unStar(){
      axios.post("http://localhost:12103/evaluation/star/artwork/"+this.artworkId+"/cancel")
          .then((response)=>{
            this.starNum--;
            this.isStar=!this.isStar
            console.log(response);
          })
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
    axios.get("http://localhost:12103/evaluation/star/artwork/"+this.artworkId)
        .then((response)=>{
          console.log(response);
          let data=response.data.data;
          this.starNum=data.starCount;
          this.isStar=data.hasStarred;
        })
  }
}
</script>

<style scoped>
.main{
  height: 1200px;
}
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
  height: 100px;
}
.evaluation{
  width: 40%;
  height: 10%;
  margin: 0 auto 50px;
}
.evaluation-item{
  margin-top: 10px;
  margin-left: 20px;
}
.main{
  margin-top: 10%;
}
</style>