<template>
  <div class="greet">
    <p class="greeting">Welcome Back</p>
    <p class="words">您上次登录是在{time},上次登录的ip是{ip}.</p>
    <p class="words">当前的业绩报告如下：</p>
  </div>
</template>

<script>
export default {
  name: "HomeGreeting"
}
</script>

<style scoped>
  .greet{
    border: 1px solid #DCDFE6;
    width: 100%;
    height: 100%;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
    background: #FFFFFF;
  }
  .greeting{
    font-size: 40px;
  }
  .words{
    font-size:20px
  }
</style>