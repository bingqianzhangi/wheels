<template>
  <div>
    <ul
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd">
      <li v-for="(item,index) in title" 
      :key="item" 
      :class="current==item?'active':''"
      >{{item}}</li>
    </ul>
    <span class="letter" v-if="isTouch">{{current}}</span>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    props: {
      title: {
        type: Array,
        value: []
      },
      current: {
        type: String,
        value: ''
      }
    },
    data() {
      let isTouch: boolean = false;
      return {
        isTouch
      }
    },
    methods: {
      touchStart(e: Event):void{
        this.isTouch = true;
        this.touchMove(e);
      },
      touchMove(e: Event): void{
        let pageY = e.touches[0].pageY;
        let letterHeight = 0.4*window.innerWidth/750*100;
        let letterOffsetTop = (window.innerHeight-letterHeight*this.title.length)/2;
        let letterIndex = Math.floor((pageY - letterOffsetTop)/letterHeight);
        //处理上边界
        if(letterIndex<0){
          letterIndex = 0;
        }
        //处理下边界
        if(letterIndex>this.title.length-1){
          letterIndex = this.title.length-1;
        }
        this.$emit('update:current',this.title[letterIndex]);
      },
      touchEnd(e: Event): void{
        this.isTouch = false;
        this.$emit('update:current','');
      }
    }
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
    text-align:center;
  }
  li {
    color: #666;
    font-weight: 500;
    font-size: .24rem;
    padding: 0 .1rem;
    width: .4rem;
    height: .4rem;
    line-height: .4rem;
  }
  .active{
    font-size: .36rem;
    // padding-right: .5rem;
  }
  .letter{
    width: 1.5rem;
    height: 1.5rem;
    background: rgba(0,0,0,.6);
    border-radius: .1rem;
    top: 50%;
    left: 50%;
    position: fixed;
    color: #fff;
    font-size: .6rem;
    text-align: center;
    line-height: 1.5rem;
    transform: translate3d(-50%,-50%,0);
  }
</style>
