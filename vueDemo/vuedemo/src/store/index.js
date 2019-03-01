import Vue from 'vue'
import Vuex from 'vuex'

import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: undefined
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
  },
  actions: {
    login(context, payload) {
      context.commit('setToken', payload)
      setToken(payload);
    },
    logout(context) {
      context.commit('setToken', '')
      removeToken()
    }
  }
})

export default store
