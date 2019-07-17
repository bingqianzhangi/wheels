import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger';

// 引入模块
import home from './modules/home';
import index from './modules/index';
import list from './modules/list';
import img  from './modules/img'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    index,
    list,
    img
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
  plugins: [createLogger()]
})
