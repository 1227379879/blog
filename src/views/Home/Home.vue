<template>
  <div class="home">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from "@/components/navbar";

export default {
  name: 'Home',
  data(){
    return{
      value:0
    }
  },
  mounted() {
  },
  components: {
    navbar
  }
}
</script>
