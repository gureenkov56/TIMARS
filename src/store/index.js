import { createStore } from 'vuex'

export default createStore({
  state: {
    isModalOpen: true,
    openedModal: 'settings'
  },
  getters: {
  },
  mutations: {
    setOpenedModal(state, name) {
      state.isModalOpen = true;
      state.openedModal = name;
    },
    closeModal(state) {
      state.isModalOpen = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
