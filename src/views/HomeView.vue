<template>
  <div class="background">
    <div class="empty"/>
    <div class="introduction">
      <span>Opus  一个图像素材分享网站</span>
    </div>
    <div class="search">
      <el-input placeholder="搜索图片..." v-model="keyWord"/>
    </div>
  </div>
  <div class="image">
    <MainPageImageTable/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPageImageTable from "@/components/ImageTable/MainPageImageTable";

export default {
  name: 'HomeView',
  components: {
    MainPageImageTable,
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
.image{
  width: 100%;
  height: 100%;
}
.background{
  background: url("../assets/searchBuffer.jpg")no-repeat;
  background-size: 100%,100%;
  height: 480px;
}
.empty{
  height: 30%;
}
.introduction{
  font-size: 40px;
  margin-left: 35%;
}
.search{
  width: 40%;
  margin-left: 30%;
  margin-top: 5%;
}
</style>
