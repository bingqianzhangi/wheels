import request from '../utils/request';
// 精选好物&轮播图
export function GetList(params) {
    return request({
      url: `v2-car-getMakeListByMasterBrandId.html?MasterID=${params.MasterID}&${params.phone}`,
      method:'GET',
      params
    })
  }
// export let GetList = params => {
//     return request.get('v2-car-getMakeListByMasterBrandId.html?MasterID=97&_1563176334484');
// }