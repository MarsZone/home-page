import Vue from 'vue'
import Router from 'vue-router'
import Lang from './modules/Lang.vue'
import About from './modules/About.vue'
import Mars from './modules/Mars/Mhome.vue'

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
      path: '/mars',name: 'mars',component: Mars,
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
