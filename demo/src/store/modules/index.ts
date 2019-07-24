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
    let data = await GetList(payload);
  }
}

//同步改变,改变数据的唯一途径
const mutations = {
  SetTabList(state:any, payload:any) {
    state.list = payload.data[0];
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}