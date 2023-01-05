import { createStore } from 'vuex'

export default createStore({
  state: {
    isDark: false
  },
  getters: {
    getDark: state => {
      return state.isDark;
    }
  },
  mutations: {
    setDark: (state, set) => {
      state.isDark = set;
      if(set) {
        document.getElementById("app").classList.add("blur")
        document.getElementById("dark").classList.add("actv")
      } else {
        document.getElementById("app").classList.remove("blur")
        document.getElementById("dark").classList.remove("actv")
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
