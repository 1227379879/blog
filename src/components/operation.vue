<template>
  <div class="drawer_side_panel">
    <el-upload
        ref="upload"
        action="alert"
        :auto-upload="false"
        :file-list="uploadFiles"
        :on-change="loadJsonFromFile"
        name="file"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: "operation",
  data() {
    return {
      uploadFiles: []
    }
  },
  mounted() {
  },
  methods: {
    loadJsonFromFile(file, fileList) {
      this.uploadFiles = fileList
      this.uploadFiles.forEach(item=>{
        let file = item.raw;
        let reader = new FileReader()
        reader.readAsDataURL(file);

        reader.onload = (e) => {
          // 读取文件内容
          console.log("e",e);
          const fileString = e.target.result
          // 接下来可对文件内容进行处理
          document.styleSheets[0].addRule(".header::before","background:url("+fileString+")!important")
        }
      })
    },
    submit() {

    }
  }
}
</script>

<style lang="scss" scoped>
.drawer_side_panel {
  padding: 20px;
  height: 100vh;
  background: url("http://image.namedq.com/uploads/20191231/15/1577775642-BtiqPWvdGD.jpeg") no-repeat;
  background-size: 100% 100%;
}
</style>