<template>
  <div class="wrap">
    <header>
      <p>可向多个商家咨询最低价，商家及时回复</p>
      <img src="http://h5.chelun.com/2017/official/img/icon-help.png" alt="">
    </header>
    <div class="content">
      <dl @click="selectType(carDetailList.details.car_id)">
        <dt><img :src="carDetailList.details.serial.Picture" alt=""></dt>
        <dd>
          <p>{{carDetailList.details.serial.AliasName}}</p>
          <p><span>{{carDetailList.details.market_attribute.year}}款 </span><span>{{carDetailList.details.car_name}}</span></p>
        </dd>
      </dl>
      <div class="self-info">
        <p class="tip">个人信息</p>
        <ul>
          <li>
            <span>姓名</span>
            <input type="text" placeholder="输入你的真实中文姓名" maxlength="4" value="咻咻咻">
          </li>
          <li>
            <span>手机</span>
            <input type="tel" placeholder="输入你的真实手机号码" maxlength="11" value="13245345463">
          </li>
          <li @click="select">
            <span>城市</span>
            <span>{{city}}</span>
          </li>
        </ul>
        <div class="askPrice">
          <button>询最低价</button>
        </div>
      </div>
      <div class="dealer-info">
        <p class="tip">选择报价经销商</p>
        <ul>
          <li class="" v-for="item in carDetailList.list" :key="item.dealerId">
            <p><span>{{item.dealerShortName}}</span><span>{{parseInt(item.promotePrice)}}万</span></p>
            <p><span>{{item.address}}</span><span>{{item.saleRange}}</span></p>
          </li>
        </ul>
      </div>
    </div>
    <div :class="['select-city',{'active':show}]">
      <div class="province">
        <div class="location">
          <p class="same">自动定位</p>
          <p>北京</p>
        </div>
        <div class="list">
          <p class="same">省市</p>
          <cityList />
        </div>
      </div> 
      <div :class="['city',{'current':hide}]" @click="disappear">
        <ul>
          <li v-for="item in cityDetail" :key="item.CityID" @click="back(item.CityID,item.CityName)">{{item.CityName}}</li>
        </ul>
      </div>   
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapActions, mapState} from 'vuex';
import cityList from '@/components/cityList.vue'; 

export default Vue.extend({
  name: 'ask',
  data() {
    let show: Object = false;
    let hide: Object = false;
    let city: String = '北京';
    return {
      show,
      hide,
      city
    }
  },
  components: {
    cityList
  },
  computed: {
    ...mapState({
      carDetailList: (state:Object)=>state.carDetail.carDetailList,
      cityDetail: (state:Array<Object>)=>state.carDetail.cityDetail
    })
  },
  methods: {
    ...mapActions({
      getAllCity: "carDetail/getAllCity",
      getCarDetail: "carDetail/getCarDetail",
    }),
    select(){
      this.show = true;
      this.getAllCity();
    },
    disappear(){
      this.hide = false;
    },
    back(id: Number,citys: String){
      this.getCarDetail({
        carId:this.carDetailList.details.car_id,
        cityId:id
      })
      this.show = false;
      this.city = citys;
    },
    selectType(id: String){
      this.$router.push({ path: "/type", query: { curId: id } })
    }
  },
  created(){
    this.$bus.$on('cityList',()=>{
      this.hide = true;
    })
  }
});
</script>

