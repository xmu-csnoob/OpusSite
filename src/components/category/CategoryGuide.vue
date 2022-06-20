<template>
<div  @click="jumpToCategoryPage(category_id)">
  <el-card class="category_guide" :style="{backgroundImage: 'url('+imageUrl+')'}">
    <div class="category_details">
      <span style="font-size: 48px;color: white">{{category.name}}</span>
    </div>
  </el-card>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "CategoryGuide",
  props:{
    // eslint-disable-next-line vue/require-prop-type-constructor
    category_id:0
  },
  data() {
    return {
      category: {
        id: 0,
        name: '',
        introduction: ''
      },
      imageUrl:'',
    }
  },
  methods:{
    jumpToCategoryPage(categoryId){
      this.$router.push("/category?id="+categoryId)
    }
  }
  ,
  created() {
    axios.get("http://localhost:12101/category/"+this.category_id)
        .then((response)=>{
          console.log(response)
          let data=response.data.data;
          this.category.id=data.id
          this.category.name=data.name
          this.imageUrl=data.imageUrl
          this.category.introduction=data.introduction
        })
  }
}
</script>

<style scoped>
.category_guide{
  width: 500px;
  height: 750px;
  background-size: 500px 750px;
}
.category_details{
  width:30%;
  font-size: 18px;
}
</style>