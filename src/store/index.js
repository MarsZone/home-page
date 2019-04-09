import Vue from 'vue'
import Vuex from 'vuex'
import moduleState from './modules/moduleState'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    i18n_locale:'zh'
  },
  mutations: {
    updateCurrentLocale(state,locale){
      state.i18n_locale = locale;
    }
  },
  actions: {

  },
  modules: {
    moduleState
  }
  // strict: process.env.NODE_ENV !== 'production'
})
