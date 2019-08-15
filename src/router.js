import Vue from 'vue'
import Router from 'vue-router'
import Lang from './modules/Lang.vue'
import About from './modules/About.vue'
import Citizen from './modules/Citizen/Chome.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Citizen,
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/lang',
      name: 'lang',
      component: Lang
    },
    {
      path: '/citizen',
      name: 'citizen',
      component: Citizen,
      // children:[
      //   {
      //     path:'',
      //     component:
      //   }
      // ]
    },
    {
      path: '/3d',
      name: '3d',
      component: About
    }
  ]
})
