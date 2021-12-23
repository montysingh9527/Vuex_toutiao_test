import axios from 'axios'
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
    actions: {
        async gethomelist(context) {
            // axios默认有一层data的数据结构
            const { data: { data: { channels } } } = await axios.get('http://api-toutiao-web.itheima.net/app/v1_0/channels')
            console.log(channels)
            // 需要通过mutation才能修改state的值
            context.commit('updateHome', channels)  // 更新数组
            context.commit('updateCurrentHome', channels[0].id)  // 更新当前选中分类id
        }
    }
}