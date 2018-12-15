import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import FirstPart from '@/components/HomeComponents/FirstPart'
import SecondPart from '@/components/HomeComponents/SecondPart'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: '1',
    component: Hello,
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
  }]
})
