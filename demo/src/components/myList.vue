<template>
  <div class="list" ref="scrollEle">
    <div v-for="(item, index) in list" :key="index">
      <p :ref="index">{{index}}</p>
      <ul>
        <li
          v-for="(value) in item"
          :key="value.MasterID"
          class="border-bottom"
          @click="btn(value.MasterID)"
        >
          <img :src="value.CoverPhoto" :alt="value.Name" />
          <span>{{value.Name}}</span>
        </li>
      </ul>
    </div>
    <Mock class="mock" v-show="isTrue" :List="Lists" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Mock from "./mock.vue";
import { mapState, mapActions, mapMutations } from "vuex";
export default Vue.extend({
  components: {
    Mock
  },
  data() {
    let isTrue: boolean = false;
    let MasterID: number = 97;
    let phone: string = "_1563176334484";
    return {
      isTrue,
      MasterID,
      phone
    };
  },
  props: {
    list: {
      type: Object,
      value: {},
      list: Array
    },
    current: {
      type: String,
      value: ''
    }
  },
  watch: {
    current(val){
      if(val){
        this.$refs.scrollEle.scrollTop = this.$refs[val][0].offsetTop;
      }
    }
  },
  methods: {
    ...mapActions({
      Tabs: "index/Get"
    }),
    btn(id: number): any {
      this.isTrue = true;
      console.log(this.isTrue);
      this.Tabs({
        MasterID: id,
        phone: this.phone
      });
    }
  },
  computed: {
    ...mapState({
      Lists: state => state.index.list
    })
  }
});
</script>


<style lang="scss" scoped>
@import '../scss/global.scss';
.list{
  height: 100%;
  overflow-y: scroll;
  >div{
    p{
      font-size: .28rem;
      line-height: .4rem;
      background: #f4f4f4;
      padding-left: .3rem;
      color: #aaa;
    }
    ul{
      margin: 0 .3rem;
      background: #fff;
      li{
        height: $brand-height; 
        line-height: $brand-height;
        display: flex;
        align-items: center;
        img{
          height: .8rem;
        }
        span{
          font-size: .32rem;
          margin-left: .4rem;
        }
        &:last-child:after{
          display: none;
        }
      }
    }
  }
}
.mock{
  z-index:9999
}
</style>
