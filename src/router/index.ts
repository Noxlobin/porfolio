import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue'),
      name: 'Home'
    },
    {
      path: '/about',
      component: () => import('../views/AboutView.vue'),
      name: 'About'
    },
    {
      path: '/blogs',
      component: () => import('../views/BlogView.vue'),
      name: 'Blog'
    },
    {
      path: '/socials',
      component: () => import('../views/SocialsView.vue'),
      name: 'Socials'
    },
    {
      path: '/kitten',
      component: () => import('../views/KittenView.vue'),
      name: 'Secret'
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('../views/FourOhFouView.vue'),
      name: '404'
    }
  ]
})

export default router
