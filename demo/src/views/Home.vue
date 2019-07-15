<template>
  <div class="home">
    <p @click="btn">奥迪</p>
    <Mock v-show="isTrue" :List="list" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Mock from "@/components/mock.vue";
import { mapState, mapActions, mapMutations } from "vuex";
export default Vue.extend({
  name: "home",
  components: {
    Mock
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
      list: state => state.index.list
    })
  },
  methods: {
    ...mapActions({
      Tabs: "index/Get"
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
  created() {},
  mounted() {}
});
</script>
