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