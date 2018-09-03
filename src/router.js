import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    // {
    //   name: 'register',
    //   path: '/register',
    //   component: () => import('@/views/Register')
    // },
    // {
    //   name: 'settings',
    //   path: '/settings',
    //   component: () => import('@/views/Settings')
    // },
  ]
})
