import router from './router'
import store from './store'
import {
  constantRouter,
  dynamicRouter
} from "@/router/index";
import {
  getToken
} from '@/utils/auth' // getToken from cookie

router.beforeEach((to, from, next) => {
  // 不是 login 界面
  if (to.meta.requireAuth === undefined) {
    if (getToken()) {
      if (to.path === '/login') {
        next({
          path: '/'
        })
      } else {
        let isLogin = JSON.parse(getToken());
        let dR = new Array();
        for (let i = 0; i < dynamicRouter.length; i++) {
          for (let j = 0; j < dynamicRouter[i].meta.roles.length; j++) {
            if (dynamicRouter[i].meta.roles[j] == isLogin.name) {
              dR.push(dynamicRouter[i]);
            }
          }
        }
        router.addRoutes(dR);
         next()
        // const roles = [getToken().name]
        // store.dispatch('GenerateRoutes', {
        //   roles
        // }).then(() => { // 根据roles权限生成可访问的路由表
        //   router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
        //   next({
        //     ...to,
        //     replace: true
        //   }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
        // })
      }
    } else {
      next({
        path: '/login',
      })
    }
  } else {
    next();
  }

})
