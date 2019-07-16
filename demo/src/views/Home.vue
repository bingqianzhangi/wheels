<template>
  <div class="home">
    <myList :list="brandList"/> 
    <sideBar :title="letterList"/> 
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapActions, mapState} from 'vuex';
import myList from '@/components/myList.vue'; // @ is an alias to /src
import sideBar from '@/components/sideBar.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    myList,
    sideBar
  },
  computed: {
    ...mapState({
      letterList: (state:any)=>state.home.letterList,
      brandList: (state:any)=>state.home.brandList
    })
  },
  methods: {
    ...mapActions({
      getList: 'home/getList'
    })
  },
  created(){
    this.getList();
  }
});
</script>

<style lang="scss" scoped>
@import '../scss/global.scss';
.home{
  background-color: $page-background-color;
  height: 100%;
}
</style>

