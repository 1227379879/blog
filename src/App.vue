<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>
<script>
import navbar from "@/components/navbar";
  export default {
    components:{
      navbar
    }
  }
</script>
<style lang="scss">

</style>
