import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/login',
    name: 'login',
    meta: {
      requireAuth: false
    },
    component: () => import('@/views/login/index')
  }]
})

// 拦截登录，token验证
router.beforeEach((to, from, next) => {
  // 没有定义requireAuth的都会定位到login
  if (to.meta.requireAuth === undefined) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router
