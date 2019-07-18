import request from '@/utils/request';

//所在城市定位
export function location(params:any) : Promise<Object> {
    return request({
        url: `/location-client.html?_1563418605075`,
        method: 'GET',
        params
    })
}

//所在城市定位
export function carDetail(params:any) : Promise<Object> {
    return request({
        url: `/v2-dealer-alllist.html?_1563418605075`,
        method: 'GET',
        params
    })
}

//城市数据
export function allCity(params:any) : Promise<Object> {
    return request({
        url: `/v1-city-alllist.html?_1563418605075`,
        method: 'GET',
        params
    })
}

//城市数据详情
export function allCityDetail(params:any) : Promise<Object> {
    return request({
        url: `/v1-city-alllist.html?_1563418605075`,
        method: 'GET',
        params
    })
}

//询问价格
export function askPrice(params:any) : Promise<Object> {
    return request({
        url: `/h2-submit-lowprice.html?`,
        method: 'GET',
        params
    })
}