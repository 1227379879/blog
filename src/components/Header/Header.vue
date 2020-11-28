<template>
    <header class="header">
        <page-title></page-title>
        <el-tooltip class="item" effect="dark" content="天气" placement="left">
            <weather></weather>
        </el-tooltip>
<!--                  <vue-particles-->
<!--                      color="#dedede"-->
<!--                      :particleOpacity="0.7"-->
<!--                      :particlesNumber="80"-->
<!--                      shapeType="circle"-->
<!--                      :particleSize="4"-->
<!--                      linesColor="#dedede"-->
<!--                      :linesWidth="1"-->
<!--                      :lineLinked="true"-->
<!--                      :lineOpacity="0.5"-->
<!--                      :linesDistance="150"-->
<!--                      :moveSpeed="3"-->
<!--                      :hoverEffect="true"-->
<!--                      hoverMode="grab"-->
<!--                      :clickEffect="true"-->
<!--                      clickMode="push"-->
<!--                  >-->
<!--                  </vue-particles>-->
    </header>
</template>

<script>
import weather from "@/components/Weather/weather"
import pageTitle from "@/components/pageTitle/pageTitle";
export default {
    name: "Header",
    components:{
        weather,
        pageTitle
    }
}
</script>

<style scoped>
.header {
    width: 100%;
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
    transition: 0.5s;
}
#particles-js{
    position: absolute!important;
    top: 0;
}
</style>