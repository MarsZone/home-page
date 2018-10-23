
const state = {
    currentModule : 'menu'
  }
  
const mutations = {
    updateModule(state,module){
        state.currentModule = module;
    }
}

export default {
    namespaced: true,
    state,
    mutations
  }