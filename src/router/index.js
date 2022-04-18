import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/type',
    name: 'type',
    component: () => import(/* webpackChunkName: "about" */ '../views/TypeCripto.vue')
  },
  {
    path: '/element/:id',
    name: 'element',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../components/OneCripto.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
