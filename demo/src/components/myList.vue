<template>
  <div class="list">
    <div v-for="(item,index) in list" :key="index">
      <p>{{item.code}}</p>
      <ul v-for="(v,i) in item.Spelling" :key="v.MasterID">
        <li @click="btn(v.MasterID)">
          <img :src="v.CoverPhoto" alt />
          <span>{{v.Name}}</span>
        </li>
      </ul>
    </div>
    <Mock v-show="isTrue" :List="Lists" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Mock from "./mock.vue";
import { mapState, mapActions, mapMutations } from "vuex";
export default Vue.extend({
  name: "myList",
  props: {
    list: Array
  },
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
      Lists: state => state.index.list
    })
  },
  methods: {
    ...mapActions({
      Tabs: "index/Get"
    }),
    btn(id): any {
      this.isTrue =true;
      console.log(this.isTrue);
      this.Tabs({
        MasterID: id,
        phone: this.phone
      });
    }
  }
});
</script>

<style lang="scss">
.list {
  width: 100%;
  height: 100%;
  overflow: hidden;
  > div {
    width: 100%;
    p {
      width: 100%;
      font-size: 0.28rem;
      line-height: 0.4rem;
      background: #f4f4f4;
      padding-left: 0.3rem;
      color: #aaa;
    }
    ul {
      margin: 0 0.3rem;
      li {
        height: 1rem;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        display: flex;
        align-items: center;
        img {
          height: 0.8rem;
        }
        span {
          font-size: 0.32rem;
          margin-left: 0.4rem;
        }
      }
    }
  }
}
</style>