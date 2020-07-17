import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    components:resolve=>require(['@/views/citizen/Chome.vue'],resolve)
  },
  {
    path: '/error',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '@/views/common/error'),
    meta: {
      title: '404页'
    }
  },
  {
    path: '*',
    redirect: 'error',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
