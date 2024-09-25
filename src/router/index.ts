import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // route avec params, pour une meilleur experience UX + SEO, mettre le slug dans url plutot que l'id tout seul
  {
    path: '/destination/:id/:slug',
    // can name a route with params, will result :to="{ name: 'destination.view', params: { id: destination.id } }"
    name: 'destination.view',
    component: () => import('../views/DestinationView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'custom-link-active-class'
})

export default router