<style lang="scss" scoped>
@import '../scss/global.scss';
  .wrap{
    width: 100%;
    height: 100%;
  }
  header{
    height: .6rem;
    line-height: .6rem;
    width: 100%;
    background: #79cd92;
    text-align: center;
    z-index: 99;
    p{
      color: #fff;
      font-size: .3rem;
      display: inline-block;
    }
    img{
      width: .3rem;
      margin-left: .1rem;
      vertical-align: -9%;
    }
  }
  .content{
    -webkit-box-flex: 1;
    flex: 1;
    width: 100%;
    height: auto;
    background: #f4f4f4;
    overflow-y: scroll;
    dl{
      background: #fff;
      padding: .32rem .18rem .24rem;
      position: relative;
      height: 2rem;
      box-sizing: border-box;
      display: flex;
      dt{
        img {
          width: 2.3rem;
          height: 1.41rem;
          border: 1px solid #eee;
          box-sizing: border-box;
          border-radius: 5px;
        }
      }
      dd{
        margin-left: .2rem;
        width: 4.3rem;
        p:first-child{
          font-size: .36rem;
          line-height: 1;
        }
        p:nth-child(2){
          margin-top: .26rem;
          font-size: .32rem;
          line-height: 1.2;
          color: #333;
        }
      }
    }
    dl:before{
      content: "";
      display: inline-block;
      padding-top: .16rem;
      padding-right: .16rem;
      border-top: 2px solid #ccc;
      border-right: 2px solid #ccc;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      right: .26rem;
      top: .9rem;
    }
    .self-info{
      ul{
        background: #fff;
        padding: 0 .2rem;
        li {
          font-size: .32rem;
          height: .88rem;
          line-height: .88rem;
          border-bottom: 1px solid #eee;
          box-sizing: border-box;
          color: #000;
          input {
            font-size: .32rem;
            padding-right: .2rem;
            width: 88%;
            text-align: right;
            box-sizing: border-box;
            color: #555;
            outline: none;
            -webkit-appearance: none;
            border: none;
          }
          span:nth-child(2) {
            display: inline-block;
            width: 88%;
            color: #555;
            text-align: right;
            box-sizing: border-box;
          }
          span:nth-child(2):after {
            content: "";
            display: inline-block;
            padding-top: .16rem;
            padding-right: .16rem;
            border-top: 1px solid silver;
            border-right: 1px solid silver;
            transform: rotate(45deg);
          }
        }
      }
    }
    .askPrice{
      background: #fff;
      text-align: center;
      padding-top: .3rem;
      padding-bottom: .28rem;
      button {
        font-size: .32rem;
        color: #fff;
        width: 80%;
        background: #3aacff;
        height: .7rem;
        border-radius: .1rem;
        outline: none;
        -webkit-appearance: none;
        border: none;
      }
    }
    .dealer-info{
      ul {
        background: #fff;
        padding: 0 .18rem;
        li {
          position: relative;
          padding: .26rem 0 .26rem .54rem;
          border-bottom: 1px solid #eee;
          box-sizing: border-box;
          height: 1.65rem;
          p:first-child {
            font-size: .3rem;
            span:last-child {
              font-size: .24rem;
              float: right;
              color: red;
            }
          }
          p:nth-child(2) {
            margin-top: .2rem;
            font-size: .24rem;
            color: #a2a2a2;
            line-height: .3rem;
            span:first-child {
              display: inline-block;
              max-width: 4.6rem;
            }
            span:nth-child(2) {
              float: right;
            }
          }
        }
        li:before {
          content: "";
          display: inline-block;
          width: .32rem;
          height: .32rem;
          border-radius: 50%;
          border: 2px solid #ccc;
          box-sizing: border-box;
          position: absolute;
          left: .05rem;
          top: 50%;
          -webkit-transform: translate3d(0,-50%,0);
          transform: translate3d(0,-50%,0);
        }
        .active:before {
          background: #3aacff;
          border: none;
        }
        .active:after {
          content: "";
          display: inline-block;
          padding-top: .17rem;
          padding-right: .1rem;
          border: 2px solid #fff;
          -webkit-transform: rotate(40deg) translate3d(0,-50%,0);
          transform: rotate(40deg) translate3d(0,-50%,0);
          position: absolute;
          left: .07rem;
          border-left: none;
          border-top: none;
          top: 47%;
        }
      }
    }
  }
  .tip{
    padding: 0 .2rem;
    height: .6rem;
    line-height: .6rem;
    font-size: .24rem;
    color: #666;
    background: #eee;
  }
  .select-city{
    position: fixed;
    display: none;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: #fff;
    transition: transform .2s ease,-webkit-transform .2s ease;
    .province{
      height: 100%;
      overflow-y: scroll;
      .location{
        p:nth-child(2) {
          padding-left: .4rem;
          font-size: .28rem;
          height: .8rem;
          line-height: .8rem;
          background: #fff;
        }
      }
    }
    .city {
      position: fixed;
      display: none;
      width: 100%;
      height: 100%;
      z-index: 101;
      background: rgba(0,0,0,.6);
      ul {
        height: 100%;
        overflow-y: scroll;
        background: #fff;
        transition: transform .2s ease,-webkit-transform .2s ease;
        li {
          padding-left: .3rem;
          font-size: .28rem;
          height: .8rem;
          line-height: .8rem;
          border-bottom: 1px solid #eee;
          box-sizing: border-box;
          margin-left: .1rem;
        }
      }
    }
    .city.current {
      visibility: visible;
      top: 0;
      display: block;
      ul{
        transform: translate3d(30%,0,0);
      }
    }
  }
  .active{
    top: 0;
    display: block;
  }
  .same{
    height: .4rem;
    line-height: .4rem;
    font-size: .24rem;
    padding-left: .2rem;
    background: #f4f4f4;
  }
</style>