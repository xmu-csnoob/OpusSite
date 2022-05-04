import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from "@/views/SearchView";
const routes = [
  {
    path:'/',
    name:'Home',
    component: HomeView
  },
  {
    path:'/search',
    name:'Search',
    component: SearchView
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
