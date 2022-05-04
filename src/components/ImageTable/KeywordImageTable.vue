<template>
  <div class="image-table">
    <el-row gutter="4">
      <el-col :span="8">
        <div>
          <el-image v-for="url in urls1" :key="url" :src="url" fit="scale-down"/>
        </div>
      </el-col>
      <el-col :span="8">
        <div>
          <el-image v-for="url in urls2" :key="url" :src="url" fit="scale-down"/>
        </div>
      </el-col>
      <el-col :span="8">
        <div>
          <el-image v-for="url in urls3" :key="url" :src="url" fit="scale-down"/>
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
      urls1:[],
      urls2:[],
      urls3:[]
    }
  },
  created() {
    let keyword=this.keyword;
    axios.get("http://localhost:12138/artwork?page=1&pageSize=9&word="+keyword)
        .then((response)=>{
          let data=response.data
          let list=data.data.list
          for (let i=0; i<list.length; i++){
            if(i>=0&&i<3){
              axios.get("http://localhost:12100/image/" +list[i].imageId)
                  .then((response)=>{
                    let d=response.data
                    let url=d.data.url;
                    this.urls1.push(url)
                  })
            }else if(i>=3&&i<6){
              axios.get("http://localhost:12100/image/" +list[i].imageId)
                  .then((response)=>{
                    let d=response.data
                    let url=d.data.url;
                    this.urls2.push(url)
                  })
            }else if(i>=6&&i<9){
              axios.get("http://localhost:12100/image/" +list[i].imageId)
                  .then((response)=>{
                    let d=response.data
                    let url=d.data.url;
                    this.urls3.push(url)
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