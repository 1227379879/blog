<template>
  <div class="loading"></div>
</template>

<script>
export default {
name: "loading"
}
</script>

<style scoped>
.loading {
  position: fixed;
  left: 0;
  top: 0;
  background: url('../assets/images/loading.gif') center center no-repeat #fff;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
}
</style>