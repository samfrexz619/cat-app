import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // meta: {
      //   layout: 'navbar'
      // },
      component: HomeView
    },
    {
      path: '/voting',
      name: 'voting',
      component: () => import('@/views/voting/VotingView.vue')
    },
    {
      path: '/breeds',
      name: 'breeds',
      component: () => import('@/views/breeds/BreedsView.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('@/views/gallery/GalleryView.vue')
    },
  ]
})

export default router