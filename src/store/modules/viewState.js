
const state = {
    currentView : 'home'
  }
  
const mutations = {
    updateView(state,view){
        state.currentView = view;
    }
}

export default {
    namespaced: true,
    state,
    mutations
  }