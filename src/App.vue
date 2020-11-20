<template>
  <div id="app">
    <div class="page-container">
<!--      <navbar></navbar>-->
      <div class="page-view">
      <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
// import navbar from "@/components/navbar";
  export default {
    components:{
      // navbar
    }
  }
</script>
<style lang="scss">
 html,body{
   width: 100%;
   background-color: #1B1B1B;
}
  #app{
    color: #fff;
  }
  .page-container{
    position: relative;
  }
  .page-view{
    margin-top: 110px;
  }
</style>
