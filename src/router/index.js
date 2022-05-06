import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from "@/views/SearchView";
import ArtworkView from "@/views/ArtworkView";
import ArtworkPostView from "@/views/ArtworkPostView";
import LoginView from "@/views/LoginView";
import RegisterView from "@/views/RegisterView";
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
  {
    path:'/artwork',
    name:'Artwork',
    component: ArtworkView
  },
  {
    path:'/artwork/post',
    name:'ArtworkPost',
    component: ArtworkPostView
  },
  {
    path:'/login',
    name:'Login',
    component: LoginView
  },
  {
    path:'/register',
    name:'Register',
    component: RegisterView
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
