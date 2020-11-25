<template>
    <transition name="fade">
        <div>
            <div class="loading"></div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "loading"
}
</script>

<style scoped>
.fade-enter,
.fade-leave-active {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.loading {
    position: fixed;
    left: 0;
    top: 0;
    background: url('../../assets/images/loading.gif') center center no-repeat #fff;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
}
</style>