import router from './router'
import store from './store'
import {
  getToken
} from '@/utils/auth' // getToken from cookie

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach((to, from, next) => {
  // 可以用免登陆白名单或者重新判断是否是登录页使其next
  if (getToken()) {
    if (to.path === '/login') {
      next({
        path: '/'
      })
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GetUserInfo2').then(res => {
          // const roles = getToken()
          const roles = res.data.roles
          store.dispatch('GenerateRoutes', {
            roles
          }).then(() => { // 根据roles权限生成可访问的路由表
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            // router.addRoutes(asyncRouterMap) // 动态添加可访问路由表
            next({
              ...to,
              replace: true
            }) // hack方法 确保addRoutes已完成 ,仍然跳回原来路由，参数仍然是 to，但是通过...to 把参数都带过去了
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next({
        path: '/login'
      })
    }
  }
})
