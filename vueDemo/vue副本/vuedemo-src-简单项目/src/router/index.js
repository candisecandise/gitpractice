import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FirstPart from '@/components/HomeComponents/FirstPart'
import SecondPart from '@/components/HomeComponents/SecondPart'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
        path: '/',
        name: 'FirstPart',
        component: FirstPart
      },
      {
        path: 'SecondPart',
        name: 'SecondPart',
        component: SecondPart
      }
    ]
  }]
})
