import Vue from 'vue'
import Router from 'vue-router'
import Visualization from '@/components/home/visualization'
import Construction from '@/components/construction/nav'
// import Map from '@/components/map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Visualization',
      component: Visualization
    },
    {
      path: '/construction',
      name: 'construction',
      component: Construction
    }
  ]
})
