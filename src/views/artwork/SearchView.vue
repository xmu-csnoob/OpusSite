<template>
  <div class="search">
    <el-input placeholder="搜索图片..." v-model="keyword"/>
  </div>
  <div class="intro">
    <span style="font-size: 30px">对于 {{this.$route.query.keyword}} 的搜索结果如下</span>
  </div>
  <div class="image">
    <KeywordImageTable son :keyword="$route.query.keyword"/>
  </div>
</template>

<script>
import KeywordImageTable from "@/components/image/ImageTable/KeywordImageTable";
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
.search{
  margin-top: 30px;
  margin-bottom: 30px;
}
.intro{
  margin: 0 auto 30px;
  width: 400px;
}
</style>