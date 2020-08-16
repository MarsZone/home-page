import Vue from 'vue'
import VueRouter from 'vue-router'
import Chome from '../views/citizen/Chome'

Vue.use(VueRouter)
  // components:resolve=>require(['@/views/citizen/Chome.vue'],resolve)
  // component: () => import('@/views/ums/role/index'),
  const routes = [
  {
    path: '/',
    name: 'Home',
    component:Chome,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/error',
    name: 'error',
     //webpackChunkName 将路由下的所有组件打包到一个Chunk. 懒加载，需要再加载
    component: () => import(/* webpackChunkName: "common" */ '@/views/common/error'),
    meta: {
      title: '404页'
    }
  },
  {
    path: '/building',
    name: 'building',
    component: () => import(/* webpackChunkName: "common" */ '@/views/common/building'),
    meta: {
      title: '建设页'
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

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
