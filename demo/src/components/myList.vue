<template>
  <div class="list">
    <div ref="listScroll">
      <div v-for="(item, index) in list" :key="index">
        <p>{{index}}</p>
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
    </div>
    <Mock class="mock" v-show="isTrue" :List="Lists" />
  </div>
</template>

<script lang="ts">
import BSCroll from "better-scroll";
import Vue from "vue";
import Mock from "./mock.vue";
import { mapState, mapActions, mapMutations } from "vuex";
export default Vue.extend({
  components: {
    Mock
  },
  data() {
    let isTrue: boolean = false;
    // let Lists: number[] = [];
    let MasterID: number = 97;
    let phone: string = "_1563176334484";
    return {
      cont: 0,
      scrollY: 0,
      scrollList: [],
      scrollHeightArr: [],
      isTrue,
      // Lists,
      MasterID,
      phone
    };
  },
  props: {
    list: {
      type: Object,
      value: {},
      list: Array
    }
  },
  created() {
    this.$nextTick(() => {
      this.bscroll();
      this.scrollHeight();
    });
    this.$bus.$on("scrollL", (item, ind) => {
      let scrollDiv = this.$refs.listScroll.children;
      this.rightSCroll.scrollToElement(scrollDiv[ind], 100);
    });
    // this.$bus.$on('bscroll',(tit)=>{
    //   let scrollDiv=this.$refs.listScroll.children;
    //   this.rightSCroll.scrollToElement(scrollDiv[ind],100);
    // })
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
    },
    bscroll() {
      this.rightSCroll = new BSCroll(".list", {
        probeType: 3
      });
      this.rightSCroll.on("scroll", res => {
        this.cont = this.currentIndex;
        this.scrollY = Math.abs(res.y);
      });
    },
    scrollHeight() {
      let scrollDiv = this.$refs.listScroll.children;
      let height = 0;
      this.scrollHeightArr.push(height);
      for (let i = 0; i < scrollDiv.length; i++) {
        let item = scrollDiv[i];
        height += item.clientHeight;
        this.scrollHeightArr.push(height);
      }
    }
  },
  computed: {
    ...mapState({
      Lists: state => state.index.list
    }),
    currentIndex() {
      for (let j = 0; j < this.scrollHeightArr.length; j++) {
        let height1 = this.scrollHeightArr[j];
        let height2 = this.scrollHeightArr[j + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return j;
        }
      }
      return 0;
    }
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
