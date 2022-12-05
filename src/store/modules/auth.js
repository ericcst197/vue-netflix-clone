export default {
    namespaced: true,
    state(){
        return{
            email: ''
        }
    },
    mutations:{
        setEmail(state, payload) {
            console.log(payload,'mutate')
            state.email = payload;
        },
    },
    actions:{
        signup(context, payload){
            context.commit('setEmail', payload)
        }
    },
    getters:{
        getEmail(state){
            return state.email
        }
    }
}