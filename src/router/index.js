import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView";
import AllStaffInfoView from "@/views/AllStaffInfoView";
import AccountView from "@/views/AccountView";
import employDepartStaffView from "@/views/EmployDepartStaffView";
import logisticsDepartStaffView from "@/views/LogisticsDepartStaffView";
import serviceDepartStaffView from "@/views/ServiceDepartStaffView";
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/login',
    name:'Login',
    component: LoginView
  },
  {
    path:'/staff',
    name:'staff',
    component: AllStaffInfoView
  },
  {
    path:'/staff/employ',
    name:'employStaff',
    component: employDepartStaffView
  },
  {
    path:'/staff/logistics',
    name:'logisticsStaff',
    component: logisticsDepartStaffView
  },
  {
    path:'/staff/service',
    name:'serviceStaff',
    component: serviceDepartStaffView
  },
  {
    path:'/account',
    name:'account',
    component: AccountView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
