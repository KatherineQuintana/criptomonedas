import { createStore } from 'vuex'

export default createStore({
  state: {
    cripto: [],
    estadisCriptos: [],
  },
  getters: {
/*     rankCripto(state){
      return state.cripto.sort((a,b) =>
        a.rank < b.rank ? 1 : -1
      )
    } */
  },
  mutations: {
    setCripto(state, payload) {
      state.cripto = payload
    },
    setEstadiCripto(state, payload) {
      state.estadisCriptos = payload
    }
  },
  actions: {
    async getCripto ({commit}) {
      try{
        const res = await fetch ('https://api.coinpaprika.com/v1/coins')
        const data = await res.json()
        commit('setCripto', data)
      }catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  },
})
