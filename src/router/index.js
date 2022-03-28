// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import VueRouter from 'vue-router'

// 需要在router里面Vue.use
Vue.use(VueRouter)

import Home from '../pages/Home/index.vue'
import Search from '../pages/Search/index.vue'
import Login from '../pages/Login/index.vue'
import Register from '../pages/Register/index.vue'
const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        // 重定向，在项目访问/的时候，立刻让他定向到首页
        {
            path: '*',
            redirect: '/home'
        }
    ]
})
export default router