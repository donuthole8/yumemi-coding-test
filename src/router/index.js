import Vue from 'vue'
import Router from 'vue-router'
import Resas from '@/components/Resas'
import Chart from '@/components/Chart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Resas',
      component: Resas
    },
    {
      path: '/',
      name: 'Chart',
      component: Chart
    }
  ]
})
