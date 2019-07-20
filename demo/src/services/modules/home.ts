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
// http://baojia.chelun.com/v2-car-getImageList.html?SerialID=2593&_1563325595208/
export function GetImg(params:any) : Promise<Object> {
    return request({
        url: `v2-car-getImageList.html?SerialID=${params.SerialID}&${params.phone}`,
        method: 'GET',
        params
    })
}

// http://baojia.chelun.com/v2-car-getCategoryImageList.html?SerialID=2593&ImageID=6&Page=1&PageSize=30&_1563368605799
export function JumpImg(params:any) : Promise<Object> {
    return request({
        url: `v2-car-getCategoryImageList.html?SerialID=${params.SerialID}&ImageID=${params.ImageID}&Page=1&PageSize=30&${params.phone}`,
        method: 'GET',
        params
    })
}