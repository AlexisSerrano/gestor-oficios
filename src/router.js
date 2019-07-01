import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './views/Inicio.vue'

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
      component: Inicio
    }
  ]
})
