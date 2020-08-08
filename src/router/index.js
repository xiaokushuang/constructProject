import Vue from 'vue'
import Router from 'vue-router'
import Visualization from '@/components/home/visualization'
import Construction from '@/components/construction/nav'
import RegulatoryPlatform from '../views/regulatoryPlatform/home/index'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

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
    },
    {
      path: '/regulatoryPlatform',
      name: 'regulatoryPlatform',
      component: RegulatoryPlatform
    }
  ]
})
