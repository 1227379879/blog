<template>
  <header>
    <div>
      <ul>
        <li v-for="(item) in navList" :key="item.id">
         <router-link :to="item.path">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>

export default {
  name: "navbar",
  data(){
    return{
      navList:[
        {id:1,title:"发现音乐",path:"/"},
        {id:2,title:"我的音乐",path:"/myMusic"},
        {id:3,title:"朋友",path:"/friend",},
        {id:4,title:"商城",path: "/mall"},
        {id:5,title:"音乐人",path: "/musician"},
        {id:6,title:"下载客户端",path: "/download"}
      ]
    }
  }
}
</script>

<style scoped>
    header{

    }
</style>

