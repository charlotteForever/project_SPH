import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import homeOptions from './home'
import searchOptions from './search'

export default new Vuex.Store({
    modules: {
        homeOptions,
        searchOptions
    }
})