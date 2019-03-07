import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import axios from 'axios'

import {
  constantRouter
} from '@/router'

import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'

Vue.use(Vuex)

const _import = require('@/router/_import_' + process.env.NODE_ENV) // 获取组件的方法
import Home from '@/components/Home' // Layout 是架构组件，不在后台返回，在文件里单独引入

function filterAsyncRouter(asyncRouterMap) { // 遍历后台传来的路由字符串，转换为组件对象
  console.log(asyncRouterMap)
  const accessedRouters = asyncRouterMap.filter(route => {
    if (route.component) {
      if (route.component === 'Home') { // Layout组件特殊处理
        console.log('Home')
        route.component = Home
      } else {
        route.component = _import(route.component)
      }
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })

  return accessedRouters
}

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
      setToken(payload.name)
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
        axios.post('a/test/routes').then(res => {
          const {
            roles
          } = data
          let accessedRouters
          if (roles.includes('admin')) {
            console.log('roles includes')
            // accessedRouters = dynamicRouter
            accessedRouters = filterAsyncRouter(res.data.fatherRoutes)
          }
          commit('SET_ROUTERS', accessedRouters)
          resolve()
        })
      })
    }
  },
  getters
})

export default store
