import Mock from 'mockjs'

import banner from './banner'
import floor from './floor'

// 第一个参数是请求参数地址，第二个参数是请求的数据
Mock.mock("./banner", { code: 200, data: banner })
Mock.mock("./floor", { code: 200, data: floor })