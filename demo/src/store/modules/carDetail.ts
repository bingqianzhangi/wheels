import { location, carDetail, allCity, allCityDetail, askPrice } from '@/services'

const state = {
  preciseLocation:{} = {},
  carDetailList:{} = {},
  cityList:[] = [],
  cityDetail:[] = [],
  code:0
}

const actions = {
  async getLocation({commit}: {commit: Function}, payload: any): Promise<void>{
    let data:any = await location(payload);
    commit('updateLocation', data.data);
  },
  async getCarDetail({commit}: {commit: Function}, payload: any): Promise<void>{
    let data:any = await carDetail(payload);
    commit('updateCarDetail', data.data);
  },
  async getAllCity({commit}: {commit: Function}, payload: any): Promise<void>{
    let data:any = await allCity(payload);
    commit('updateAllCity', data.data);
  },
  async getCityDetail({commit}: {commit: Function}, payload: any): Promise<void>{
    let data:any = await allCityDetail(payload);
    commit('updateCityDetail', data.data);
  },
  async sendAsk({commit}: {commit: Function}, payload: any): Promise<void>{
    let data:any = await askPrice(payload);
    return data;
    // commit('updateResult', data.code);
  }
}

const mutations = {
  updateLocation(state: any, payload: Object){
    state.preciseLocation=payload;
  },
  updateCarDetail(state: any, payload: Object){
    state.carDetailList=payload;
  },
  updateAllCity(state: any, payload: Array<Object>){
    state.cityList=payload;
  },
  updateCityDetail(state: any, payload: Array<Object>){
    state.cityDetail=payload;
  },
  // updateResult(state: any, payload: Number){
  //   state.code=payload;
  // }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}