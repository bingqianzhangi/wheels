<template>
    <div class="list">
        <div v-for="(item,index) in list" :key="index">
            <p>{{item.code}}</p>
            <ul v-for="(v,i) in item.Spelling" :key="v.MasterID">
                <li>
                  <img :src="v.CoverPhoto" alt="">
                  <span>{{v.Name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'myList',
  props: {
    list: Array
  }
});
</script>

<style lang="scss">
.list{
  width: 100%;
  height: 100%;
  overflow: hidden;
  >div{
    width: 100%;
    p{
      width: 100%;
      font-size: .28rem;
      line-height: .4rem;
      background: #f4f4f4;
      padding-left: .3rem;
      color: #aaa;
    }
    ul{
      margin: 0 .3rem;
      li{
        height: 1rem;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        display: flex;
        align-items: center;
        img{
          height: .8rem;
        }
        span{
          font-size: .32rem;
          margin-left: .4rem;
        }
      }
    }
  }
}
</style>