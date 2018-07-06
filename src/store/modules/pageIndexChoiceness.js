import axios from '../../http'

export default {
    namespaced: true,
    state: {
        count: 0
    },
    mutations: {
        increment (state,index) {
            console.log(index,'index')
            state.count = index
        }
    },
    actions: {
        increment (context,index) {
            context.commit('increment',index)
        },
        getIndexChoiceness (context) {
            axios({
              method: 'get',
              url: '/api/v2.0.0/index',
              data: {}
            })
        }
    }
}