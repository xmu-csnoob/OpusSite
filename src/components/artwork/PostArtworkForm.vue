<template>
  <el-form v-model="form" label-width="120px">
    <el-form-item label="作品名称">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="作品介绍">
      <el-input v-model="form.introduction" />
    </el-form-item>
    <el-form-item label="所属类别">
      <el-select v-model="form.categories" multiple>
        <el-option v-for="option in category" :key="option" :label="option.name" :value="option.id"/>
      </el-select>
    </el-form-item>
    <el-form-item label="图片上传" prop="img">
      <input type="file" ref="file" v-on:change="showImage()"/>
    </el-form-item>
    <el-form-item label="图片预览" style="width: 30%;height: 10%">
      <el-image :src="form.url" style="transform: scale(0.3)"/>
    </el-form-item>
    <el-form-item>
      <el-button @click="submit()">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive } from 'vue'
import axios from "axios";

export default {
  name: "PostArtworkForm",
  data(){
    return{
      form :reactive({
        name: '',
        introduction:'',
        categories:[],
        fileList: [],
        filename:'',
        url:''
      }),
      category:[]
    }
  },
  methods: {
    submit:function(){
      const file=this.$refs.file.files[0]
      let formData=new FormData();
      formData.set("File",file)
      formData.set("Name",this.form.name)
      const json=JSON.stringify(this.form.categories)
      const blob=new Blob([json],{type:"application/json"});
      formData.set("Category",blob);
      formData.set("Introduction",this.form.introduction)
      //43.138.12.177:12138
      axios.post("http://43.138.12.177:12138/artwork/",formData)
      .then((response)=>{
        const returnNo=response.data.returnNo;
        console.log(returnNo)
        if(returnNo==='OK'){
          alert("提交成功");
        }
      })
    },
    showImage:function (){
      const file=this.$refs.file.files[0]
      this.form.url=window.URL.createObjectURL(file)
    }
  },
  created() {
    axios.get("http://43.138.12.177:12101/category")
        .then((response)=>{
          console.log(response)
          this.category=response.data.data;
        })
  }
}
</script>

<style scoped>

</style>