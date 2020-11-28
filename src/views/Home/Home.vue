<template>
    <div class="home">
        <!--      加载动画-->
        <loading v-if="isLoading"></loading>
        <!--   加载动画结束-->

        <!--      头部（包含背景图片，粒子效果，天气模块）-->
        <Header></Header>
        <!--      头部结束-->

        <!--      按钮（功能:操作抽屉）-->
        <el-button icon="el-icon-menu" v-show="btnType"
                   :class="!isLoading?'animate__bounceIn animate__infinite drawer-button':''" @click="changeDrawer">
            Open Menu
        </el-button>
        <!--      按钮结束-->
        <vue-particles
            color="#dedede"
            :particleOpacity="0.7"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="4"
            linesColor="#dedede"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.5"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
        >
        </vue-particles>
        <!--      抽屉-->
        <el-drawer class="drawer_option" :visible.sync="drawer" :direction="direction" :with-header="false" size="18%"
                   :before-close="handleClose">
            <!--          抽屉中的内容-->
            <div class="operation-box">
                <!--                组件-->
                <operation></operation>
            </div>
            <!--        抽屉内容结束-->
        </el-drawer>
    </div>
</template>

<script>
import loading from "@/components/Loading/loading";
import operation from "@/components/Operation/operation";
import Header from "@/components/Header/Header";
import {search} from "@/request/api"

export default {
    name: 'Home',
    data() {
        return {
            drawer: false,
            direction: 'ltr',
            isLoading: true,
            btnType: true,
            timeStateMent: "",
            pageTitleData: ""
        }
    },
    mounted() {
        this.pageINit()
        this.copy()
    },
    methods: {
        //打开抽屉
        changeDrawer() {
            let filter = "filter: blur(5px);transform: scale(1.2);"
            this.drawer = true
            this.btnType = false
            this.$notify.info({
                title: '用户操作',
                message: '用户打开了菜单栏',
                showClose: false,
                customClass: "operation",
                duration: "1000"
            });
            document.styleSheets[0].addRule(".header::before",filter)
        },
        //关闭抽屉
        handleClose(done) {
            let filter = "filter: blur(0);transform: scale(1);"
            done();
            this.btnType = true
            document.styleSheets[0].addRule(".header::before",filter)
        },
        //页面加载延时器以及，弹窗动画
        pageINit() {
            //页面加载的延时器
            setTimeout(() => {
                this.isLoading = false
                //来控制提示语
                this.$message({
                    message: this.timeStateMent,
                    center: true,
                    iconClass: "el-icon-chat-dot-round",
                    duration: 2000
                });
            }, 800)
            //提示信息
            let day = new Date()
            let time = new Date().toLocaleString('chinese', {hour12: false})
            let hr = day.getHours()
            if ((hr >= 0) && (hr <= 4))
                this.timeStateMent = "深夜了，该睡觉了~，注意身体哦..."
            if ((hr >= 4) && (hr < 7))
                this.timeStateMent = "清晨好，起得真早啊..."
            if ((hr >= 7) && (hr < 12))
                this.timeStateMent = "早上好,当前时间:" + time + "又是美好的一天呢"
            if ((hr >= 12) && (hr <= 13))
                this.timeStateMent = "中午好啊，现在是" + time + "是午饭时间喔，"
            if ((hr >= 13) && (hr <= 17))
                this.timeStateMent = "下午好啊，现在是" + time + "外面的太阳猛烈吗?"
            if ((hr >= 18) && (hr <= 20))
                this.timeStateMent = "现在是晚上" + time + "，该吃晚饭了吧"
            if ((hr >= 21) && (hr <= 23))
                this.timeStateMent = "夜深了，这个点该做些什么呢"
        },
        //网易测试多接口
        getSearch() {
            search().then(res => {
                console.log(res)
            })
        },
        //复制提示
        copy(){
            let that = this
            document.body.oncopy=function(){
                that.$message({
                    message: "复制成功",
                    center: true,
                    iconClass: "el-icon-chat-dot-round",
                    duration: 2000
                });
            }
        }

    },
    components: {
        loading,
        operation,
        Header
    }
}
</script>

<style lang="scss">
.home {
    position: relative;

    .drawer-button {
        position: absolute;
        top: 20px;
        left: 20px;
        background-color: transparent;
        color: #fff;
        transition: 0.3s;
        z-index: 2;

        &:hover {
            background-color: rgba(0, 0, 0, .3);
        }

    }
}

.operation {
    background: url("../../assets/images/bgi1.jpg");
    z-index: 9999 !important;
    border: 0;
}
.operation-box{
}

.el-button:focus {
    color: #fff !important;
    border: 1px solid #DCDFE6 !important;
    background-color: transparent !important;
}

.el-notification__content, .el-notification__title, .el-icon-info {
    color: #fff !important;
}


.drawer_option {
    outline: none;
}



.el-icon-chat-dot-round {
    margin-right: 10px;
    transform: rotateY(180deg);
}

.el-message {
    min-width: 0;
    color: #fff;
    background: #333 !important;
    border-radius: 20px;
    border: 0 !important;
    padding: 15px 30px;
}

//遮罩
.v-modal {
}

//抽屉背景
.el-drawer__body{
    background-color: #00000050;
}
.el-drawer{
    background-color: transparent!important;
}
#particles-js{
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    z-index: 0;
}
</style>
