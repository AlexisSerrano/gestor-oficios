import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './components/Dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect: '/inicio'
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: Dashboard
    }
  ]
})
