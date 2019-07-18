<template>
  <div class="car">
    <div class="content">
      <div class="img" @click='btn(Lists.SerialID)' >
        <img :src="Lists.CoverPhoto" alt />
        <span>{{Lists.pic_group_count}}张照片</span>
      </div>
      <div class="info">
        <p>
          {{Lists.market_attribute.dealer_price}}
          <span></span>
        </p>
        <p>指导价 {{Lists.market_attribute.official_refer_price}}</p>
        <div class="action">
          <button @click="askPicPrice(Lists.market_attribute.buy_car_detail_url)">询问底价</button>
        </div>
      </div>
      <div class="car_list">
        <div class="c_type">
          <span>全部</span>
          <span>2019</span>
        </div>
        <div class="list" v-for="(item,index) in Lists.list" :key="index">
          <p>{{item.exhaust_str}}{{item.max_power_str}} {{item.inhale_type}}</p>
          <ul>
            <li>
              <p>{{item.market_attribute.year}}款 {{item.car_name}}</p>
              <p>{{item.horse_power}}马力{{item.gear_num}}档{{item.trans_type}}</p>
              <p>
                <span>指导价 {{item.market_attribute.dealer_price_max}}</span>
                <span>{{item.market_attribute.dealer_price_min}}</span>
              </p>
              <button @click="askPrice(item.car_id)">询问低价</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom" @click="askPicPrice(Lists.market_attribute.buy_car_detail_url)">
      <p>询问底价</p>
      <p>本地经销商为你报价</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapState } from "vuex";
export default Vue.extend({
  data() {
    let phone: string = "_1563235046613";
    return {
      phone
    };
  },
  computed: {
    ...mapState({
      Lists: (state: any) => state.list.list
    })
  },
  methods: {
    ...mapActions({
      Tabs: "list/GetList",
      getLocation: "carDetail/getLocation",
      getCarDetail: "carDetail/getCarDetail"
    }),
    askPrice(id:any){
      this.getLocation();
      this.$router.push({path:'/ask'});
      this.getCarDetail({
        carId: id,
        cityId: 201
      })
    },
    btn(id:any){
      this.$router.push({ path: "/img", query: { SerialID: id } })
    },
    askPicPrice(url){
      let id=url.split('?')[1].split('&')[1].split('=')[1];
      this.getLocation();
      this.$router.push({path:'/ask'});
      this.getCarDetail({
        carId: id,
        cityId: 201
      })
    }
  },
  created() {
    let id = this.$route.query.Id;
    this.Tabs({
      SerialID: id,
      phone: this.phone
    });
  }
});
</script>

<style lang="scss" scoped>
.bottom {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 99;
  background: #3aacff;
  height: 1rem;
  color: #fff;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  p {
    display: block;
    margin-block-start: .2em;
    margin-block-end: .2em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  p:first-child {
    font-size: 0.32rem;
    margin-top: 0.12rem;
    font-weight: 500;
  }
  p:nth-child(2) {
    font-size: 0.24rem;
  }
}
.car {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
}
.content {
  height: 100%;
}
.img {
  position: relative;
  height: 3.29rem;
  overflow: hidden;
  img {
    width: 100%;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    position: absolute;
  }
  span {
    position: absolute;
    bottom: 0.3rem;
    right: 0.3rem;
    color: #fff;
    padding: 1px 0.1rem;
    border-radius: 0.2rem;
    background: rgba(0, 0, 0, 0.6);
    font-size: 0.24rem;
  }
}
.info {
  padding: 0.36rem 0.2rem 0.3rem;
  background: #fff;
  position: relative;
  p {
    max-width: 3.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    margin-block-start: 0.2em;
    margin-block-end: 0.5em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  p:first-child {
    font-size: 0.36rem;
    color: red;
    font-weight: 500;
    span {
      font-size: 0.32rem;
      font-weight: 400;
    }
  }
  p:nth-child(2) {
    font-size: 0.26rem;
    color: silver;
  }
  .action {
    padding-top: 0.2rem;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 50%;
    position: absolute;
    right: 0.1rem;
    top: 0.22rem;
    display: flex;
    button {
      width: 100%;
      background: #00afff;
      color: #fff;
      border-radius: 0.1rem;
      font-size: 0.32rem;
      height: 0.7rem;
      border: none;
      box-sizing: border-box;
    }
  }
}
.c_type {
  border-top: 0.15rem solid #f4f4f4;
  padding: 0 0.3rem;
  font-size: 0.32rem;
  height: 0.77rem;
  line-height: 0.77rem;
  background: #fff;
  span {
    padding-right: 0.46rem;
    font-size: 0.32rem;
    line-height: 0.77rem;
  }
}
.car_list {
  overflow-y: scroll;
}
.list {
  
  >p {
    padding: 0 0.2rem;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.26rem;
    color: #999;
    background: #f4f4f4;
  }
  ul {
    background: #fff;
    li {
      p:first-child {
        padding: 0.26rem 0 0.18rem;
        font-size: 0.3rem;
        line-height: 1;
        color: #3d3d3d;
      }
      p:nth-child(2) {
        color: #bdbdbd;
        font-size: 0.26rem;
      }
      p:nth-child(3) {
        text-align: right;
        padding-bottom: 0.1rem;
        font-size: 0.24rem;
        color: #818181;
        span {
          text-align: right;
          padding-bottom: 0.1rem;
          font-size: 0.24rem;
          color: #818181;
        }
        span:nth-child(2) {
          font-size: 0.3rem;
          color: #ff2336;
          margin-left: 0.1rem;
        }
      }
      button {
        border: none;
        border-top: 1px solid #eee;
        width: 110%;
        height: 0.8rem;
        font-size: 0.32rem;
        color: #00afff;
        background: #fff;
        font-weight: 500;
        margin-left: -0.3rem;
      }
    }
  }
}
</style>

