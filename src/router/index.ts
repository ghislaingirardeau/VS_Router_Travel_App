import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // lazy loading routes with import component
  // in dev tool network, we will see that js for this page are loaded only when we navigate to it
  // npm run build will create js file for each lazy load component
  {
    path: '/brazil',
    name: 'brazil',
    // pour renomer le chunk si besoin (pas besoin dans vite)
    component: () => import(/* webpackChunkName: "brazilChunk" */ '@/views/Brazil.vue')
  },
  {
    path: '/panama',
    name: 'panama',
    component: () => import('../views/Panama.vue')
  },
  {
    path: '/hawaii',
    name: 'hawaii',
    component: () => import('../views/Hawaii.vue')
  },
  {
    path: '/destination/:id',
    component: () => import('../views/DestinationShow.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // to custom the css and name of the active link class (in TheNavigation component)
  linkActiveClass: 'custom-link-active-class'
})

export default router
