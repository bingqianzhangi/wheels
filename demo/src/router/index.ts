import Vue from 'vue'
import Router from 'vue-router'

// 引入路由组件
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Ask from '@/views/Ask.vue'
import Img from '@/views/Img.vue'
import Type from '@/views/Type.vue'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component:About
    },
    {
      path: '/ask',
      name: 'ask',
      component:Ask
    },  
    {
      path: '/img',
      name: 'img',
      component: Img
    },
    {
      path: '/type',
      name: 'type',
      component: Type
    }
  ]
})
