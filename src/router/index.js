import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/user/HomeView.vue'
import SearchView from "@/views/artwork/SearchView";
import ArtworkView from "@/views/artwork/ArtworkView";
import ArtworkPostView from "@/views/artwork/ArtworkPostView";
import LoginView from "@/views/user/LoginView";
import RegisterView from "@/views/user/RegisterView";
import UserMainPageView from "@/views/user/UserMainPageView";
import TestView from "@/views/TestView";
import CategoryView from "@/views/category/CategoryView";
const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/home',
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
  {
    path:'/user',
    name:'User',
    component: UserMainPageView
  },
  {
    path: '/category',
    name:'Category',
    component: CategoryView
  },
  {
    path: '/test',
    name:'Test',
    component: TestView
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
