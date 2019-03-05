import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import axios from 'axios'

import {
  constantRouter,
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
    token: getToken(),
    roles: [],
    routers: [],
    addRouters: []
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouter.concat(routers)
    }
  },
  actions: {
    login(context, payload) {
      context.commit('SET_TOKEN', payload.name)
      setToken(payload.name);
    },
    logout(context) {
      context.commit('SET_TOKEN', '')
      removeToken()
    },
    GetUserInfo({
      commit,
      state
    }) {
      commit('SET_ROLES', state.token)
    },
    GenerateRoutes({
      commit,
      state
    }, data) {
      return new Promise(resolve => {
        axios.post("a/test/routes").then(res => {
          console.log(res.data.fatherRoutes)
          const {
            roles
          } = data
          let accessedRouters
          if (roles.includes('admin')) {
            console.log("roles includes")
            // accessedRouters = dynamicRouter
            accessedRouters = res.data.fatherRoutes
          }
          commit('SET_ROUTERS', accessedRouters)
          resolve()
        });
        console.log(state.addRouters)
      })
    }
  },
  getters
})

export default store
