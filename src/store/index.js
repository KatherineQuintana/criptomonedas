import { createStore } from 'vuex'
import {useRoute} from 'vue-router'


export default createStore({
  state: {
    cripto: [],
    estadisCriptos: [],
  },
  getters: {
    orderDate(state) {
      return state.estadisCriptos.sort((a, b) => a.time_close < b.time_close ? 1 : -1)
    }

  },
  mutations: {
    setCripto(state, payload) {
      state.cripto = payload
    },
    setEstadisCriptos(state, payload) {
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
    },

    async getCriptoEstadi ({commit}) {
      try{
        const nameParams = useRoute()
        const res = await fetch (`https://api.coinpaprika.com/v1/coins/${nameParams.params.id}/ohlcv/historical?start=2022-04-11&end=2022-04-17`)
        const data = await res.json()
        commit('setEstadisCriptos', data)
      }catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  },
})
