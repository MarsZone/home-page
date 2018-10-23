import Vue from 'vue'
import Router from 'vue-router'
import Lang from './modules/Lang.vue'
import About from './modules/About.vue'
import Citizenship from './modules/Citizenship/Chome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      path: '/citi',name: 'citi',component: Citizenship,
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
