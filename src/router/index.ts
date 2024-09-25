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
      hasNewsletterPopup: route.query.somePropsInRoute
        ? true
        : false /* pass static props or pass props depending on props inside route */
    }),
    // NAVIGATION GUARDS FOR SPECIAL ROUTES
    // here we use an API, so navigation guards is used through try...catch by fetching data
    beforeEnter(to, from) {
      console.log(to)
    },
    // NESTED ROUTE combine with <RouterView /> inside the parent
    children: [
      {
        path: ':experienceSlug', // No need the parent params inside the path because it's a nested routes
        name: 'experience.view',
        component: () => import('../views/ExperienceView.vue'),
        props: (route) => ({
          ...route.params,
          experienceSlug: route.params.experienceSlug
        })
      }
    ]
  },
  // to catch all not matching route => regex inside the doc
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
    // API NEED TO LOAD BEFORE BEING ABLE TO DO THE SCROLL TO
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (to.name === 'experience.view') {
          resolve({
            el: 'aside' /* get element and scroll 10px above this one */,
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

export default router
