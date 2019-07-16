import { getBrandList } from '@/services'

const state = {
    brandList: {} = {},
    letterList: [] = [],
    typeList: [] = []
}

const actions = {
    async getList({commit}: {commit: Function}): Promise<void>{
        let data:any = await getBrandList();
        // 更新品牌信息
        let brandList:any = {};
        data.data.forEach((item:any) => {
            let letter = item.Spelling[0];
            if (brandList[letter]){
                brandList[letter].push(item);
            }else{
                brandList[letter] = [item];
            }
        });
        commit('updateBrandList', brandList);

        // 更新字母信息
        let letterList: Array<string> = data.data.map((item: {Spelling: String})=>{
            return item.Spelling[0];
        })
        commit('updateLetterList', Array.from(new Set(letterList)));
    }
}

const mutations = {
    updateBrandList(state: any, payload: Object){
        state.brandList = payload;
    },
    updateLetterList(state: any, payload: Array<string>){
        state.letterList = payload;
    },
    updateTypeList(state: any, payload: Array<Object>){
        state.typeList = payload;
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}