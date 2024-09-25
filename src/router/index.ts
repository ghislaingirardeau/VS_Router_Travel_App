import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Error from '../views/Error.vue'

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
    component: () => import('../views/DestinationView.vue'),
    // props inside route is alternative to params, to not use $route
    // so the component can be not completely tight to the url
    // also props allowed to change url values and reformat it as the format the component need
    // set to true, you can access to id via props id
    // props: true
    props: (route) => ({
      id: parseInt(route.params.id),
      hasNewsletterPopup: route.query.somePropsInRoute
        ? true
        : false /* pass static props or pass props depending on props inside route */
    }),
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
  linkActiveClass: 'custom-link-active-class'
})

export default router
