<template>
  <div>
    <div class="tit" v-show='ather'>
      <p>
        <span>颜色</span>
      </p>
      <p>
        <span>车款</span>
      </p>
    </div>
    <div class="box">
      <ul v-show='ather' class="img_def" v-for="(item,index) in Lists" :key="index" @click="btn(item.Id)">
        <li v-for="(i,v) in item.List" :key="v">
          <img :src="i.Url" alt />
        </li>
        <div>
          <p>{{item.Name}}</p>
          <p>{{item.Count}}张</p>
        </div>
      </ul>
      <div class='flogbox' >
        <li class='jupimg' v-for="(i,vs) in jumpimgList" :key="vs+10">
          <img :src="i" alt />
        </li>
      </div>
    </div>

    <ImgMock  :imgList='jumpimgList' />

  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapActions, mapState } from "vuex";
import ImgMock from '@/components/ImgMock.vue'
export default Vue.extend({
  components:{
    ImgMock
  },
  data() {
    let phone: string = "_1563235046613";
    // Page=1&PageSize=30&_1563368605799
    let Page: number = 1;
    let PageSize: number = 30;
    return {
      phone,
      Page,
      PageSize,
      ather:true
    };
  },
  computed: {
    ...mapState({
      Lists: (state: any) => state.img.list,
      urls: (state: any) => state.img.url,
      jumpimgList: (state: any) => state.img.imgList
    })
  },
  methods: {
    ...mapActions({
      Tabs: "img/GetImgs",
      Jump: "img/JumpImgs"
    }),
    btn(ImageID: number) {
      this.ather=false;
      let id = this.$route.query.SerialID;
      console.log(id);
      this.Jump({
        SerialID: id,
        ImageID:ImageID,
        Page:this.Page,
        PageSize:this.PageSize,
        phone: this.phone
      });
    }
  },
  created() {
    let id = this.$route.query.SerialID;
    this.Tabs({
      SerialID: id,
      phone: this.phone
    });
    // SerialID=2593&ImageID=6&Page=1&PageSize=30&_1563368605799

    // console.log(this.urls);
  }
});
</script>

<style lang="scss" scoped>
.tit {
  position: fixed;
  background: #fff;
  top: 0;
  width: 100%;
  height: 0.8rem;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 99;
  display: flex;
  p {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    -webkit-box-flex: 1;
    flex: 1;
    text-align: center;
    box-sizing: border-box;
    color: #454545;
    display: inline-block;
    span {
      max-width: 2.6rem;
      display: inline-block;
      vertical-align: middle;
      line-height: 1.25;
      font-size: 0.28rem;
    }
  }
  p:after {
    content: "";
    display: inline-block;
    padding-top: 0.16rem;
    padding-right: 0.16rem;
    border-top: 2px solid #ccc;
    border-right: 2px solid #ccc;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    margin-left: 0.2rem;
    vertical-align: 5%;
  }
}

.img_def {
  overflow: hidden;
  position: relative;
  background: #fff;
  top: 0.98rem;
  bottom: 0;
  overflow-y: scroll;
  // border-bottom: 0.4rem solid #f4f4f4;
  li {
    position: relative;
    float: left;
    margin-bottom: 0.06rem;
    width: 2.46rem;
    height: 2.46rem;
    padding: 0;
    img {
      width: 100%;
      height: 100%;
      background-size: cover;
    }
  }
  div {
    position: absolute;
    top: 0;
    width: 2.46rem;
    height: 2.46rem;
    text-align: center;
    background: rgba(56, 90, 130, 0.5);
    p {
      color: #fff;
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
    p:first-child {
      font-size: 0.28rem;
      margin-top: 0.8rem;
    }
    p:nth-child(2) {
      font-size: 0.26rem;
    }
  }
}
.flogbox{
  width:100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.jupimg{
  width: 2.46rem;
  height: 2.46rem;
  list-style: none;  
  margin-bottom: 0.06rem; 
    img {
      width: 100%;
      height: 100%;
      background-size: cover;
  }
}
</style>


