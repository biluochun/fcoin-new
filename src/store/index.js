import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  lang:'',
  username:'',
}
const store = new Vuex.Store({
  state,
  mutations: {
    setLang(state, lang){
      state.lang = lang

    },
    setUsername(state, username){
      state.username = username
    }
  },
  actions: {

  },
  modules: {
    //doctor,
  }
});

export default store
