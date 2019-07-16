import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger';

// 引入模块
import home from './modules/home';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
  plugins: [createLogger()]
})
