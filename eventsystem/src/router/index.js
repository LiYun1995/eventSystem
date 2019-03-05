import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '@/components/HomeIndex/HomeIndex'
import SystemIndex from '@/components/SystemManage/SystemIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeIndex',
      component: HomeIndex
    },
    {
      path:'/manage',
      name:'SystemIndex',
      component:SystemIndex
    }
  ]
})
