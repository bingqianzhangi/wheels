import request from '../utils/request';

//获取所有的考试类型
export function carList() {
  return request({
    url: '/v2-car-getMasterBrandList.html',
    method:'GET'
  })
}