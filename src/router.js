import Vue from 'vue'
import Router from 'vue-router'

import Campaign from '@/views/Campaign.vue'
import Report from '@/views/Report.vue'
import Export from '@/views/export.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/campaign',
      component: Campaign,
    },
    {
      path: '/report',
      component: Report,
    },
    {
      path: '/export',
      component: Export,
    }
  ]
})
