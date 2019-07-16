import request from '@/utils/request';

// 获取品牌列表
export function getBrandList(): Promise<Object>{
    return request.get('/v2-car-getMasterBrandList.html');
}