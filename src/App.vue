<template>
  <div class="background">
      <img src="../src/assets/background.jpg" style="width: 100%;height: 100%"/>
  </div>
  <div class="front">
    <SimpleHeader/>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.front{
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
}
.background{
  z-index: -1;
  position: absolute;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import SimpleHeader from "@/components/UniversalComponent/SimpleHeader";
export default {
  components: {SimpleHeader}
}
</script>