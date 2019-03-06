import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export const constantRouter = [{
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
}
]

const router = new Router({
  routes: constantRouter
})

export default router

export const dynamicRouter = [{
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
}]
