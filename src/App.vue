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
 ::selection {
     color: #fff;
     background: #088;
 }
 #waifu{
     z-index: 3!important;
 }
 #waifu-toggle{
   z-index: 5;
 }
</style>
