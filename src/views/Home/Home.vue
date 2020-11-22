<template>
  <div class="home">
    <transition name="fade">
      <div>
        <loading v-if="isLoading"></loading>
      </div>
    </transition>
    <header class="header">
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
    <el-button icon="el-icon-menu" v-show="btnType" :class="!isLoading?'animate__bounceIn animate__infinite drawer-button':''" @click="changeDrawer">
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
import navbar from "@/components/navbar";
import loading from "@/components/loading";
import operation from "@/components/operation";
export default {
  name: 'Home',
  data(){
    return{
      drawer: false,
      direction: 'ltr',
      isLoading:true,
      btnType:true,
      header:null
    }
  },
  mounted() {
    this.header = this.$refs.header
    //页面加载的延时器
    setTimeout(()=>{
      this.isLoading = false
    },800)
  },
  methods:{
    changeDrawer(){
      this.drawer = true
      this.btnType = false
      this.$notify.info({
        title: '用户操作',
        message: '用户打开了菜单栏',
        showClose: false,
        customClass:"operation",
        duration:"2000"
      });
    },
    handleClose(done) {
      done();
      this.btnType = true
    }
  },
  computed:{
  },
  components: {
    navbar,
    loading,
    operation
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
  .home{
    position: relative;

    .drawer-button{
      position: absolute;
      top: 20px;
      left: 20px;
      background-color: transparent;
      color: #fff;
      transition: 0.3s;
      &:hover{
        background-color: rgba(0,0,0,.3);
      }
    }
  }
  .header{
    overflow: hidden;
    height: 100vh;
    position: relative;
  }
  .header::before{
    content: "";
    height: 100%;
    position: absolute;
    background: url(../../assets/images/bgi3.jpg) no-repeat 50%;
    width: 100%;
    top: 0;
    background-size: cover!important;
  }
  .operation{
    background:url("../../assets/images/bgi1.jpg");
    z-index: 9999!important;
    border: 0;

    .el-notification__content , .el-notification__title ,.el-icon-info{
      color: #fff!important;
    }
  }
  .drawer_option{
  }
  #particles-js{
    position: relative;
  }
  //遮罩
  .v-modal{
    //background-color: transparent;
  }
  //.el-drawer 抽屉背景
</style>
