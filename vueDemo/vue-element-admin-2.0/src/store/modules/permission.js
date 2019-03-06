import { asyncRouterMap, constantRouterMap } from '@/router'
import { menuList } from '@/api/menu'

const _import = require('@/router/_import_' + process.env.NODE_ENV) // 获取组件的方法
import Home from '@/components/Home' // Layout 是架构组件，不在后台返回，在文件里单独引入

function makeAsyncRouter(asyncRouterMap) { // 遍历后台传来的路由字符串，转换为组件对象
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
      route.children = makeAsyncRouter(route.children)
    }
    return true
  })

  return accessedRouters
}

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
// function hasPermission(roles, route) {
//   if (route.meta && route.meta.roles) {
//     return roles.some(role => route.meta.roles.includes(role))
//   } else {
//     return true
//   }
// }

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRouterMap
 * @param roles
 */
// function filterAsyncRouter(routes, roles) {
//   const res = []

//   routes.forEach(route => {
//     const tmp = { ...route }
//     if (hasPermission(roles, tmp)) {
//       if (tmp.children) {
//         tmp.children = filterAsyncRouter(tmp.children, roles)
//       }
//       res.push(tmp)
//     }
//   })

//   return res
// }

const permission = {
  state: {
    routers: [],
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        const { roles } = data
        menuList(roles).then(response => {
          console.log(response)
          let accessedRouters
          if (roles.includes('admin')) {
            console.log('roles includes')
            // accessedRouters = asyncRouterMap
            console.log(asyncRouterMap)
            accessedRouters = makeAsyncRouter(response.data.fatherRoutes)
            console.log(accessedRouters)
          }
          commit('SET_ROUTERS', accessedRouters)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default permission
