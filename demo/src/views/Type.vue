<template>
  <div class="wrap">
    <div class="c-type">
      <span>2019</span>
    </div>
    <div class="l-type" v-for="(item,index) in Lists.list" :key="index">
      <p class="tip">{{item.exhaust_str}}/{{item.max_power_str}} {{item.inhale_type}}</p>
      <ul>
        <li>
          <p><span>{{item.market_attribute.year}}款 {{item.car_name}}</span><span>{{item.market_attribute.dealer_price_min}}</span></p>
          <p><span>{{item.horse_power}}马力{{item.gear_num}}档{{item.trans_type}}</span><span>指导价 {{item.market_attribute.dealer_price_max}}</span></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapActions, mapState} from 'vuex';

export default Vue.extend({
  name: 'type',
  data() {
    return {
    }
  },
  components: {
  },
  computed: {
    ...mapState({
      Lists: (state: any) => state.list.list
    }),
  },
  methods: {
    
  },
  created(){
  }
});
</script>

<style lang="scss" scoped>
@import '../scss/global.scss';
  .wrap{
    position: absolute;
    top: 0;
    z-index: 101;
    background: #f4f4f4;
    height: 100%;
    width: 100%;
    -webkit-animation: c .2s ease forwards;
    animation: c .2s ease forwards;
  }
  .c-type{
    margin-top: .15rem;
    padding-left: .2rem;
    font-size: .3rem;
    line-height: .76rem;
    height: .76rem;
    background: #fff;
    overflow-x: scroll;
    span {
      padding-right: .42rem;
    }
    .active {
      color: #00afff;
    }
  }
  .l-type{
    background: #fff;
    li{
      margin: 0 .2rem;
      padding: .28rem .06rem;
      border-bottom: 1px solid #eee;
      box-sizing: border-box;
      height: 1.25rem;
      line-height: 1;
      p:first-child {
        font-size: .3rem;
        span:nth-child(1) {
          width: 5rem;
          display: inline-block;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        span:nth-child(2) {
          float: right;
          color: red;
          font-size: .26rem;
        }
      }
      p:nth-child(2) {
        padding-top: .16rem;
        font-size: .24rem;
        span:first-child {
          color: #b3b3b3;
        }
        span:nth-child(2) {
          color: #818181;
          float: right;
        }
      }
    }
  }
  .tip{
    height: .5rem;
    line-height: .5rem;
    padding: 0 .2rem;
    font-size: .24rem;
    color: #666;
    background: #eee;
  }
</style>