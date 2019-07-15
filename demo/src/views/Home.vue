<template>
  <div class="home">
    <myList :list="listArr" />
    <sideBar :title="titleArr" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions, mapMutations } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import myList from "@/components/myList.vue"; // @ is an alias to /src
import sideBar from "@/components/sideBar.vue"; // @ is an alias to /src
export default Vue.extend({
  name: "home",
  components: {
    HelloWorld,
    myList,
    sideBar
  },
  data() {
    let isTrue: boolean = false;
    // let Lists: number[] = [];
    let MasterID: number = 97;
    let phone: string = "_1563176334484";
    return {
      isTrue,
      // Lists,
      MasterID,
      phone
    };
  },
  computed: {
    ...mapState({
      list: state => state.index.list,
      titleArr: state => state.index.titleArr,
      listArr: state => state.index.listArr
    })
  },
  methods: {
    ...mapActions({
      Tabs: "index/Get",
      getList: "index/getList"
    }),
    btn(): any {
      this.isTrue = !this.isTrue;
      console.log(this.isTrue);
      this.Tabs({
        MasterID: this.MasterID,
        phone: this.phone
      });
    }
  },
  mounted() {
    this.getList();
  }
});
</script>
