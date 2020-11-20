import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Discover from "../views/Home/children/Discover";
Vue.use(VueRouter)

const routes = [
  {
    //发现音乐  -- 首页
    path: '/',
    name: 'Home',
    component: Home,
    redirect:"/discover",
    children:[
      {
        //推荐
        path:"Discover",
        name:"Discover",
        component:Discover
      },
      {
        //排行榜
        path:"Billboard",
        name:"Billboard",
        component:()=>import("../views/Home/children/Billboard")
      },
      {
        //歌单
        path:"Playlist",
        name:"Playlist",
        component:()=>import("../views/Home/children/Playlist")
      },
      {
        //主播电台
        path:"Djradio",
        name:"Djradio",
        component:()=>import("../views/Home/children/Djradio")
      },
      {
        //歌手
        path:"Artist",
        name:"Artist",
        component:()=>import("../views/Home/children/Artist")
      },
      {
        //新碟上架
        path:"Album",
        name:"Album",
        component:()=>import("../views/Home/children/Album")
      },
    ]
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
