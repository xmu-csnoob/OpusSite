import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.timeout = 50000
const app = createApp(App).use(router)
installElementPlus(app)
app.use(ElementPlus);
app.use(VueAxios,axios);
app.mount('#app')
app.config.globalProperties.$axios = axios
axios.defaults.withCredentials=true  //开启发送cookie
router.afterEach(() => { document.querySelector("body").setAttribute("style", "overflow: auto !important;") });
// 发送请求之前先为请求头添加Authorization字段且值为token，以应对后端接口的验证
axios.interceptors.request.use(config => {
    // 将登陆时存储在浏览器sessionStorage中的token值放入请求头中
    config.headers.token = localStorage.getItem('token');
    return config;
})



