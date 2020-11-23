<template>
  <div class="home">
    <transition name="fade">
      <div>
        <loading v-if="isLoading"></loading>
      </div>
    </transition>
    <header class="header">
      <el-tooltip class="item" effect="dark" content="天气" placement="left">
      <weather :list="weatherList"></weather>
      </el-tooltip>
      <vue-particles
          color="#dedede"
          :particleOpacity="0.7"
          :particlesNumber="80"
          shapeType="circle"
          :particleSize="4"
          linesColor="#dedede"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="3"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
      >
      </vue-particles>
    </header>



    <el-button icon="el-icon-menu" v-show="btnType"
               :class="!isLoading?'animate__bounceIn animate__infinite drawer-button':''" @click="changeDrawer">
      Open Menu
    </el-button>


    <el-drawer
        class="drawer_option"
        :visible.sync="drawer"
        :direction="direction"
        :with-header="false"
        size="18%"
        :before-close="handleClose">
      <div>
        <operation></operation>
      </div>
    </el-drawer>
    <router-view></router-view>
  </div>
</template>

<script>
import loading from "@/components/loading";
import operation from "@/components/operation";

import weather from "@/components/weather"


export default {
  name: 'Home',
  data() {
    return {
      drawer: false,
      direction: 'ltr',
      isLoading: true,
      btnType: true,
      timeStateMent: "",
      weatherList:""

    }
  },
  mounted() {
    //页面加载的延时器
    setTimeout(() => {
      this.isLoading = false
      //来控制提示语
      this.$message({
        message: this.timeStateMent,
        center: true,
        iconClass: "el-icon-chat-dot-round",
        duration:2000
      });
    }, 800)

    //提示信息
    let day = new Date()
    let hr = day.getHours()
    if ((hr >= 0) && (hr <= 4))
      this.timeStateMent = "深夜了，该睡觉了~，注意身体哦..."
    if ((hr >= 4) && (hr < 7))
      this.timeStateMent = "清晨好，起得真早啊..."
    if ((hr >= 7) && (hr < 12))
      this.timeStateMent = "早上好,又是美好的一天呢"
    if ((hr >= 12) && (hr <= 13))
      this.timeStateMent = "中午好啊，是午饭时间喔，"
    if ((hr >= 13) && (hr <= 17))
      this.timeStateMent = "下午好啊，外面的太阳猛烈吗?"
    if ((hr >= 18) && (hr <= 20))
      this.timeStateMent = "现在是晚上"+new Date().toLocaleString('chinese', { hour12: false })+"，该吃晚饭了吧"
    if ((hr >= 21) && (hr<=23))
      this.timeStateMent = "夜深了，这个点该做些什么呢"

    this.$.get("http://wthrcdn.etouch.cn/weather_mini?city=北京").then(res=>{
      console.log(res.data)
      this.weatherList = res.data
    })
  },
  methods: {
    //打开抽屉
    changeDrawer() {
      this.drawer = true
      this.btnType = false
      this.$notify.info({
        title: '用户操作',
        message: '用户打开了菜单栏',
        showClose: false,
        customClass: "operation",
        duration: "1000"
      });
    },
    //关闭抽屉
    handleClose(done) {
      done();
      this.btnType = true
    }
  },
  components: {
    loading,
    operation,
    weather
  }
}
</script>

<style lang="scss">
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.home {
  position: relative;

  .drawer-button {
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: transparent;
    color: #fff;
    transition: 0.3s;

    &:hover {
      background-color: rgba(0, 0, 0, .3);
    }
  }
}

.header {
  overflow: hidden;
  height: 100vh;
  position: relative;
}

.header::before {
  content: "";
  height: 100%;
  position: absolute;
  background: url(../../assets/images/bgi3.jpg) no-repeat 50%;
  width: 100%;
  top: 0;
  background-size: cover !important;
}

.operation {
  background: url("../../assets/images/bgi1.jpg");
  z-index: 9999 !important;
  border: 0;

  .el-notification__content, .el-notification__title, .el-icon-info {
    color: #fff !important;
  }
}

.drawer_option {
}

#particles-js {
  position: relative;
}
.el-icon-chat-dot-round{
  margin-right: 10px;
  transform: rotateY(180deg);
}
.el-message{
  min-width: 0;
  color: #fff;
  background: #333;
  border-radius: 20px;
  border: 0;
  padding: 15px 30px;
}

//遮罩
.v-modal {
  //background-color: transparent;
}

//.el-drawer 抽屉背景
</style>
