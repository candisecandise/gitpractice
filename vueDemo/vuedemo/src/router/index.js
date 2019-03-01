import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Home from '@/components/Home'

import {
  getToken
} from '@/utils/auth' // getToken from cookie

Vue.use(Router)

const routes = [{
    path: '/login',
    name: 'login',
    meta: {
      requireAuth: false
    },
    component: () => import('@/views/login')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404')
  }, {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: 'FirstPart',
    children: [{
        path: 'FirstPart',
        name: 'FirstPart',
        component: () => import('@/components/HomeComponents/FirstPart')
      },
      {
        path: 'SecondPart',
        name: 'SecondPart',
        component: () => import('@/components/HomeComponents/SecondPart')
      }
    ]
  }
];

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  // 不是 login 界面
  if (to.meta.requireAuth === undefined) {
    if (getToken()) {
      next();
    } else {
      next({
        path: '/login',
      })
    }
  } else {
    next();
  }

})

export default router
