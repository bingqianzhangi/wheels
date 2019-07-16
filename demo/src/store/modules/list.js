import { GetLists } from "../../services/index";
const state = {
  list: []
}
//派生数据
const getters = {

}
//异步改变
const actions = {
  async GetList({ commit }, payload) {
      console.log('sa',payload)
    let data = await GetLists(payload);
    commit('SetTabList', data)
  }
}
//同步改变,改变数据的唯一途径
const mutations = {
  SetTabList(state, payload) {
    console.log('pat',payload)
    state.list = payload.data;
    console.log("state.list...", state.list)
  }
 
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}