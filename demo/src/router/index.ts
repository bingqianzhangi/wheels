import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// const routes = [
  // {
  //   path: '/',
  //   name: "home",
  //   meta: { "title": "首页" },
  //   component: Home
  // }
// ];

const router = new VueRouter({
  mode: 'hash', //默认
  // routes
});

export default router;