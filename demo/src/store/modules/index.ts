import {GetList} from "../../services/index";

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
  async Get({commit}: {commit: Function}, payload:any): Promise<void> {
    // console.log('sa',payload)
    let data = await GetList(payload);
    commit('SetTabList', data)
  },
 
}
//同步改变,改变数据的唯一途径
const mutations = {
  SetTabList(state:any, payload:any) {
    console.log('pat', payload)
    state.list = payload.data[0];
    console.log("state.list...", state.list)
  },
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}