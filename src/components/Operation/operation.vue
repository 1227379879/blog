<template>
    <div class="drawer_side_panel" :style='imgUrl !== "已达网站频率限制" ?{"background-image":"url("+imgUrl+")"}:""'>
        <el-upload
            ref="upload"
            action="alert"
            :auto-upload="false"
            :file-list="uploadFiles"
            :on-change="loadJsonFromFile"
            name="file">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        </el-upload>
    </div>
</template>

<script>
import {RandomPic} from "@/request/api";

export default {
    name: "operation",
    data() {
        return {
            uploadFiles: [],
            imgUrl:""
        }
    },
    mounted() {
        this.getRandomPic()
    },
    methods: {
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
        getRandomPic() {
            /**
             * 此接口已达网站限制频率
             * */
            RandomPic({type:"bg",return:"302",device:"mobile"}).then(res => {
                this.imgUrl = res
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.drawer_side_panel {
    padding: 20px;
    height: 100vh;
    background: url("https://mmbiz.qpic.cn/mmbiz_png/FOOQJjWYibvzFZU9iaIA3j6iaTduLtxoMhfjicnxBdHLIK9YOmYDS4lRUmGnC8wUYYb3TNulDJqibibE7JbgNG3TVlsw/640?tp=webp&wxfrom=5&wx_lazy=1&wx_co=1");
    background-repeat:no-repeat;
    background-size: 100% 100%;
    background-position: center 0;
}
</style>