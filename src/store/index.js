import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import home from './home'
import search from './search'

export const store = new Vuex({
    modules: {
        home,
        search
    }
})