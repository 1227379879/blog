import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    //我的音乐
    path: '/myMusic',
    name: 'MyMusic',
    component: () => import('../views/MyMusic/MyMusic')
  },
  {
    //朋友
    path: "/friend",
    name:"Friend",
    component: ()=>import("../views/Friend/Friend")
  },
  {
    //商场
    path: "/mall",
    name:"Mall",
    component: ()=>import("../views/Mall/Mall")
  },
  {
    //音乐人
    path: "/musician",
    name:"Musician",
    component: ()=>import("../views/Musician/Musician")
  },
  {
    //下载
    path: "/download",
    name:"Download",
    component: ()=>import("../views/Download/Download")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
