<template>
  <header>
    <div class="nav-container">
      <ul class="nav-list">
        <li class="nav-item" v-for="(item) in navList" :key="item.id" @click="changeActive(item.id)">
          <router-link :to="item.path" :class="item.type?'active':''">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
    <nav>
      <ul class="nav-sub-ul">
        <li class="nav-sub-list" v-for="(item) in remList" :key="item.id">
          <div @click="changeSubActive(item.id)">
            <router-link class="nav-link" :class="item.type?'sub-active':''" :to="item.path">{{item.title}}
            </router-link>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      navList: [
        {id: 1, title: "发现音乐", path: "/", type: true},
        {id: 2, title: "我的音乐", path: "/myMusic", type: false},
        {id: 3, title: "朋友", path: "/friend", type: false},
        {id: 4, title: "商城", path: "/mall", type: false},
        {id: 5, title: "音乐人", path: "/musician", type: false},
        {id: 6, title: "下载客户端", path: "/download", type: false}
      ],
      remList: [
        {id: 1, title: "推荐", path: "Discover", type: true},
        {id: 2, title: "排行榜", path: "Billboard", type: false},
        {id: 3, title: "歌单", path: "Playlist", type: false},
        {id: 4, title: "主播电台", path: "Djradio", type: false},
        {id: 5, title: "歌手", path: "Artist", type: false},
        {id: 6, title: "新碟上架", path: "Album", type: false}
      ]
    }
  },
  mounted() {
    this.remList.forEach(item => {
      item.type = this.$route.path === "/" + item.path;
    })
  },
  methods: {
    changeActive(id) {
      this.navList.forEach(item => {
        item.type = id === item.id;
      })
    },
    changeSubActive(id) {
      this.remList.forEach(item => {
        item.type = id === item.id;
      })
    }
  }
}
</script>

<style scoped>
header {
  width: 100%;
  height: 70px;
  box-shadow: 5px 5px 2px #ededed,
  -5px -5px 2px #ffffff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
}

.nav-container {
  width: 20.37rem;
  height: 100%;
  margin: 0 auto;
}

.nav-list {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  line-height: 70px;
}

.nav-list .nav-item {
  flex: 1;
  text-align: center;
  height: 100%;
}

.nav-item a {
  font-size: 14px;
  display: inline-block;
  width: 100%;
  height: 100%;
  transition: 0.8s;
}

.active {
  font-weight: bold;
  color: #3CA172 !important;
  box-shadow: inset 0.63rem 0.63rem 1.259rem #a2e0ba,
  inset -0.63rem -0.63rem 1.259rem #ceffec;
  background-color: #DCD9D4;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), radial-gradient(at 50% 0%, rgba(255, 255, 255, 0.10) 0%, rgba(0, 0, 0, 0.50) 50%);
  background-blend-mode: soft-light, screen;
}

nav {
  width: 100%;
  height: 34px;
  background-color: #000;
}

.nav-sub-ul {
  display: flex;
  justify-content: center;
  width: 20.37rem;
  height: 100%;
  margin: 0 auto;
  text-align: center;
}

.nav-sub-ul li {
  flex: 1;
  margin-left: -1.407rem;
  line-height: 34px;
}

.nav-link {
  color: #fff;
  padding: 0.093rem 0.37rem;
  border-radius: 0.111rem;
  font-size: 12px;
  transition: 0.3s;
}

.sub-active {
  background-color: #fff;
  color: black;
  font-weight: bold;
}
</style>

