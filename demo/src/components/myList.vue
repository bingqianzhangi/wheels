<template>
    <div class="list">
        <ul v-for="(item, index) in list" :key="index">
            <p>{{index}}</p>
            <li v-for="(value) in item" :key="value.MasterID">
                <img :src="value.CoverPhoto" :alt="value.Name">
                <span>{{value.Name}}</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        list: {
            type: Object,
            value: {}
        }
    }
})
</script>


<style lang="scss" scoped>
  .list{
    width: 100%;
    overflow: hidden;
    ul{
      p{
        font-size: .28rem;
        line-height: .4rem;
        background: #f4f4f4;
        padding-left: .3rem;
        color: #aaa;
      }
      li{
        height: 1rem;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
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
</style>
