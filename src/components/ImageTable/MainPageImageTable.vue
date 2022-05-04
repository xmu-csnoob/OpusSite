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
  data(){
    return {
      urls1:[],
      urls2:[],
      urls3:[]
    }
  },
  created() {
    axios.get("http://localhost:12138/artwork/users/0?page=1&pageSize=2")
        .then((response)=>{
          let data=response.data
          let list=data.data.list
          for (let i=0; i<list.length; i++){
            axios.get("http://localhost:12100/image/" +list[i].imageId)
                .then((response)=>{
                  let d=response.data
                  let url=d.data.url;
                  this.urls1.push(url)
                })
          }
        })
    axios.get("http://localhost:12138/artwork/users/0?page=2&pageSize=2")
        .then((response)=>{
          let data=response.data
          let list=data.data.list
          for (let i=0; i<list.length; i++){
            axios.get("http://localhost:12100/image/" +list[i].imageId)
                .then((response)=>{
                  let d=response.data
                  let url=d.data.url;
                  this.urls2.push(url)
                })
          }
        })
    axios.get("http://localhost:12138/artwork/users/0?page=3&pageSize=2")
        .then((response)=>{
          let data=response.data
          let list=data.data.list
          for (let i=0; i<list.length; i++){
            axios.get("http://localhost:12100/image/" +list[i].imageId)
                .then((response)=>{
                  let d=response.data
                  let url=d.data.url;
                  this.urls3.push(url)
                })
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