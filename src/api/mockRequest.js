// 对axios进行二次封装
import axios from 'axios'
// 引入nprogress进度条和进度条样式
import nprogress from 'nprogress'
import "nprogress/nprogress.css"
// 创建一个axios实例（？
const mockRequests = axios.create({
    // 设置发送请求的baseURL
    baseURL: '/mock',
    // 隔了5s还没收到响应就认为请求超时
    timeout: 5000,
})

// 请求拦截器
mockRequests.interceptors.request.use((config) => {
    // 发送请求时启动
    nprogress.start()
    // config是一个配置对象,该对象里有请求头headers
    return config
})

// 响应拦截器
mockRequests.interceptors.response.use((res) => {
    // 收到响应时终止
    nprogress.done()
    // 响应成功的回调函数
    return res.data
}, (error) => {
    // 响应失败的回调函数
    return Promise.reject(new Error(error))
})

export default mockRequests