import request from '@/utils/request';

// 获取品牌列表
export function getBrandList(): Promise<Object> {
    return request.get('/v2-car-getMasterBrandList.html');
}

export function GetList(params: any): Promise<Object> {
    return request({
        url: `v2-car-getMakeListByMasterBrandId.html?MasterID=${params.MasterID}&${params.phone}`,
        method: 'GET',
        params
    })
}

export function GetLists(params:any) : Promise<Object> {
    return request({
        url: `v2-car-getInfoAndListById.html?SerialID=${params.SerialID}&${params.phone}`,
        method: 'GET',
        params
    })
}