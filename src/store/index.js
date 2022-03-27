import { createStore } from 'vuex'

export default createStore({
  state: {
    precio: ' ',
    sabor: ' ',
    adorno: ''
  },
  getters: {
  },
  mutations: {
    addPrecio(state, pcio){
      state.precio = pcio
    },
    addSabor(state, sbr){
      state.sabor = sbr
    },
    addAdorno(state, adorn){
      state.adorno = adorn
    }
  },
  actions: {
  },
  modules: {
  }
})
