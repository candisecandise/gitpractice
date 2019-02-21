import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FirstPart from '@/components/HomeComponents/FirstPart'
import SecondPart from '@/components/HomeComponents/SecondPart'
import Login from '@/views/login'

Vue.use(Router)

export default new Router({
  routes: [{
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
        component: SecondPart
      }
    ]
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }]
})
