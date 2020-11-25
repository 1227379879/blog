<template>
  <div class="weather-box">

  </div>
</template>

<script>
  export default {
    name:"weather",
    methods:{

    }
  }
</script>

<style lang="scss" scoped>
  .weather-box{
    position: absolute;
    width: 300px;
    height: 200px;
    background-color: #fff;
    top: 10px;
    right: 10px;
    border-radius: 20px;
    opacity: 0.2;
    transition: 0.3s;
    z-index: 2;
  }
  .weather-box:hover{
    box-shadow: 0 0 5px 2px #fff;
    opacity: 0.5;
  }
</style>