import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FirstPart from '@/components/HomeComponents/FirstPart'
import SecondPart from '@/components/HomeComponents/SecondPart'
import Login from '@/views/login'
import store from '@/store'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'home',
  component: Home,
  redirect: 'FirstPart',
  children: [{
      path: 'FirstPart',
      name: 'FirstPart',
      component: FirstPart
    },
    {
      path: 'SecondPart',
      name: 'SecondPart',
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
      component: SecondPart
    }
  ]
}, {
  path: '/login',
  name: 'login',
  component: Login
}];

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.user) {
      next();
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next();
  }
})

export default router
