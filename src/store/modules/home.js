export default {
    namespaced: true,
    state: {
        homelist: [],  // 分类数组tab栏
        currenthome: ''  // 当前选中的分类
    },
    mutations: {
        // 更新分类数组
        updateHome(state, payload) {
            state.homelist = payload  // 将载荷赋值给homelist
        },
        // 更新当前选中分类
        updateCurrentHome(state, payload) {
            state.currenthome = payload // 将选中的分类赋值给currenthome
        }
    },
    mations: {

    }
}