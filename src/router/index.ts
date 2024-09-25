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
    path: '/destination/:id/:slug',
    name: 'destination.view',
    component: () => import('../views/DestinationView.vue'),

    props: (route) => ({
      id: parseInt(route.params.id),
      hasNewsletterPopup: route.query.somePropsInRoute ? true : false
    }),

    beforeEnter(to, from) {
      console.log(to)
    },
    meta: {
      auth: true
    },
    children: [
      {
        path: ':experienceSlug',
        name: 'experience.view',
        component: () => import('../views/ExperienceView.vue'),
        props: (route) => ({
          ...route.params,
          experienceSlug: route.params.experienceSlug
        })
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: Error
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'custom-link-active-class',
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (to.name === 'experience.view') {
          resolve({
            el: 'aside',
            left: 0,
            top: 10,
            behavior: 'smooth'
          })
        } else {
          resolve({ left: 0, top: 0, behavior: 'smooth' })
        }
      }, 300)
    })
  }
})

// GLOBAL NAVIGATION GUARDS
// Every time the route change this callback is fired
router.beforeEach((to, from) => {
  console.log(to)
  if (to.meta.auth) {
    // routes is only for auth user
  }
})

export default router
