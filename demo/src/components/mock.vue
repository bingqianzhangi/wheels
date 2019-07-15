<template>
  <div class="right">
    <p>{{List.GroupName}}</p>
    <ul v-for="(item,index) in List.GroupList" :key="index">
      <li>
        <img :src="item.CoverPhoto" alt />
        <div>
          <p>{{item.AliasName}}</p>
          <p>{{item.DealerPrice}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["List"],
  data() {
    return {};
  },
  methods: {}
});
</script>

<style lang="scss" scoped>
.right {
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  width: 75%;
  position: fixed;
  top: 0;
  right: 0;
  transition: all 0.2s ease;
  background: #fff;
  z-index: 100;
  height: 100%;
  box-shadow: 0 0 0.5rem #eee;
  > p {
    margin-left: 1px;
    font-size: 0.28rem;
    line-height: 0.48rem;
    background: #f2f2f2;
    padding-left: 0.3rem;
    color: #717171;
  }
  ul {
    margin-left: 0.1rem;
    list-style-type: none;
    li {
      height: 1.4rem;
      box-sizing: border-box;
      border-bottom: 1px solid #ddd;
      display: flex;
      img {
        margin: 0 0.1rem 0 0.2rem;
        width: 1.8rem;
        height: 1.2rem;
      }
      div{
        display: block;
      }
      p {
        display: block;
        margin-block-start: .5em;
        margin-block-end: .5em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
      }
      p:first-child {
        font-size: 0.34rem;
        color: #5f687a;
      }
      p:nth-child(2) {
        margin-top: 0.1rem;
        font-size: 0.28rem;
        color: red;
      }
    }
  }
}
</style>
