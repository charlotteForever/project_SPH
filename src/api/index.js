// 这个模块对API的请求进行统一管理

// 引入之前做了封装的axios
import requsts from '../api/request'

// 目的是为了在别的组件里面调用函数直接发起请求，所以对外暴露一个函数
// 请求三级联动接口 /api/product/getBaseCategoryList get 无参数
export const reqCategoryList = () => {
    // 返回一个promise类型的对象
    return requsts({ url: '/product/getBaseCategoryList', method: 'get' })
}
