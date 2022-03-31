import { reqCategoryList } from "@/api"

const state = {
    categoryList: [],
}
const mutations = {
    GETCATEGORY(state, value) {
        // 接口的数据有17组，但我们只需要16组
        state.categoryList = value.slice(0, 16)
    }
}
const actions = {
    // 利用API向服务器发送请求
    async getCategory(context) {
        context.commit('GETCATEGORY', (await reqCategoryList()).data)
    }
}
export default {
    state,
    mutations,
    actions
}