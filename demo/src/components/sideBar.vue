<template>
  <ul
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd">
    <li v-for="(item) in title" :key="item">{{item}}</li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    props: {
      title: {
        type: Array,
        value: []
      }
    },
    data() {
      return {
        current:'',
        isTouch:false
      }
    },
    methods: {
      touchStart(e: Event):void{
        this.isTouch = true;
      },
      touchMove(e: Event): void{
        console.log(e)
      },
      touchEnd(e: Event): void{
        this.isTouch = false;
      }
    },
  })
</script>


<style lang="scss" scoped>
  ul {
    position: fixed;
    z-index: 101;
    top: 0;
    right: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  li {
    color: #666;
    font-weight: 500;
    font-size: .24rem;
    padding: .08rem .1rem;
  }
</style>
