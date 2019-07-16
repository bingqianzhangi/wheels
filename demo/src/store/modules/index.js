import {GetList,carList} from "../../services/index";

const state = {
  list: [],
  titleArr: [],
  listArr: []
}
//派生数据
const getters = {

}
//异步改变
const actions = {
  async Get({
    commit
  }, payload) {
    // console.log('sa',payload)
    let data = await GetList(payload);
    commit('SetTabList', data)
  },
  async getList({
    commit
  }, payload) {
    let data = await carList(payload);
    let arr = [];
    data.data.forEach(item => {
      if (!arr.includes(item.Spelling.slice(0, 1))) {
        arr.push(item.Spelling.slice(0, 1))
      }
    });
    console.log('list,', arr);
    commit('upTitle', arr);
    let list = arr.map((item, index) => {
      item = {
        code: item,
        Spelling: []
      };
      data.data.forEach((v, i) => {
        if (v.Spelling.slice(0, 1) == item.code) {
          item.Spelling.push(v);
        }
      })
      return item;
    })
    console.log('...', list);
    commit('upList', list);
  }
}
//同步改变,改变数据的唯一途径
const mutations = {
  SetTabList(state, payload) {
    console.log('pat', payload)
    state.list = payload.data[0];
    console.log("state.list...", state.list)
  },

  upTitle(state, payload) {
    state.titleArr = payload;
  },
  upList(state, payload) {
    state.listArr = payload;
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}