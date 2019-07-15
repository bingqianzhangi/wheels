import Vue from "vue";
import Vuex from "vuex";
//引入子模块
import index from "./modules/index";
import list from './modules/list'
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        index,
        list
    },
    mutations: {

    },
})