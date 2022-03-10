<template>
  <div class="greet">
    <p class="greeting">Welcome Back</p>
    <p class="loginReport">您的登录ip是{{ip}}.</p>
    <div class="tips">
      <div class="city">
        <p>{{ city }}</p>
      </div>
      <div class="weather">
        <p>{{ weather }}</p>
      </div>
      <div class="temp">
        <p>{{temp}}℃</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeGreeting",
  data() {
    return {
      ip: '',
      city:'',
      city_code:'',
      weather:'',
      temp:''
    }
  },
  methods:{

  },
  created() {
      axios.get("http://121.37.149.40:8012/staff/ip")
        .then((res)=>{
          console.log(res);
          this.ip=res.data.data;
          axios.get("/city",{
            params:{
              key:localStorage.getItem("GaoDeKey"),
              type:4,
              ip:this.ip
            }
          }).then((res)=>{
            console.log(res);
            this.city=res.data.city;
            this.city_code=res.data.adcode;
            axios.get("/weather",{
              params:{
                key:localStorage.getItem("GaoDeKey"),
                city:this.city_code,
                extensions:'base',
                output:'JSON'
              }
            }).then((res)=>{
              this.weather=res.data.lives[0].weather;
              this.temp=res.data.lives[0].temperature;
            })
          })
        });
  }
}
</script>

<style scoped>
  .tips{
    position: absolute;
    margin-top: 120px;
    margin-left:900px;
    border:4px solid lightyellow;
    width: 400px;
  }
  .city{
    font-size: 50px;
  }
  .weather{
    font-size: 35px;
  }
  .temp{
    font-size: 30px;
  }
  .greet{
    border: 1px solid #DCDFE6;
    width: 100%;
    height: 60%;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
  }
  .greeting{
    font-size: 90px;
    position: absolute;
    font-family: Gabriola,sans-serif;
  }
  .loginReport{
    font-size: 40px;
    position: absolute;
    margin-top: 300px;
    font-family: 楷体,sans-serif;
  }
</style>