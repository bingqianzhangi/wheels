<template>
  <div>
    <div class="swiper-container banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in imgList" :key='index' >
            <img :src="item" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Swiper from "swiper";
import 'swiper/dist/css/swiper.css'
export default Vue.extend({
  props: ["imgList"],
  created(){
      new Swiper('.banner')
  }
});
</script>


<style lang="scss" scoped>
</style>
