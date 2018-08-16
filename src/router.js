import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Mgow from './views/MGOW/HomePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/mgow',
      name: 'mgow',
      component: Mgow
    },
    {
      path: '/3d',
      name: '3d',
      component: About
    }
  ]
})
