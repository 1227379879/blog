<template>
  <div id="app">
    <div class="page-container">
      <div class="page-view">
<!--          <vue-particles-->
<!--              color="#dedede"-->
<!--              :particleOpacity="0.7"-->
<!--              :particlesNumber="80"-->
<!--              shapeType="circle"-->
<!--              :particleSize="4"-->
<!--              linesColor="#dedede"-->
<!--              :linesWidth="1"-->
<!--              :lineLinked="true"-->
<!--              :lineOpacity="0.4"-->
<!--              :linesDistance="150"-->
<!--              :moveSpeed="3"-->
<!--              :hoverEffect="true"-->
<!--              hoverMode="grab"-->
<!--              :clickEffect="true"-->
<!--              clickMode="push"-->
<!--          >-->
<!--          </vue-particles>-->
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

</style>
