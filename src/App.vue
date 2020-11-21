<template>
  <div id="app">
    <div class="page-container">
      <div class="page-view">
      <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    components:{
    }
  }
  
</script>
<style lang="scss">
 html,body{
   width: 100%;
}
 ::-webkit-scrollbar {
   width: 0;
   height: 0;
   color: transparent;
 }
</style>
