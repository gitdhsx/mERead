import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
import Ebook from '@/Ebook'
const Shelf = () => import('views/shelf/Shelf')
const Page= () => import('views/page/Page')
const Store= () => import('views/store/Store')
const Profile= () => import('views/profile/Profile')

const routes = [
  {
    path: '/',
    redirect: '/shelf'
  },
  {
    path: '/ebook',
    name: 'Ebook',
    component: Ebook
  },
  {
    path: '/shelf',
    name: 'Shelf',
    component: Shelf
  },
  {
    path: '/page',
    name: 'Page',
    component: Page
  },,
  {
    path: '/store',
    name: 'Store',
    component: Store
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
