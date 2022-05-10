import { createStore } from 'vuex'

export default createStore({
    state: {
        info: 'hello'
    },
    mutations: {
        // 定义mutations，用于修改状态(同步)
        updateInfo (state, payload) {
            state.info = payload
        }
    },
    actions: {
        // 定义actions，用于修改状态(异步)
        // 2秒后更新状态
        updateInfo (context, payload) {
            setTimeout(() => {
                context.commit('updateInfo', payload)
            }, 2000)
        }
    },
    getters: {
        // 定义一个getters
        formatInfo (state) {
            return state.info + ' Tom'
        }
    },
    modules: {
    }
})
