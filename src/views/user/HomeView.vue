<template>
  <div class="background">
    <div class="empty"/>
    <div class="introduction">
      Opus  一个图像素材分享网站
    </div>
    <div class="search">
      <el-input placeholder="搜索图片..." v-model="keyWord"/>
    </div>
  </div>
  <div class="categories">
    <el-row :gutter="140">
      <el-col :span="8">
        <CategoryGuide :category_id="1"/>
      </el-col>
      <el-col :span="8">
        <CategoryGuide :category_id="2"/>
      </el-col>
      <el-col :span="8">
        <CategoryGuide :category_id="3"/>
      </el-col>
    </el-row>
    <el-row :gutter="140">
      <el-col :span="8">
        <CategoryGuide :category_id="4"/>
      </el-col>
      <el-col :span="8">
        <CategoryGuide :category_id="5"/>
      </el-col>
      <el-col :span="8">
        <CategoryGuide :category_id="6"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

import CategoryGuide from "@/components/category/CategoryGuide";
export default {
  name: 'HomeView',
  components: {
    CategoryGuide
  },
  data(){
    return{
      keyWord:""
    }
  },

  created() {//需要在created中就直接挂好
    const that=this;
    document.onkeydown = function () {
      const key = window.event.keyCode
      if (key === 13) {//13是键盘上enter的映射
        that.$router.push("search?keyword="+that.keyWord)
      }
    }
  },
}
</script>
<style scoped>
.background{
  background: url("../../assets/buffer.jpeg")no-repeat;
  background-size: 1800px 1158px;
  width: 1800px;
  height: 480px;
  margin: 0 auto 40px;
}
.empty{
  height: 30%;
}
.introduction{
  font-size: 40px;
  color: white;
  margin-left: 35%;
}
.search{
  width: 40%;
  margin-left: 30%;
  margin-top: 5%;
}
.categories{
  margin: 0 auto;
}
.el-row{
  margin-bottom: 30px;
}
.el-col{
  border-radius: 4px;
}

</style>
