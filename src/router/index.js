// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import VueRouter from 'vue-router'

// 需要在router里面Vue.use
Vue.use(VueRouter)

import Home from '../pages/Home/index.vue'
import Search from '../pages/Search/index.vue'
import Login from '../pages/Login/index.vue'
import Register from '../pages/Register/index.vue'

const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        // 如果直接调用,this指向window
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}


const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {
                show: true
            }
        },
        {
            name: 'search',
            path: '/search/:keyword?',
            component: Search,
            // 设置是否显示
            meta: {
                show: true
            }
        },
        {
            path: '/login',
            component: Login,
            meta: {
                show: false
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                show: false
            }
        },
        // 重定向，在项目访问/的时候，立刻让他定向到首页
        {
            path: '*',
            redirect: '/home'
        }
    ]
})
export default router