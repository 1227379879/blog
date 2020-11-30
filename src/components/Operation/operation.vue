<template>
    <main>
        <div class="operator-header">
            头部
        </div>
        <div class="drawer_side_panel">
            <div class="option-setting">
                <div class="setting-title">常规设置</div>
                <ul>
                    <li><span>自定义背景图：</span>
                        <el-upload v-show="backgroundFlag" ref="upload" action="alert" :auto-upload="false" :file-list="uploadFiles"
                               :on-change="loadJsonFromFile" name="file">
                        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    </el-upload></li>
                    <li><span>为菜单开启添加毛玻璃效果：</span><el-switch @change="groundGlassChange" v-model="groundGlass" active-color="#13ce66" inactive-color="#000"></el-switch></li>
                    <li><span>粒子效果：</span><el-switch @change="particleChange" v-model="particle" active-color="#13ce66" inactive-color="#000"></el-switch></li>
                    <li><span>「一言语句」：</span><el-switch @change="speechChange" v-model="speech" active-color="#13ce66" inactive-color="#000"></el-switch></li>
                    <li><span>地图：</span><el-switch @change="mapChange" v-model="mapType" active-color="#13ce66" inactive-color="#000"></el-switch></li>
                </ul>
            </div>
        </div>
    </main>
</template>
<script>
import {mapState , mapMutations } from "vuex"
export default {
    name: "operation",
    data() {
        return {
            uploadFiles: [],
            imgUrl: "",
            groundGlass:true,
            particle:false,
            speech:true,
            mapType:false
        }
    },
    mounted() {
        this.settingInit()
    },
    methods: {
        ...mapMutations(['change_groundGlassFlag',"change_particleFlag","change_speechFlag","change_mapTypeFlag"]),
        /**
         * 实现功能：
         * 用户点击按钮上传图片
         * 最后解析替换成页面的背景图
         * 停留功能：TODO：背景图缓存
         * */
        loadJsonFromFile(file, fileList) {
            this.uploadFiles = fileList
            this.uploadFiles.forEach(item => {
                let file = item.raw;
                let reader = new FileReader()
                reader.readAsDataURL(file);
                reader.onload = (e) => {
                    // 读取文件内容
                    const fileString = e.target.result
                    // 接下来可对文件内容进行处理
                    document.styleSheets[0].addRule(".header::before", "background:url(" + fileString + ")!important")
                    this.$refs.upload.clearFiles();
                }
            })
        },
        settingInit(){
            this.groundGlass = this.groundGlassFlag
            this.particle = this.particleFlag
            this.speech = this.speechFlag
            this.mapType = this.mapTypeFlag
        },
        /**毛玻璃*/
        groundGlassChange(e){
            this.change_groundGlassFlag(e)
        },
        /*一言*/
        speechChange(e){
            this.change_speechFlag(e)
        },
        /*粒子*/
        particleChange(e){
            this.change_particleFlag(e)
        },
        /**地图*/
        mapChange(e){
            this.change_mapTypeFlag(e)
        }

    },
    computed:{
        ...mapState(["backgroundFlag","groundGlassFlag","particleFlag","speechFlag","mapTypeFlag"])
    }
}
</script>

<style lang="scss" scoped>
main{
    color: #fff;
    font-size: 16px;
}
.drawer_side_panel {
    padding: 20px;
    background: rgba(255,255,255,0.1);
}
.operator-header{
    height: 400px;
    background-color: #fff;
}
.setting-title {
    font-size: 25px;
    padding-left: 5px;
}
.option-setting{
    padding: 10px;
    background: rgba(255,255,255,0.3);
    border-radius: 12px;

    li{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 10px 0;
        transition:all 0.3s;
        span{
            flex: 1;
            padding-left: 20px;
            display: block;
            text-align: left;
        }
    }
}

</style>