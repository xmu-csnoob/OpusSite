<template>
  <div class="search">
    <el-input placeholder="搜索图片..." v-model="keyword"/>
  </div>
  <div class="image">
    <KeywordImageTable son :keyword="$route.query.keyword"/>
  </div>
</template>

<script>
import KeywordImageTable from "@/components/ImageTable/KeywordImageTable";
import axios from "axios";
import router from "@/router";
export default {
  name: "SearchView",
  components: {KeywordImageTable},
  data(){
    return{
      keyword:"",
      RouteState:true,
    }
  },
  created() {
    let keyword=this.$route.query.keyword
    axios.get("http://localhost:12138/artwork?page=1&pageSize=10&word="+keyword)
    .then((response)=>{
      console.log(response)
    })
    const that=this;
    document.onkeydown = function () {
      const key = window.event.keyCode
      if (key === 13) {
        that.$router.push("search?keyword="+that.keyword)
      }
    }
  },
  watch: {
    $route(){
      router.go(0)
    }
  }
}
</script>

<style scoped>

</style>