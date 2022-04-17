// 这个模块对API的请求进行统一管理

// 引入之前做了封装的axios
import requests from '../api/request'
import mockRequests from '../api/mockRequest'

// 目的是为了在别的组件里面调用函数直接发起请求，所以对外暴露一个函数
// 请求三级联动接口 /api/product/getBaseCategoryList get 无参数
export const reqCategoryList = () => {
    // 返回一个promise类型的对象
    return requests({ url: '/product/getBaseCategoryList', method: 'get' })
}

export const reqBannerList = () => mockRequests.get("/banner");

// export const reqBannerList = () => {
//     return mockRequests({ url: '/banner', method: 'get' })
// }
export const reqFloorList = () => mockRequests.get('/floor')

// export const req