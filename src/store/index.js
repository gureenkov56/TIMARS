import { createStore } from 'vuex'

export default createStore({
  state: {
    isModalOpen: true,
    openedModal: 'settings'
  },
  getters: {
  },
  mutations: {
    OPEN_MODAL(state, name) {
      state.isModalOpen = true;
      state.openedModal = name;
    },
    CLOSE_MODAL(state) {
      state.isModalOpen = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
