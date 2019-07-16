<template>
  <div class="home">
    <div class="type" ref="listType">
      <myList :list="listArr" />
    </div>
    <sideBar :title="titleArr" @handleClick="style" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BSCroll from 'better-scroll';
import { mapActions, mapState } from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import myList from '@/components/myList.vue'; // @ is an alias to /src
import sideBar from '@/components/sideBar.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    HelloWorld,
    myList,
    sideBar
  },
  computed: {
    ...mapState({
      titleArr:state=>state.index.titleArr,
      listArr:state=>state.index.listArr
    })
  },
  methods: {
    ...mapActions({
      getList:"index/getList"
    }),
    bscroll(){
      this.listType=new BSCroll('.type',{
        probeType:3
      })
      this.listType.on('scroll',(res)=>{
        console.log(res)
        this.cont=this.currentIndex;
        this.scrollY=Math.abs(res.y);         
      })
    },
    style(ind){
      console.log(ind)
      let scrollDiv=this.$refs.listType.children;
      this.listType.scrollToElement(scrollDiv[ind],100);
    },
    // scrollHeight(){
    //   let scrollDiv=this.$refs.listType.children;
    //   let height=0;
    //   this.scrollHeightArr.push(height);
    //   for(let i=0;i<scrollDiv.length;i++){
    //     let item=scrollDiv[i];
    //     height+=item.clientHeight;
    //     this.scrollHeightArr.push(height);
    //   } 
    // }
  },
  created() {
    this.getList();
    this.$nextTick(()=>{
      this.bscroll();
      // this.scrollHeight();
            // console.log(this.currentIndex);
    })
  },
  // computed:{
  //     currentIndex(){
  //         for(let j=0;j<this.scrollHeightArr.length;j++){
  //             let height1=this.scrollHeightArr[j];
  //             let height2=this.scrollHeightArr[j+1];
  //             if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)){
  //                 return j;
  //             }
  //         }
  //         return 0;
  //     }
  // }
});
</script>