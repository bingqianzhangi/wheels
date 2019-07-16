<template>
  <ul>
    <li v-for="(item) in title" :key="item">{{item}}</li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    props: {
      title: {
        type: Array,
        value: []
      }
    }
  })
</script>


<style lang="scss" scoped>
  ul {
    position: fixed;
    z-index: 101;
    top: 0;
    right: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  li {
    color: #666;
    font-weight: 500;
    padding: .02rem .1rem;
  }
</style>
