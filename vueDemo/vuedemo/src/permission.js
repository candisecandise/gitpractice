import router from './router'
import store from './store'
import {
  getToken
} from '@/utils/auth' // getToken from cookie

import {
  dynamicRouter
} from '@/router'

router.beforeEach((to, from, next) => {
  // 不是 login 界面
  // 可以用免登陆白名单或者重新判断是否是登录页使其next
  if (to.meta.requireAuth === undefined) {
    if (getToken()) {
      if (to.path === '/login') {
        next({
          path: '/'
        })
      } else {
        const roles = getToken()
        if (store.getters.roles.length === 0) {
          store.dispatch('GetUserInfo').then(res => {
            store.dispatch('GenerateRoutes', {
              roles
            }).then(() => { // 根据roles权限生成可访问的路由表
              console.log(1111111111)
              console.log(store.getters.addRouters)
              console.log(dynamicRouter)
              // router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
              router.addRoutes(dynamicRouter) // 动态添加可访问路由表
              // 仍然跳回原来路由，参数仍然是 to，但是通过...to 把参数都带过去了
              next({
                ...to,
                replace: true
              }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
            })
          })
        } else {
          console.log(router)
          next()
        }
      }
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})
