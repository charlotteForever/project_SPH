import { reqCategoryList, reqBannerList, reqFloorList } from "@/api"


const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
}
const mutations = {
    GETCATEGORY(state, value) {
        // 接口的数据有17组，但我们只需要16组
        state.categoryList = value.slice(0, 16)
    },
    GETBANNER(state, value) {
        state.bannerList = value
    },
    GETFLOOR(state, value) {
        state.floorList = value
    }
}
const actions = {
    // 利用API向服务器发送请求
    async getCategory(context) {
        context.commit('GETCATEGORY', (await reqCategoryList()).data)
    },
    // context中有可能用到的方法，这里可以进行异步操作
    async getBanner(context) {
        context.commit('GETBANNER', (await reqBannerList()).data)
        // let res = await reqBannerList()
        // console.log(res)
    },
    async getFloor(context) {
        context.commit('GETFLOOR', (await reqFloorList()).data)
    }

}
export default {
    state,
    mutations,
    actions
}