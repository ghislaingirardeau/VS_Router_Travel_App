import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Brazil from '../views/Brazil.vue'
import Panama from '../views/Panama.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/brazil',
    name: 'brazil',
    component: Brazil
  },
  {
    path: '/panama',
    name: 'panama',
    component: Panama
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // to custom the css and name of the active link class (in TheNavigation component)
  linkActiveClass: 'custom-link-active-class'
})

export default router
