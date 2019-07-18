<template>
  <ul>
    <li v-for="item in cityList" :key="item.CityID" @click="cityDetail(item.CityID)">{{item.CityName}}</li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions, mapMutations } from "vuex";
export default Vue.extend({
  data() {
    let isTrue: boolean = false;
    return {
      isTrue
    };
  },
  methods: {
    ...mapActions({
      getCityDetail:'carDetail/getCityDetail'
    }),
    cityDetail(id){
      this.getCityDetail({
        provinceid:id
      });
      this.$bus.$emit('cityList')
    }
  },
  computed: {
    ...mapState({
      cityList: (state:Array<Object>) => state.carDetail.cityList
    })
  }
});
</script>


<style lang="scss" scoped>
@import '../scss/global.scss';
  ul{
    li {
      padding-left: .3rem;
      font-size: .28rem;
      height: .8rem;
      line-height: .8rem;
      border-bottom: 1px solid #eee;
      box-sizing: border-box;
      margin-left: .1rem;
      position: relative;
    }
    li:after {
      content: "";
      display: inline-block;
      padding-top: .16rem;
      padding-right: .16rem;
      border-top: 1px solid #999;
      border-right: 1px solid #999;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      right: .35rem;
      top: .3rem;
    }
  }
</style>
