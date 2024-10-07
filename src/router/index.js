import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Error from '../views/Error.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
    beforeEnter(to, from) {
      console.log(to)
      return false
    }
  },
  {
    path: '/destination/:id/:slug',
    name: 'destination.view',
    component: () => import('../views/DestinationView.vue')
  },
  {
    path: '/card',
    name: 'card.view',
    component: () => import('../views/CardView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: Error
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'custom-link-active-class'
})

export default router
