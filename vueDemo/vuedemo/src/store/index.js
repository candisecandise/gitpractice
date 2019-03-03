import Vue from 'vue'
import Vuex from 'vuex'

import {
  constantRouterMap,
  dynamicRouter
} from '@/router'

import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: undefined,
    routers: [],
    addRouters: []
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    SET_ROUTERS: (state, routers) => {
      state.addRouters = constantRouterMap
      state.routers = routes.concat(routers)
    }
  },
  actions: {
    login(context, payload) {
      context.commit('setToken', payload)
      setToken(payload);
    },
    logout(context) {
      context.commit('setToken', '')
      removeToken()
    },
    GenerateRoutes({
      commit
    }, data) {
      return new Promise(resolve => {
        const {
          roles
        } = data
        let accessedRouters
        if (roles.includes('admin')) {
          accessedRouters = dynamicRouter
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
})

export default store
