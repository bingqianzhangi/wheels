<template>
  <transition name="fade" mode="in-out">
    <keep-alive include="about,ask,home,img,type" exclude="">
      <router-view/>
    </keep-alive>
  </transition>
</template>

<style lang="scss" scoped>
  .fade-enter-active {
    transition: all .3s ease;
  }
  .fade-leave-active {
    transition: all .3s ease;
  }
  .fade-enter
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateY(100%);
    opacity: 0;
  }
  .fade-leave-to{
    transform: translateX(-100%);
    opacity: 0;
  }
  .fade-enter-to, .fade-leave{
    transform: translateY(0);
    opacity: 1;
    background: red;
  }
</style>