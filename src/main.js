import Vue from 'vue'
import App from './App.vue'

import router from './router'
// import VueRouter from 'vue-router'

// 全局引入三级联动 TypeNav组件,
import TypeNav from './pages/Home/TypeNav/index.vue'
// 第一个参数是组件的名字,第二个参数是哪一个组件
Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false
// Vue.use(router)
new Vue({
  render: h => h(App),
  // 书写了之后，组件（无论是路由组件还是非路由组件）身上都有$route和$router属性
  router,
}).$mount('#app')
