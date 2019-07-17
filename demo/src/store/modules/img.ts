import { GetImg,JumpImg } from "../../services/index";
const state = {
  list: [],
  url: [],
  imgList:[]
}
//派生数据
const getters = {

}
//异步改变
const actions = {
  async GetImgs({ commit }: { commit: Function }, payload: any) {
    console.log('sa', payload)
    let data = await GetImg(payload);
    commit('SetTabList', data)
    commit('GetImg', data)
  },

  async JumpImgs({ commit }: { commit: Function }, payload: any) {
    console.log('JumpImgList', payload)
    let data = await JumpImg(payload);
    commit('JumpImgList', data)
  }
}
//同步改变,改变数据的唯一途径
const mutations = {
  SetTabList(state: any, payload: any) {
    //   console.log('pat', payload)
    state.list = payload.data;
    console.log("img.", state.list)
  },
  JumpImgList(state: any, payload: any) {
    //   console.log('pat', payload)
    // state.imgList = payload.data.List;
    let string=''
    payload.data.List.map(i=>{
      let num = i.Url.length - 7;
      string=i.Url.slice(0, num) + `${i.LowSize}.jpg`;
      i.Url=string
      state.imgList.push(i.Url)
    })
    console.log("imgList.", state.imgList)
  },
  GetImg(state: any, payload: any) {
    let string=''
    payload.data.map(item => {
      item.List.map(i=>{
        let num = i.Url.length - 7;
        string=i.Url.slice(0, num) + `${i.LowSize}.jpg`;
        i.Url=string
      })
    });
    // console.log("img...", state.url)
  }

}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}