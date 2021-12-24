import axios from 'axios'
export default {
    namespaced: true,
    state: {
        allData: {} // 放置所有的数据 {分类id:列表1, 分类id:列表2}
    },
    mutations: {
        // payload载荷 {1:[], 2:[]}
        updateList(state, { currenthome, list }) {
            // state.allData[currentCatagtory] = list   // 不是响应式的 这样做是大错特错的 感觉不到变化 就不会通知组件
            //相当于在一个新的对象后面追加了一个属性 示例：var a ={a:1,b:2,c:3};var b={...a,a:10};console.log(b)
            state.allData = { ...state.allData, [currenthome]: list }
        }
    },
    actions: {
        // 获取新闻列表数据 。分类id只能通过传递的方式传进来
        async getNewList(context, cataId) {
            const { data: { data: { results } } } = await axios.get(`http://api-toutiao-web.itheima.net/app/v1_1/articles?channel_id=${cataId}&timestamp=1556789000001&with_top=1`)
            context.commit('updateList', { currenthome: cataId, list: results })
            // console.log(results)

            // axios.get(`http://api-toutiao-web.itheima.net/app/v1_1/articles?channel_id=${cataId}&timestamp=${new Date().getTime()}&with_top=1`).then(res=>{
            //     console.log(res.data)
            //     // results是新闻列表
            //     context.commit('updateList',{currentCatagtory:cataId,list:res.data.results})
            // })
        }
    }
}