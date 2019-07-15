<template>
  <div class="home">
    <myList :list="listArr" />
    <sideBar :title="titleArr" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
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
    })
  },
  mounted() {
    this.getList()
  }
});
</script>
