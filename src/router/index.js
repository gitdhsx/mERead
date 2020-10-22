import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
import Ebook from '@/Ebook'

const routes = [
  {
    path: '/',
    redirect: '/ebook'
  },
  {
    path: '/ebook',
    name: 'Ebook',
    component: Ebook
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
