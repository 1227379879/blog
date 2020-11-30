<template>
    <header class="header">
        <page-title></page-title>
        <el-tooltip class="item" effect="dark" content="定位地图" placement="left">
            <Location></Location>
        </el-tooltip>
    </header>
</template>

<script>
import Location from "@/components/Location/Location"
import pageTitle from "@/components/pageTitle/pageTitle";
export default {
    name: "Header",
    components:{
        Location,
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